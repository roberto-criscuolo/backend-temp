import { PrismaClient } from '@prisma/client'
import { z } from "zod"

const prisma = new PrismaClient()

const climaSchema = z.object({
    id: z.number({
        required_error: "ID é obrigatório.",
        invalid_type_error: "O ID deve ser um número inteiro.",
    }),

    cidade: z.string({
        required_error: "Cidade é obrigatório.",
        invalid_type_error: "A Cidade deve ser uma string.",
    })
        .min(3, { message: 'A Cidade deve ter no mínimo 3 letras.' })
        .max(200, { message: 'A Cidade deve ter no máximo 200 caracteres.' }),

    datahora: z.string({
        required_error: "Data e Hora é obrigatório.",
        invalid_type_error: "A datahora deve ser uma string.",
    })
        .min(3, { message: 'Formato inválido para data e hora.' })
        .max(200, { message: 'Data/Hora deve ter o seguinte formato: YYYY-MM-DDTHH:MM:SSZ' }),


    temperatura: z.number({
        required_error: "Temperatura é obrigatório.",
        invalid_type_error: "Temperatura deve ser numérico."
    }),

    condicao: z.string({
        required_error: "Condiçao é obrigatório.",
        invalid_type_error: "Condição deve ser uma string."
    }),

    umidade: z.number({
        required_error: "Umidade é obrigatório.",
        invalid_type_error: "Umidade deve ser numérico."
    }),

})

const validateClimaToCreate = (clima) => {
    const partialClimaSchema = climaSchema.partial({ id: true })
    return partialClimaSchema.safeParse(clima)
}



const validateClimaToUpdate = (clima) => {
    const partialClimaSchema = climaSchema.partial({ pass: true })
    return partialClimaSchema.safeParse(clima)
}

const getAll = async () => {
    return await prisma.clima.findMany({
        select: {
            id: true,
            cidade: true,
            datahora: true,
            temperatura: true,
            condicao: true,
            umidade: true
        }
    })
}

const getById = async (id) => {
    return await prisma.clima.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            cidade: true,
            datahora: true,
            temperatura: true,
            condicao: true,
            umidade: true
        }
    })
}

const create = async (clima) => {
    return await prisma.clima.create({
        data: clima,
        select: {
            id: true,
            cidade: true,
            datahora: true,
            temperatura: true,
            condicao: true,
            umidade: true
        }
    })
}

const remove = async (id) => {
    return await prisma.clima.delete({
        where: {
            id
        },
        select: {
            id: true,
            cidade: true,
            datahora: true,
            temperatura: true,
            condicao: true,
            umidade: true
        }
    })
}

const edit = async (clima) => {
    return await prisma.clima.update({
        where: {
            id: clima.id
        },
        data: clima,
        select: {
            id: true,
            cidade: true,
            datahora: true,
            temperatura: true,
            condicao: true,
            umidade: true
        }
    })
}


export default { validateClimaToCreate, validateClimaToUpdate, getAll, getById, create, remove, edit }