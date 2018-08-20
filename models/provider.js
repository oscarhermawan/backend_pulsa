'use strict';

module.exports = (sequelize, DataTypes) => {
  var Provider = sequelize.define('Provider', {
    nama_provider: DataTypes.STRING
  }, {});
  Provider.associate = function(models) {
    Provider.hasMany(models.Detail, {foreignKey: 'provider', sourceKey: 'nama_provider'});
  };
  return Provider
};
