import { EquiposQueries } from "../queries/equipos.queries.js";

class EquiposController {
    async createEquipos(request, response) {
        const body = request.body;
        console.log(body)
        const query = await EquiposQueries.create(body);
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async deleteEquipos(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await EquiposQueries.delete({
            id: id
        });
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async updateEquipos(request, response) {
        const body = request.body;
        const id = request.params.id
        const query = await EquiposQueries.update(body, {
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async findEquipos(request, response) {
        const body = request.body
        console.log(body)
        const query = await EquiposQueries.find();
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }

    async findOneEquipos(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await EquiposQueries.findOne({
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }
}

export const equiposController = new EquiposController();