import { router } from "../routes"

/* Route types for controller */
export type GET = Parameters<Parameters<typeof router.get>[1]>
export type GET_REQUEST = GET[0]
export type GET_RESPONSE = GET[1]

export type POST = Parameters<Parameters<typeof router.post>[1]>
export type POST_REQUEST = POST[0]
export type POST_RESPONSE = POST[1]

export type PUT = Parameters<Parameters<typeof router.put>[1]>
export type PUT_REQUEST = PUT[0]
export type PUT_RESPONSE = PUT[1]

export type DELETE = Parameters<Parameters<typeof router.delete>[1]>
export type DELETE_REQUEST = DELETE[0]
export type DELETE_RESPONSE = DELETE[1]