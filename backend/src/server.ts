import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express, { Request, Response } from 'express'
import { convertHourStringToMinutes } from './utils/convert-hour-string-to-minutes'
import { convertMinutesToHoursString } from './utils/convert-minutes-to-hour-string'

const app = express()
app.use(cors())
app.use(express.json())
const prisma = new PrismaClient()

app.get('/games', async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true
        }
      }
    }
  })
  return res.json(games)
})

app.post('/games/:id/ads', async (req, res) => {
  const gameId = req.params.id
  const body: any = req.body

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(','),
      hoursStart: convertHourStringToMinutes(body.hoursStart),
      hourEnd: convertHourStringToMinutes(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel
    }
  })

  return res.status(201).json(ad)
})

app.get('/games/:id/ads', async (req: Request, res: Response) => {
  const gameId = req.params.id

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hoursStart: true,
      hourEnd: true
    },
    where: {
      gameId
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
  return res.json(
    ads.map(ad => {
      return {
        ...ad,
        weekDays: ad.weekDays.split(','),
        hoursStart: convertMinutesToHoursString(ad.hoursStart),
        hourEnd: convertMinutesToHoursString(ad.hourEnd)
      }
    })
  )
})

app.get('/ads/:id/discord', async (req: Request, res: Response) => {
  const adId = req.params.id

  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true
    },
    where: {
      id: adId
    }
  })

  return res.json({
    discord: ad.discord
  })
})

app.listen(3333, () => {
  console.log('Running on: 3333')
})
