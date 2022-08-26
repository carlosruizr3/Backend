import { AboutQueries } from "../queries/about.queries.js";

class AboutController {
    async createAbout(request, response) {
        const body = request.body;
        console.log(body)
        const query = await AboutQueries.create(body);
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async deleteAbout(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await AboutQueries.delete({
            id: id
        });
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async updateAbout(request, response) {
        const body = request.body;
        const id = request.params.id
        const query = await AboutQueries.update(body, {
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async findAbout(request, response) {
        const body = request.body
        console.log(body)
        const query = await AboutQueries.find();
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }

    async findOneAbout(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await AboutQueries.findOne({
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }
}

export const aboutController = new AboutController();