import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export async function POST(request: Request) {
    const publicaciones = await request.json()

    const crearPublicacion = await prisma.publicaciones.create({ data: publicaciones })

    if (!crearPublicacion) {
        return new Response("No se creó la publicación")
    }

    return new Response("Se creó la publicación")
}

export async function GET(request: Request) {
    const userPublicaciones = await request.json()

    const obtenerPublicaciones = await prisma.publicaciones.findMany({ where: {
        autorId: 1
    }})

    if (!obtenerPublicaciones) {
        return new Response("No se pudieron obtener las publicaciones")
    }

    return new Response("Se pudieron obtener las publicaciones")

}