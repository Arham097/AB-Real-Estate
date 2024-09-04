const House = require('../Model/house');

exports.getHouseById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const house = await House.findOne({ property_id: id });
    if (!house) {
      return res.status(404).json({
        status: 'fail',
        message: `The House with id:${id} not found`
      })
    }
    res.status(200).json({
      status: 'success',
      data: {
        house
      }
    })

  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message
    })
  }
};
exports.getHouses = async (req, res, next) => {
  try {
    const { city, location, property_type, min_price = 0, max_price = Infinity, min_area = 0, max_area = Infinity } = req.body;
    const houses = await House.find({
      city,
      location,
      property_type,
      price: {
        $gte: min_price,
        $lte: max_price
      },
      area: {
        $gte: min_area,
        $lte: max_area,
      }
    });
    if (houses.length === 0) {
      return res.status(404).json({
        status: 'fail',
        message: "Houses with given description not found",
      });
    }
    res.status(200).json({
      status: 'success',
      length: houses.length,
      data: {
        houses
      }
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message
    })
  }
};

exports.getFeaturedHouses = async (req, res, next) => {
  try {
    const houses = await House.find({ price: { $gte: 10000000 } }).limit(4);
    if (!houses) {
      return res.status(404).json({
        status: 'fail',
        message: "Not Found",
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        houses
      }
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message
    })
  }
};

exports.getForSaleHouses = async (req, res, next) => {
  try {
    const houses = await House.find({ purpose: "For Sale" }).limit(4);
    if (!houses) {
      return res.status(404).json({
        status: 'fail',
        message: "Not Found",
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        houses
      }
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message
    })
  }
}
exports.getForRentHouses = async (req, res, next) => {
  try {
    const houses = await House.find({ purpose: "For Rent" }).limit(4);
    if (!houses) {
      return res.status(404).json({
        status: 'fail',
        message: "Not Found",
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        houses
      }
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message
    })
  }
}

exports.getLocations = async (req, res, next) => {
  try {
    const locations = await House.find().distinct('location');
    if (!locations) {
      return res.status(404).json({
        status: 'fail',
        message: 'Not Found'
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        locations
      }
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message
    });
  }
};