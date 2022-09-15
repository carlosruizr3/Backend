import { TemphumedQueries } from "../queries/temphumed.queries";

class TemphumedController {
    async createTemphumed(request, response) {
        const body = request.body;
        console.log(body)
        const query = await TemphumedQueries.create(body);
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async deleteTemphumed(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await TemphumedQueries.delete({
            id: id
        });
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async updateTemphumed(request, response) {
        const body = request.body;
        const id = request.params.id
        const query = await TemphumedQueries.update(body, {
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async findTemphumed(request, response) {
        const body = request.body
        console.log(body)
        const query = await TemphumedQueries.find();
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }

    async findOneTemphumed(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await TemphumedQueries.findOne({
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }
}

export const temphumedController = new TemphumedController();