import { SolicfactQueries } from "../queries/solicfact.queries";

class SolicfactController {
    async createSolicfact(request, response) {
        const body = request.body;
        console.log(body)
        const query = await SolicfactQueries.create(body);
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async deleteSolicfact(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await SolicfactQueries.delete({
            id: id
        });
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async updateSolicfact(request, response) {
        const body = request.body;
        const id = request.params.id
        const query = await SolicfactQueries.update(body, {
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async findSolicfact(request, response) {
        const body = request.body
        console.log(body)
        const query = await SolicfactQueries.find();
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }

    async findOneSolicfact(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await SolicfactQueries.findOne({
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }
}

export const solicfactController = new SolicfactController();