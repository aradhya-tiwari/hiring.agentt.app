import { UserMedia } from "./userMedia.svelte";

class AiInt extends UserMedia {
    aud: MediaStream | undefined = $state(undefined);
    pc: RTCPeerConnection | undefined = $state(undefined);
    dc: RTCDataChannel | undefined = $state(undefined);
    ms: MediaStream | undefined = $state()
    audioTrack1 = $derived.by(() => {
        return this.ms?.getAudioTracks()[0]
    })
    constructor() {
        super()
    }


    async init(RTCtoken: string) {

        if (typeof window) {
            this.ms = await this.getAudioDevices()
            this.pc = new RTCPeerConnection()
            this.dc = this.pc.createDataChannel("oai-events");
            const audioEl = document.createElement("audio");
            const EPHEMERAL_KEY = RTCtoken;

            audioEl.autoplay = true;

            this.pc.ontrack = e => {
                audioEl.srcObject = e.streams[0];
                this.aud = e.streams[0];
                console.log("aud", this.aud)
            }

            // Add local audio track for microphone input in the browser
            if (!this.ms) {
                throw "Audio Device not Found turn on permission"
            }

            if (this.audioTrack1) {
                this.pc.addTrack(this.audioTrack1);
            }
            // Set up data channel for sending and receiving events
            this.dc.addEventListener("message", (e) => {
                let audEvent = JSON.parse(e.data).type

                if (audEvent === "response.output_item.done") {
                    console.log("--------------------------------------------   ")
                    console.log(JSON.parse(e.data).item.content[0].transcript)
                }
                else if (audEvent === "input_audio_buffer.speech_started") {
                    console.log("input started")
                }
                else if (audEvent === "input_audio_buffer.speech_stopped") {
                    console.log("input stopped")
                }
                else {
                    console.log(JSON.parse(e.data))
                }
            });
            // Start the session using the Session Description Protocol (SDP)
            const offer = await this.pc.createOffer();
            await this.pc.setLocalDescription(offer);

            const baseUrl = "https://api.openai.com/v1/realtime";
            const model = "gpt-4o-mini-realtime-preview-2024-12-17";
            const sdpResponse = await fetch(`${baseUrl}?model=${model}`, {
                method: "POST",
                body: offer.sdp,
                headers: {
                    Authorization: `Bearer ${EPHEMERAL_KEY}`,
                    "Content-Type": "application/sdp"
                },
            });

            const answer = {
                type: "answer",
                sdp: await sdpResponse.text(),
            };
            // @ts-ignore
            await this.pc.setRemoteDescription(answer);

        }
        else {
            throw "window object not defined or Device not found"
        }

    }
    getAudioStream() {
        if (this.aud)
            return this.aud
        else throw "audio stream not available"
    }

}

export let aiInt = new AiInt()