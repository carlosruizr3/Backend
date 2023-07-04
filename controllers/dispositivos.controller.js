import { DispositivosQueries } from "../queries/dispositivos.queries.js";

class DispositivosController {
    async createDispositivos(request, response) {
        const body = request.body;
        console.log(body)
        const query = await DispositivosQueries.create(body);
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async deleteDispositivos(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await DispositivosQueries.delete({
            id: id
        });
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async updateDispositivos(request, response) {
        const body = request.body;
        const id = request.params.id
        const query = await DispositivosQueries.update(body, {
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async findDispositivos(request, response) {
        const body = request.body
        console.log(body)
        const query = await DispositivosQueries.find();
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }

    async findOneDispositivos(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await DispositivosQueries.findOne({
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }
}

export const dispositivosController = new DispositivosController();