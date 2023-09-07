import { InvalmacenQueries } from "../queries/invalmacen.queries.js";

class InvalmacenController {
    async createInvalmacen(request, response) {
        const body = request.body;
        console.log(body)
        const query = await InvalmacenQueries.create(body);
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async deleteInvalmacen(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await InvalmacenQueries.delete({
            id: id
        });
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async updateInvalmacen(request, response) {
        const body = request.body;
        const id = request.params.id
        const query = await InvalmacenQueries.update(body, {
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async findInvalmacen(request, response) {
        const body = request.body
        console.log(body)
        const query = await InvalmacenQueries.find();
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }

    async findOneInvalmacen(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await InvalmacenQueries.findOne({
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }
}

export const invalmacenController = new InvalmacenController();