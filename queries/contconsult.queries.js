import { ContconsultModel } from "../models/contconsult.model"

class contconsultQueries {
    async create(data) {
        try {
            const query = await ContconsultModel.create(data);
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
            const query = await ContconsultModel.destroy({ where: condition });
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
            const query = await ContconsultModel.update(data, { where: condition })

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
        const query = await ContconsultModel.findAll()

        if (query.length === 0) {
            return { ok: false, data: null }
        } else {
            return { ok: true, data: query }
        }
    }

    async findOne(condition = {}) {
        try {
            const query = await ContconsultModel.findOne({ where: condition });
            if (query) {
                return { ok: true, data: query };
            }
        } catch (e) {
            console.log("error en la query", e)
            return { ok: false, data: null }
        }
    }
}

export const ContconsultQueries = new contconsultQueries();