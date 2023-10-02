import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export async function POST(request: Request) {
    const newUser = await request.json()

    const userCreated = await prisma.usuarios.create({data: newUser})

    if (!userCreated) {
        return new Response('Error al crear el nuevo usuario')
    }

    return new Response('Usuario creado correctamente!')
}

export async function GET(request: Request) {
    const users = await request.json()

    const getAllUsers = await prisma.usuarios.findMany()

    if (!getAllUsers) {
        return new Response('No se pudieron obtener los usuarios')
    }

    return new Response('Usuarios obtenidos!')
}

export async function PUT(request: Request) {
    const user = await request.json()

    const putUserActive = await prisma.usuarios.update({ where: { id: user.id }, data: user})

    if (!putUserActive) {
        return new Response("No se pudo actualizar el usuario")
    }

    return new Response("Usuario actualizado")
}

export async function GETBYAGE(request: Request) {
    const users = await request.json()

    const getUsersAge25 = await prisma.usuarios.findMany({ where: { edad: {
        gt: 25
    }}})

    if (!getUsersAge25) {
        return new Response('No se pudieron obtener los usuarios')
    }

    return new Response('Usuarios obtenidos!')
}