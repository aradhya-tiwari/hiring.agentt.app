type devicesType = { video?: boolean, audio?: boolean }
export class UserMedia {

    #video = $state(false)
    #audio = $state(true)
    audioDevices: MediaStream | undefined = $state()
    videoDevices: MediaStream | undefined = $state()

    toggle({ video, audio }: devicesType) {
        if (video) {
            this.#video = !this.#video
        }
        if (audio) this.#audio = !this.#audio
    }
    get() { }

    async getAudioDevices() {
        // if (this.audio)
        this.#audio
        let a = await navigator.permissions.query({ name: "microphone" })
        console.log(a)
        return await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: false
        });
    }
    async getVideoDevices() {
        // if (this.video)
        return await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: true
        });
    }
    isAudioOn() {
        return this.#audio
    }
    isVideoOn() {
        return this.#video
    }
}
export let userMedia = new UserMedia()




