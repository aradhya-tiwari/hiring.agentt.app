import { DurableObject } from "cloudflare:workers";

export class AlarmExample extends DurableObject {
    constructor(ctx: DurableObjectState, env: Env) {
        super(ctx, env)
    }
    async fetch(request: Request) {
        console.log("AlarmExample fetch called");
        // If there is no alarm currently set, set one for 10 seconds from now
        let currentAlarm = await this.ctx.storage.getAlarm();
        if (currentAlarm == null) {
            console.log("Setting alarm for 10 seconds from now");
            await this.ctx.storage.setAlarm(Date.now() + 10 * 1000);
        } else {
            console.log(`Alarm already set for: ${new Date(currentAlarm).toISOString()}`);
        }
        return new Response("AlarmExample fetch handled");
    }
    async alarm() {
        console.log("AlarmExample alarm fired!");
        // The alarm handler will be invoked whenever an alarm fires.
        // You can use this to do work, read from the Storage API, make HTTP calls
        // and set future alarms to run using this.storage.setAlarm() from within this handler.
    }
}

export class EmailSchedulerDO extends DurableObject {
    constructor(ctx: DurableObjectState, env: Env) {
        super(ctx, env);
    }

    // Method to schedule an email
    async scheduleEmail(emailDetails: { to: string, subject: string, body: string }, delayMs: number) {
        console.log(`Scheduling email to ${emailDetails.to} with subject "${emailDetails.subject}" in ${delayMs}ms`);

        await this.ctx.storage.put("emailDetails", emailDetails);
        await this.ctx.storage.setAlarm(Date.now() + delayMs);
        return new Response("Email scheduled successfully!");
    }

    // Alarm handler for sending the email
    async alarm() {
        console.log("EmailSchedulerDO alarm fired! Attempting to send email...");
        const emailDetails = await this.ctx.storage.get<{ to: string, subject: string, body: string }>("emailDetails");

        if (emailDetails) {
            console.log(`Sending email to: ${emailDetails.to}`);
            console.log(`Subject: ${emailDetails.subject}`);
            console.log(`Body: ${emailDetails.body}`);
            // In a real application, you would integrate with an email sending service here.
            // For now, we just log it.
            await this.ctx.storage.delete("emailDetails"); // Clean up
        } else {
            console.log("No email details found for this alarm.");
        }
    }

    // // A fetch method is required for Durable Objects, even if not directly used for scheduling
    // async fetch(request: Request) {
    //     // This fetch method could be used to trigger scheduling from an external source
    //     // For now, we'll just return a simple response.
    //     console.log("EmailSchedulerDO fetch called.");
    //     return new Response("EmailSchedulerDO is running.");
    // }
}
