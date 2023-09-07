import { InventariosrealizadosQueries } from "../queries/inventariosrealizados.queries.js";

class InventariosrealizadosController {
    async createInventariosrealizados(request, response) {
        const body = request.body;
        console.log(body)
        const query = await InventariosrealizadosQueries.create(body);
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async deleteInventariosrealizados(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await InventariosrealizadosQueries.delete({
            id: id
        });
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async updateInventariosrealizados(request, response) {
        const body = request.body;
        const id = request.params.id
        const query = await InventariosrealizadosQueries.update(body, {
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async findInventariosrealizados(request, response) {
        const body = request.body
        console.log(body)
        const query = await InventariosrealizadosQueries.find();
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }

    async findOneInventariosrealizados(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await InventariosrealizadosQueries.findOne({
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }
}

export const inventariosrealizadosController = new InventariosrealizadosController();