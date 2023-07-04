import { SeguimientoQueries } from "../queries/seguimiento.queries.js";

class SeguimientoController {
    async createSeguimiento(request, response) {
        const body = request.body;
        console.log(body)
        const query = await SeguimientoQueries.create(body);
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async deleteSeguimiento(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await SeguimientoQueries.delete({
            id: id
        });
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async updateSeguimiento(request, response) {
        const body = request.body;
        const id = request.params.id
        const query = await SeguimientoQueries.update(body, {
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async findSeguimiento(request, response) {
        const body = request.body
        console.log(body)
        const query = await SeguimientoQueries.find();
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }

    async findOneSeguimiento(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await SeguimientoQueries.findOne({
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }
}

export const seguimientoController = new SeguimientoController();