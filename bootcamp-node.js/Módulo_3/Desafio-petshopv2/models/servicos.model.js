import Sequelize from "sequelize";
import seq from "../repositories/db.js";
import animal from "./animais.model.js";

const servico = seq.define(
  "servicos",
  {
    servicoId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    valor: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { underscored: true }
);

servico.belongsTo(animal, { foreignKey: "animalId" });

export default servico;
