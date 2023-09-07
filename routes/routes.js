import express from "express";
import { userController } from '../controllers/user.controller.js';
import { validateToken } from "../middlewares/accessToken.middleware.js";
import { galeriasController } from "../controllers/galerias.controller.js";
import { catactivosController } from "../controllers/catactivos.controller.js";


export class Routes {

  routes(app = express.application) {
    app.get('/', (req, res) => {
      res.send(" hola mundo")
    });

    //Users
    app.post('/data,', userController.processData);
    app.post('/register_user', userController.registro);
    app.post('/login', userController.login);
    app.put('/update_user', userController.update);
    app.delete('/delete_user', userController.delete);
    app.post('/find_user', userController.find);

    //app.route('/register_user').post([validateToken.validateJWT], userController.registro);
    //app.route('/find_user').post([validateToken.validateJWT], userController.find);
    //app.route('/delete_user').delete([validateToken.validateJWT], userController.delete);
    //app.route('/update_user').put([validateToken.validateJWT], userController.update);


    // Rutas galerías
    app.post('/create_galeria', galeriasController.createGalerias);
    app.delete('/delete_galeria/:id', galeriasController.deleteGalerias);
    app.get('/find_galeria', galeriasController.findGalerias);
    app.route('/update_galeria/:id').put(galeriasController.updateGalerias);
    app.route('/findone_galeria/:id').get(galeriasController.findOneGalerias);


    // Rutas catalogo activos
    app.post('/create_catactivos', catactivosController.createCatactivos);
    app.delete('/delete_catactivos/:id', catactivosController.deleteCatactivos);
    app.get('/find_catactivos', catactivosController.findCatactivos);
    app.route('/update_catactivos/:id').put(catactivosController.updateCatactivos);
    app.route('/findone_catactivos/:id').get(catactivosController.findOneCatactivos);



    /*
    // Consumos medicos
    app.post('/create_consmed', consmedController.createConsmed);
    app.delete('/delete_consmed/:id', consmedController.deleteConsmed);
    app.get('/find_consmed', consmedController.findConsmed);
    app.route('/update_consmed/:id').put(consmedController.updateConsmed);
    app.route('/findone_consmed/:id').get(consmedController.findOneConsmed);

    // Solicitar factura
    app.post('/create_solicfact', solicfactController.createSolicfact);
    app.delete('/delete_solicfact/:id', solicfactController.deleteSolicfact);
    app.get('/find_solicfact', solicfactController.findSolicfact);
    app.route('/update_solicfact/:id').put(solicfactController.updateSolicfact);
    app.route('/findone_solicfact/:id').get(solicfactController.findOneSolicfact);

    // Temperatura diaria personal
    app.post('/create_tempdiapers', tempdiapersController.createTempdiapers);
    app.delete('/delete_tempdiapers/:id', tempdiapersController.deleteTempdiapers);
    app.get('/find_tempdiapers', tempdiapersController.findTempdiapers);
    app.route('/update_tempdiapers/:id').put(tempdiapersController.updateTempdiapers);
    app.route('/findone_tempdiapers/:id').get(tempdiapersController.findOneTempdiapers);

    // Temperatura y humedad
    app.post('/create_temphumed', temphumedController.createTemphumed);
    app.delete('/delete_temphumed/:id', temphumedController.deleteTemphumed);
    app.get('/find_temphumed', temphumedController.findTemphumed);
    app.route('/update_temphumed/:id').put(temphumedController.updateTemphumed);
    app.route('/findone_temphumed/:id').get(temphumedController.findOneTemphumed);

    // Formato de venta
    app.post('/create_formventa', formventaController.createFormventa);
    app.delete('/delete_formventa/:id', formventaController.deleteFormventa);
    app.get('/find_formventa', formventaController.findFormventa);
    app.route('/update_formventa/:id').put(formventaController.updateFormventa);
    app.route('/findone_formventa/:id').get(formventaController.findOneFormventa);*/
  }
}