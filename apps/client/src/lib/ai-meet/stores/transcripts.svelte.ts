import { PUBLIC_ENV } from "$env/static/public"

export type chatByType = "assistant" | "user" | "info"
class ChatBubble {
    msg = $state("")
    by = $state<chatByType>("info")
    info? = $state<any>({})
    constructor({ msg, by, info }:
        { msg: string, by: chatByType, info?: any }) {

        this.msg = msg
        this.by = by
        this.info = info
    }

}
class Transcriptions {
    #transcripts = $state<Array<ChatBubble>>([])
    constructor() { }

    addChat({ msg, by, info }:
        { msg: string, by: chatByType, info?: any }) {

        let chat = new ChatBubble({ msg: msg, by: by, info: info })
        this.#transcripts.push(chat)
    }
    getChats() {
        return this.#transcripts
    }
}

export let transcripts = new Transcriptions()

if (PUBLIC_ENV === "DEV") {
    transcripts.addChat({
        msg: "wow wow wow byy... chat kro assistant ",
        by: "user"
    })
    transcripts.addChat({
        msg: "kow kow oppopo",
        by: "assistant"
    })
    transcripts.getChats()
}
