import { ConsmedQueries } from "../queries/consmed.queries";

class ConsmedController {
    async createConsmed(request, response) {
        const body = request.body;
        console.log(body)
        const query = await ConsmedQueries.create(body);
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async deleteConsmed(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await ConsmedQueries.delete({
            id: id
        });
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async updateConsmed(request, response) {
        const body = request.body;
        const id = request.params.id
        const query = await ConsmedQueries.update(body, {
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async findConsmed(request, response) {
        const body = request.body
        console.log(body)
        const query = await ConsmedQueries.find();
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }

    async findOneConsmed(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await ConsmedQueries.findOne({
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }
}

export const consmedController = new ConsmedController();