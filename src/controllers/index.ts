import { GET_REQUEST, GET_RESPONSE } from "../types/express";

export function home(req: GET_REQUEST, res: GET_RESPONSE) {
  res.send("Hello!")
}