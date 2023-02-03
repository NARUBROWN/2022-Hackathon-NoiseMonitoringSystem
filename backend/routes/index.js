var express = require('express');
var router = express.Router();
const controller = require('../controller/index');

router.get('/get_building_information', controller.get_building_information);
router.post('/insert-result', controller.insert_result);
router.get('/get_building_list', controller.get_building_list);
router.get('/get_unit_list/:building', controller.get_unit_list);
router.get('/get_unit/:unit', controller.get_unit);
router.get('/get_caution_list', controller.get_caution_list);
router.get('/get_warning_list', controller.get_warning_list);
router.get('/get_unit_caution/:building/:unit', controller.get_unit_caution);
router.get('/get_unit_warning/:building/:unit', controller.get_unit_warning);
router.get('/get_unit_avg_db/:building/:unit', controller.get_unit_avg_db);
router.get('/get_unit_avg_db/:building/:unit', controller.get_unit_avg_db);
router.get('/get_avg_db', controller.get_avg_db);

module.exports = router;
