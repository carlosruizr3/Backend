import { CatactivosQueries } from "../queries/catactivos.queries.js";

class CatactivosController {
    async createCatactivos(request, response) {
        const body = request.body;
        console.log(body)
        const query = await CatactivosQueries.create(body);
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async deleteCatactivos(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await CatactivosQueries.delete({
            id: id
        });
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async updateCatactivos(request, response) {
        const body = request.body;
        const id = request.params.id
        const query = await CatactivosQueries.update(body, {
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async findCatactivos(request, response) {
        const body = request.body
        console.log(body)
        const query = await CatactivosQueries.find();
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }

    async findOneCatactivos(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await CatactivosQueries.findOne({
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }
}

export const catactivosController = new CatactivosController();