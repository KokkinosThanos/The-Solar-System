
const { Sequelize , QueryTypes } = require('sequelize');

// -----

  const sequelize = new Sequelize('solar_system', 'thanos', '123', {
      host: 'mysql_server',
      dialect: 'mysql'
    });

// -----

  const Query = {

    planets: async() => {
      
     const FetchResult = await sequelize.query(" SELECT * FROM planets ", {
        type: QueryTypes.SELECT
     })

      return FetchResult
    }
  }
  
  module.exports = { Query }





