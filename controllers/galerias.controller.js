import { GaleriasQueries } from "../queries/galerias.queries.js";

class GaleriasController {
    async createGalerias(request, response) {
        const body = request.body;
        console.log(body)
        const query = await GaleriasQueries.create(body);
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async deleteGalerias(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await GaleriasQueries.delete({
            id: id
        });
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async updateGalerias(request, response) {
        const body = request.body;
        const id = request.params.id
        const query = await GaleriasQueries.update(body, {
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async findGalerias(request, response) {
        const body = request.body
        console.log(body)
        const query = await GaleriasQueries.find();
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }

    async findOneGalerias(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await GaleriasQueries.findOne({
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }
}

export const galeriasController = new GaleriasController();