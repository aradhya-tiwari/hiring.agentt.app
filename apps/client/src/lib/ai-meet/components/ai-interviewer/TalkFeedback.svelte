<script lang="ts">
    import { aiInt } from "$lib/ai-meet/stores/initAi.svelte";

    let { audioChunk } = $props();

    let circleR = $state(180);
    let scaleFactor = 3;
    let maxR = 2;
    $effect(() => {
        const visualizerContainer = document.getElementById(
            "visualizer-container",
        );
        let audioContext: AudioContext;
        let analyser: AnalyserNode;
        let dataArray: Uint8Array<ArrayBuffer>;
        const sensitivity = 100; // Adjust for responsiveness

        async function initializeVisualizer() {
            try {
                audioContext = new (window.AudioContext ||
                    // @ts-ignore
                    window.webkitAudioContext)();
                let source: MediaStreamAudioSourceNode;
                setTimeout(() => {
                    source = audioContext.createMediaStreamSource(
                        aiInt.getAudioStream(),
                    );
                    analyser = audioContext.createAnalyser();
                    analyser.fftSize = 2048;
                    dataArray = new Uint8Array(analyser.frequencyBinCount);
                    source.connect(analyser);
                    visualize();
                }, 3000);
            } catch (err) {
                console.error(err);
                // Display an error message to the user in a real application
            }
        }

        function visualize() {
            analyser.getByteFrequencyData(dataArray);
            let average = 0;
            for (let i = 0; i < dataArray.length; i++) {
                average += dataArray[i];
            }
            average /= dataArray.length;

            // Scale the circle based on audio amplitude
            const scale = 1 + (average / 255) * scaleFactor; // Adjust scaling factor as needed
            visualizerContainer!.style.transform = `scale(${scale})`;
            if (scale > maxR)
                visualizerContainer!.style.transform = `scale(${maxR})`;
            // Add/remove "speaking" class based on sensitivity
            if (average > sensitivity) {
                visualizerContainer!.classList.add("speaking");
            } else {
                visualizerContainer!.classList.remove("speaking");
            }

            requestAnimationFrame(visualize);
        }

        initializeVisualizer();
    });
</script>

<div
    id="visualizer-container"
    class=" shadow-[0px_30px_60px_-1px] shadow-gray-800/70 rounded-full absolute top-1/2 left-1/2 -translate-1/2 bg-radial-[at_5%_100%] via-red-300 to-white/70"
    style={`width:${circleR}px;height:${circleR}px`}
></div>
