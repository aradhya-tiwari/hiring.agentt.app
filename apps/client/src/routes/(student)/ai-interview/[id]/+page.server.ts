import { api } from "$lib/utils";
import type { PageLoad } from "../$types";

export const load: PageLoad = async ({ params }) => {
    let meetData = await (await api["ai-meet"].$get()).json()
    // TODO Check if meet @ this time and date and other things 
    let tokenData = await (await api["ai-meet"].getToken.$post()).json()
    // console.log(tokenData)
    return { data: tokenData.data }
};