import express from "express"
import { config } from "dotenv"
import { router } from "./src/routes"
config() 
export const app = express()
const port = process.env.PORT || 3000


app.use(router)

app.listen(port, () => {
  console.log("what!")
})