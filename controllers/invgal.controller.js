import { InvgalQueries } from "../queries/invgal.queries.js";

class InvgalController {
    async createInvgal(request, response) {
        const body = request.body;
        console.log(body)
        const query = await InvgalQueries.create(body);
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async deleteInvgal(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await InvgalQueries.delete({
            id: id
        });
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async updateInvgal(request, response) {
        const body = request.body;
        const id = request.params.id
        const query = await InvgalQueries.update(body, {
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async findInvgal(request, response) {
        const body = request.body
        console.log(body)
        const query = await InvgalQueries.find();
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }

    async findOneInvgal(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await InvgalQueries.findOne({
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }
}

export const invgalController = new InvgalController();