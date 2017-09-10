module.exports = function(sequelize, DataTypes) {
  var Vote = sequelize.define("Vote", {
    upVote: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    downVote: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Vote.associate = function(models) {
    // We're saying that a Flag should belong to an City
    // A Flag can't be created without an City due to the foreign key constraint
    Vote.belongsTo(models.Flag, {foreignKey: {allowNull: false}});
  };
  return Vote;
};
