import Sequelize from "sequelize";
import * as dotenv from "dotenv";

dotenv.config();

const seq = new Sequelize(process.env.CONNECTION_STRING, {
  dialect: "prostgres",
  define: {
    timestamps: false,
  },
});

export default seq;
