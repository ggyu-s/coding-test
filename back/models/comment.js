module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "commnet",
    {
      content: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci", // 이모티콘 저장
    }
  );
  Comment.associate = (db) => {
    db.Comment.belongsTo(db.Post);
    db.Comment.belongsTo(db.User);
  };

  return Comment;
};
