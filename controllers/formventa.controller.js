import { FormventaQueries } from "../queries/formventa.queries";

class FormventaController {
    async createFormventa(request, response) {
        const body = request.body;
        console.log(body)
        const query = await FormventaQueries.create(body);
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async deleteFormventa(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await FormventaQueries.delete({
            id: id
        });
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async updateFormventa(request, response) {
        const body = request.body;
        const id = request.params.id
        const query = await FormventaQueries.update(body, {
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async findFormventa(request, response) {
        const body = request.body
        console.log(body)
        const query = await FormventaQueries.find();
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }

    async findOneFormventa(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await FormventaQueries.findOne({
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }
}

export const formventaController = new FormventaController();