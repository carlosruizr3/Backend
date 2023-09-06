import { request, response } from "express";
import { UserQueries } from "../queries/user.queries.js"
import { Payload } from "../helpers/payload.js";
import { encrypt } from "../helpers/handleBcrpt.js";

class UserController {
    static payload = new Payload();

    async sayHello(request, response) {
        return response.status(200).json({
            ok: true,
            message: 'hello '

        })
    }

    async processData(request, response) {
        const body = request.body;
        console.log('datos del front', body);
        return response.status(403).json({ ok: true, message: '  data received ' });
    }

    async find(request, response) {
        const body = request.body
        console.log(body)
        const query = await UserQueries.find({
            id: body.id
        })

        if (query.ok) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato" })
        }
    }

    async login(req, res) {
        const body = req.body;
        console.log("body: ", body)
        const query = await UserQueries.findOne({
            usuario: body.usuario,
            password: body.password,
        })

        const pass = await encrypt.comparePass(body.password, query.data.password)
        console.log("password", pass)

        if (pass) {
            try {
                const token = UserController.payload.createToken(query.data);
                return res.status(200).send({
                    ok: true, data: query.data, token: token,
                })
            } catch (e) {
                console.log("Error", e)
                return res.status(403).send({
                    ok: false,
                    data: null
                });
            }
        } else {
            return res.status(403).send({
                ok: false,
                data: null,
            })
        }
    }

    async registro(request, response) {
        const body = request.body;
        const password = await encrypt.encrypt(body.password)
        const query = await UserQueries.createUser(body.id, body.nombre, body.zona, body.usuario, body.tipoUsuario, password)
        console.log(query)
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async delete(request, response) {
        const body = request.body
        console.log(body)

        const query = await UserQueries.delete({
            id: body.id
        });

        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async update(request, response) {
        const body = request.body
        const query = await UserQueries.update(body, {
            id: body.id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }
}
export const userController = new UserController();