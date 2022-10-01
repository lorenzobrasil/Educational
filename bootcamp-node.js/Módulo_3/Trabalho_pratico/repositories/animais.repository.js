import connection from "./db.js";

async function insertAnimal(animal) {
  const conn = await connection.connect();
  try {
    const res = await conn.query(
      "INSERT INTO animais(nome, tipo, proprietario_id) VALUES ($1, $2, $3) RETURNING *",
      [animal.nome, animal.tipo, animal.proprietario_id]
    );
    return res.rows[0];
  } catch (err) {
    throw new Error({ error: err.message });
  } finally {
    conn.release();
  }
}

async function updateAnimal(animal) {
  const conn = await connection.connect();
  try {
    const res = await conn.query(
      "UPDATE animais SET nome = $1, tipo = $2, proprietario_id = $3 WHERE animal_id = $4 RETURNING *",
      [animal.nome, animal.tipo, animal.proprietario_id, animal.animal_id]
    );
    return res.rows[0];
  } catch (err) {
    throw new Error({ error: err.message });
  } finally {
    conn.release();
  }
}

async function deleteAnimal(id) {
  const conn = await connection.connect();
  try {
    const res = await conn.query(
      "DELETE FROM animais WHERE animal_id = $1 RETURNING animal_id",
      [id]
    );
    return res.rows[0];
  } catch (err) {
    throw new Error({ error: err.message });
  } finally {
    conn.release();
  }
}

async function getAnimals() {
  const conn = await connection.connect();
  try {
    const res = await conn.query("SELECT * FROM animais");
    return res.rows;
  } catch (err) {
    throw new Error({ error: err.message });
  } finally {
    conn.release();
  }
}

async function getAnimal(id) {
  const conn = await connection.connect();
  try {
    const res = await conn.query("SELECT * FROM animais WHERE animal_id = $1", [
      id,
    ]);
    return res.rows[0];
  } catch (err) {
    throw new Error({ error: err.message });
  } finally {
    conn.release();
  }
}

async function getAnimalsPerProprietary(proprietario_id) {
  const conn = await connection.connect();
  try {
    const res = await conn.query(
      "SELECT * FROM animais WHERE proprietario_id = $1",
      [proprietario_id]
    );
    return res.rows;
  } catch (err) {
    throw new Error({ error: err.message });
  } finally {
    conn.release();
  }
}

export default {
  insertAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimals,
  getAnimal,
  getAnimalsPerProprietary,
};
