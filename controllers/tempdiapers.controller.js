import { TempdiapersQueries } from "../queries/tempdiapers.queries";

class TempdiapersController {
    async createTempdiapers(request, response) {
        const body = request.body;
        console.log(body)
        const query = await TempdiapersQueries.create(body);
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async deleteTempdiapers(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await TempdiapersQueries.delete({
            id: id
        });
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async updateTempdiapers(request, response) {
        const body = request.body;
        const id = request.params.id
        const query = await TempdiapersQueries.update(body, {
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async findTempdiapers(request, response) {
        const body = request.body
        console.log(body)
        const query = await TempdiapersQueries.find();
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }

    async findOneTempdiapers(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await TempdiapersQueries.findOne({
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }
}

export const tempdiapersController = new TempdiapersController();