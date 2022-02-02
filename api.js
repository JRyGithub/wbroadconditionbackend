import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config()

export const api = express()
api.use(cors({ origin: true }))
api.use(express.json())


api.get(`/`,async(req,res) => {
  res.send(`hello world!`)
})

api.get(`/getMapBoxKey`,async(req,res) => {
  res.send(process.env.MAPBOX_KEY || `Wah wah!`)
})