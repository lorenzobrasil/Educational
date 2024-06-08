import Sequelize from "sequelize";
import seq from "../repositories/db.js";
import Proprietario from "./proprietarios.model.js";

const animal = seq.define(
  "animais",
  {
    animalId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tipo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

// No Sequelize definimos as FKs após a criação do model

animal.belongsTo(Proprietario, { foreignKey: "proprietarioId" });

export default animal;
