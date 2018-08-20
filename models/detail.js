'use strict';
module.exports = (sequelize, DataTypes) => {
  var Detail = sequelize.define('Detail', {
    provider: DataTypes.STRING,
    harga: DataTypes.STRING,
    tipe: DataTypes.STRING,
    kode: DataTypes.STRING,
    keterangan: DataTypes.STRING
  }, {});
  Detail.associate = function(models) {
    Detail.belongsTo(models.Provider, {foreignKey: 'provider', sourceKey: 'nama_provider'});
  };
  return Detail;
};
