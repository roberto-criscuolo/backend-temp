//const express = require('express')
import express from 'express'
import {PORT, HOST} from './config.js'
import climaRouter from './routers/climaRouter.js'
import cors from 'cors'

const app = express()

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:8081', 'http://meusite.com'],
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())

app.use("/clima", climaRouter)

app.listen(PORT, () => {
  console.log(`Server running on ${HOST}:${PORT}`)
})


