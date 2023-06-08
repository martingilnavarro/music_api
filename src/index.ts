import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

// GET /artista traer todos los artistas disponibles.
app.get('/artistas', async (req, res) => {
    const artistas = await prisma.artista.findMany()
    res.json(artistas)
  })

app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
)