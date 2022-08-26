import express from 'express';
import cors from 'cors';
import http from 'http';
import dotenv from 'dotenv';
import { Database } from "../config/database.js";
import { Routes } from '../routes/routes.js';
import { Telegraf } from 'telegraf';

dotenv.config();

class App {
    app = express.application;
    http = null
    bot = null
    routes = new Routes();
    db = new Database();

    constructor() {
        this.initializeApp()
    }

    async initializeApp() {
        this.app = express();
        this.config()
        this.http = http.createServer(this.app)
        await this.initDatabase();
        this.routes.routes(this.app);
        this.bot = new Telegraf(process.env.BOT_TIKEN);
        await this.InitBotListening
    }

    config() {
        this.app.use(
            express.urlencoded({
                extended: true
            }))

        this.app.use(express.json());

        this.app.use(cors({ origin: '*' }));
    }

    async initDatabase() {
        const connection = await this.db.connection();
        console.log(connection.message);
    }

    async InitBotListening(bot) {
        bot.on('text', (ctx) => {
            ctx.telegram.sendMessage(ctx.message.chat.id, 'Hello ${ctx.state.role}')
            ctx.reply('Hello ${ctx.state.role')
        })
    }
}

export default new App();