import express from "express";
import { userController } from '../controllers/user.controller.js';
import { aboutController } from "../controllers/about.controller.js";
import { educationController } from "../controllers/education.controller.js";
import { experienceController } from "../controllers/experience.controller.js";
import { consmedController } from "../controllers/consmed.controller";
import { contconsultController } from "../controllers/contconsult.controller";
import { formventaController } from "../controllers/formventa.controller";
import { solicfactController } from "../controllers/solicfact.controller";
import { tempdiapersController } from "../controllers/tempdiapers.controller";
import { temphumedController } from "../controllers/temphumed.controller";
import { validateToken } from "../middlewares/accessToken.middleware.js";
import { limpymantController } from "../controllers/limpymant.controller";


export class Routes {

  routes(app = express.application) {
    app.get('/', (req, res) => {
      res.send(" hola mundo")
    });

    //Users
    app.post('/data,', userController.processData);
    app.route('/register_user').post([validateToken.validateJWT], userController.registro);
    app.route('/find_user').post([validateToken.validateJWT], userController.find);
    app.route('/delete_user').delete([validateToken.validateJWT], userController.delete);
    app.route('/find_user').post([validateToken.validateJWT], userController.find);
    app.route('/update_user').put([validateToken.validateJWT], userController.update);
    app.post('/login', userController.login);
    
    // About
    app.post('/create_about', aboutController.createAbout);
    app.delete('/delete_about/:id', aboutController.deleteAbout);
    app.get('/find_about', aboutController.findAbout);
    app.route('/update_about/:id').put(aboutController.updateAbout);
    app.route('/findone_about/:id').get(aboutController.findOneAbout);

    // Education
    app.post('/create_education', educationController.createEducation);
    app.delete('/delete_education/:id', educationController.deleteEducation);
    app.get('/find_education', educationController.findEducation);
    app.route('/update_education/:id').put(educationController.updateEducation);
    app.route('/findone_education/:id').get(educationController.findOneEducation);

    // Experience
    app.post('/create_experience', experienceController.createExperience);
    app.delete('/delete_experience/:id', experienceController.deleteExperience);
    app.get('/find_experience', experienceController.findExperience);
    app.route('/update_experience/:id').put(experienceController.updateExperience);
    app.route('/findone_experience/:id').get(experienceController.findOneExperience);

    // Limpieza y mantenimiento
    app.post('/create_limpymant', limpymantController.createLimpymant);
    app.delete('/delete_limpymant/:id', limpymantController.deleteLimpymant);
    app.get('/find_limpymant', limpymantController.findLimpymant);
    app.route('/update_limpymant/:id').put(limpymantController.updateLimpymant);
    app.route('/findone_limpymant/:id').get(limpymantController.findOneLimpymant);

    // Control de consultas
    app.post('/create_contconsult', contconsultController.createContconsult);
    app.delete('/delete_contconsult/:id', contconsultController.deleteContconsult);
    app.get('/find_contconsult', contconsultController.findContconsult);
    app.route('/update_contconsult/:id').put(contconsultController.updateContconsult);
    app.route('/findone_contconsult/:id').get(contconsultController.findOneContconsult);

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
    app.route('/findone_formventa/:id').get(formventaController.findOneFormventa);
  }
}