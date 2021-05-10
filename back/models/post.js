module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "post",
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
  Post.associate = (db) => {
    db.Post.belongsTo(db.User);
    db.Post.hasMany(db.Comment);
  };

  return Post;
};
