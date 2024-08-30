const express = require("express");
const houseController = require("./../Controller/houseController");

const router = express.Router();

router.route('/search-houses')
  .get(houseController.getHouses);
router.route('/featured')
  .get(houseController.getFeaturedHouses);
router.route('/for-sale')
  .get(houseController.getForSaleHouses);
router.route('/for-rent')
  .get(houseController.getForRentHouses);
router.route('/:id')
  .get(houseController.getHouseById);
module.exports = router;