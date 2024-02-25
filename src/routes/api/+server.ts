import { json } from "@sveltejs/kit";

export async function GET({request}) {
    console.log(request)
    return json({"cool":"cool"})
}