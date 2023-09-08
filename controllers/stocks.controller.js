import { StocksQueries } from "../queries/stocks.queries.js";

class StocksController {
    async createStocks(request, response) {
        const body = request.body;
        console.log(body)
        const query = await StocksQueries.create(body);
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async deleteStocks(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await StocksQueries.delete({
            id: id
        });
        if (query) {
            return response.status(200).json({ ok: true, data: query })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async updateStocks(request, response) {
        const body = request.body;
        const id = request.params.id
        const query = await StocksQueries.update(body, {
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null })
        }
    }

    async findStocks(request, response) {
        const body = request.body
        console.log(body)
        const query = await StocksQueries.find();
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }

    async findOneStocks(request, response) {
        const id = request.params.id
        console.log(id)
        const query = await StocksQueries.findOne({
            id: id
        })
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data })
        } else {
            return response.status(403).json({ ok: false, data: null, message: "No se encontro el dato"})
        }
    }
}

export const stocksController = new StocksController();