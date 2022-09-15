import { ContconsultQueries } from "../queries/contconsult.queries";

class ContconsultController {
    async createContconsult(request, response) {
        const body = request.body;
        console.log(body)
        const query = await ContconsultQueries.create(body);
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async deleteContconsult(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await ContconsultQueries.delete({
            id: id
        });
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async updateContconsult(request, response) {
        const body = request.body;
        const id = request.params.id
        const query = await ContconsultQueries.update(body, {
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async findContconsult(request, response) {
        const body = request.body
        console.log(body)
        const query = await ContconsultQueries.find();
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }

    async findOneContconsult(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await ContconsultQueries.findOne({
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }
}

export const contconsultController = new ContconsultController();