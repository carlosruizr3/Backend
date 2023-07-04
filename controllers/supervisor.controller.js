import { SupervisorQueries } from "../queries/supervisor.queries.js";

class SupervisorController {
    async createSupervisor(request, response) {
        const body = request.body;
        console.log(body)
        const query = await SupervisorQueries.create(body);
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async deleteSupervisor(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await SupervisorQueries.delete({
            id: id
        });
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async updateSupervisor(request, response) {
        const body = request.body;
        const id = request.params.id
        const query = await SupervisorQueries.update(body, {
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async findSupervisor(request, response) {
        const body = request.body
        console.log(body)
        const query = await SupervisorQueries.find();
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }

    async findOneSupervisor(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await SupervisorQueries.findOne({
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }
}

export const supervisorController = new SupervisorController();