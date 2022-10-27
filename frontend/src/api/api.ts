import axios from "axios"

export const API = axios.create({
  baseURL: "https://xanity.saizaax.xyz/api/",
  headers: { "Content-type": "application/json" },
})
