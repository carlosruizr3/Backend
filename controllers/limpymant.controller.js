import { LimpymantQueries } from "../queries/limpymant.queries";

class LimpymantController {
    async createLimpymant(request, response) {
        const body = request.body;
        console.log(body)
        const query = await LimpymantQueries.create(body);
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async deleteLimpymant(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await LimpymantQueries.delete({
            id: id
        });
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async updateLimpymant(request, response) {
        const body = request.body;
        const id = request.params.id
        const query = await LimpymantQueries.update(body, {
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async findLimpymant(request, response) {
        const body = request.body
        console.log(body)
        const query = await LimpymantQueries.find();
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }

    async findOneLimpymant(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await LimpymantQueries.findOne({
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }
}

export const limpymantController = new LimpymantController();