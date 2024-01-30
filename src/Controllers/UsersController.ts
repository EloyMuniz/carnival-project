import axios from "axios";
import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// interface params {
//     latitude_or: string
//     longitude_or: string
//     latitude_end: string
//     longitude_end: string
// }
class UsersController {
    public async Carnival(req: Request, res: Response) {
        try {
            const { bloco, mode } = req.params
            const block = await prisma.blocks.findFirst({
                select: {
                    bl_address: true

                },
                where: { bl_block: bloco }

            })
            const bl = block?.bl_address
            
            const options0 = await axios.get('https://api.geoapify.com/v1/geocode/search?apiKey=f7a9f54b473a4473a2d3cca883d1fa0a', {
                params: { text: bl + ",BH,MG" }

            })

            const lat0 = options0.data.features[0].properties.lat
            const lon0 = options0.data.features[0].properties.lon

            const options1 = await axios.get('https://api.geoapify.com/v1/routing?apiKey=f7a9f54b473a4473a2d3cca883d1fa0a', {
                params: { waypoints: "-19.919051679119118" + ',' + "-43.93861777538025" + '|' + lat0 + ',' + lon0, mode: mode }

            })

            return res.status(200).json(options1.data)


        } catch (error) {
            return res.status(400).json({ message: `Não foi possível fazer a consulta: ${error}` })
        }

    }


}
export default new UsersController()

