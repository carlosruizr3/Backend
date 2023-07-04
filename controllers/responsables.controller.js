import { ResponsablesQueries } from "../queries/responsables.queries.js";

class ResponsablesController {
    async createResponsables(request, response) {
        const body = request.body;
        console.log(body)
        const query = await ResponsablesQueries.create(body);
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async deleteResponsables(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await ResponsablesQueries.delete({
            id: id
        });
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async updateResponsables(request, response) {
        const body = request.body;
        const id = request.params.id
        const query = await ResponsablesQueries.update(body, {
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async findResponsables(request, response) {
        const body = request.body
        console.log(body)
        const query = await ResponsablesQueries.find();
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }

    async findOneResponsables(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await ResponsablesQueries.findOne({
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }
}

export const responsablesController = new ResponsablesController();