import { SupervisorModel } from "../models/supervisor.model.js"

class supervisorQueries {
    async create(data) {
        try {
            const query = await SupervisorModel.create(data);
            if (query) {
                return { ok: true, data: query }
            } else {
                return { ok: false, data: null }
            }
        } catch (e) {
            console.log("error en la query", e)
        }
    }

    async delete(condition = {}) {
        try {
            const query = await SupervisorModel.destroy({ where: condition });
            if (query) {
                return { ok: true, data: query }
            }
            else {
                return { ok: false, data: null }
            }

        } catch (e) {
            console.log("error en la query", e)
        }
    }

    async update(data, condition = {}) {
        try {
            const query = await SupervisorModel.update(data, { where: condition })

            if (query) {
                return { ok: true, data: query }
            } else {
                return { ok: false, data: null }
            }
        } catch (e) {
            console.log("error en la query", e)
        }
    }

    async find() {
        const query = await SupervisorModel.findAll()

        if (query.length === 0) {
            return { ok: false, data: null }
        } else {
            return { ok: true, data: query }
        }
    }

    async findOne(condition = {}) {
        try {
            const query = await SupervisorModel.findOne({ where: condition });
            if (query) {
                return { ok: true, data: query };
            }
        } catch (e) {
            console.log("error en la query", e)
            return { ok: false, data: null }
        }
    }
}

export const SupervisorQueries = new supervisorQueries();