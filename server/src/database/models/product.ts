export const productModel = (sequelize: any, DataTypes: any) => {
  const Product = sequelize.define("product", {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      field: "id",
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      field: "name", //el nombre en la base de datos va a ser first_name
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      field: "price",
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      field: "description",
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      field: "image_url",
      allowNull: false,
    },
  });
  return Product;
};
