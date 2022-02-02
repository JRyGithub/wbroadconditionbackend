import { api } from "./api.js"

const port = process.env.PORT || 5000;

api.listen(port,() => {
  console.log(`Server is listening at ${port}`)
})