import { PUBLIC_API_URL } from "$env/static/public";
import PocketBase from "pocketbase"

const pb = new PocketBase(PUBLIC_API_URL);
pb.autoCancellation(false)

export default pb
