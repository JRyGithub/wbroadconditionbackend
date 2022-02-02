import { api } from "./api.js"

const port = 3123

api.listen(port,() => {
  console.log(`Example app listening at http://localhost:${port}`)
})