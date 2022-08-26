import { ExperienceQueries } from "../queries/experience.queries.js";

class ExperienceController {
    async createExperience(request, response) {
        const body = request.body;
        console.log(body)
        const query = await ExperienceQueries.create(body);

        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async deleteExperience(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await ExperienceQueries.delete({
            id: id
        });

        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async updateExperience(request, response) {
        const body = request.body;
        const id = request.params.id
        const query = await ExperienceQueries.update(body, {
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async findExperience(request, response) {
        const body = request.body
        console.log(body)
        const query = await ExperienceQueries.find();
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }

    async findOneExperience(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await ExperienceQueries.findOne({
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }
}

export const experienceController = new ExperienceController();