import { UserModel } from "../models/user.model.js"

class userQueries {
    async store(user) {
        try {
            const query = await UserModel.create(user);
            if (query) {
                return { ok: true, data: query };
            }
        } catch (e) {
            console.log('error en la query', e);
            return { ok: false, data: null }
        }
    }

    async find(condition = {}) {
        try {
            const query = await UserModel.findOne({ where: condition });
            console.log("query ejecutada", query);
            if (query) {
                return { ok: true, data: query };
            }
        } catch (e) {
            console.log("error en la query", e)
            return { ok: false, data: null }
        }
    }

    async findOne(condition = {}) {
        try {
            const query = await UserModel.findOne({ where: { username: condition.username } });
            console.log("query ejecutada", query);
            if (query) {
                return { ok: true, data: query };
            }
        } catch (e) {
            console.log("error en la query", e)
            return { ok: false, data: null }
        }
    }

    async delete(condition = {}) {
        try {
            const query = await UserModel.destroy({ where: condition });
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
            const query = await UserModel.update(data, { where: condition })

            if (query) {
                return { ok: true, data: query }
            } else {
                return { ok: false, data: null }
            }
        } catch (e) {
            console.log("error en la query", e)
        }
    }

    async createUser(id, name, surname, birth, email, username, password) {
        try {
            const query = await UserModel.create({
                id: id,
                name: name,
                surname: surname,
                birth: birth,
                email: email,
                username: username,
                password: password
            });
            if (query) {
                return { ok: true, data: query }
            }
        } catch (e) {
            return { ok: false, data: null }
        }
    }
}
export const UserQueries = new userQueries();