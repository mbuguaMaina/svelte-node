import { dev } from "$app/environment";
import axios from "axios";
import { env } from '$env/dynamic/private';
const url =
 dev
    ?  env.API_URL
    : env.LOCAL_URL;
const axiosFetcher = axios.create({
  baseURL: url,
});

export default axiosFetcher;
