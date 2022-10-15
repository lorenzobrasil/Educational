import connection from "./db.js";

async function insertProprietario(proprietario) {
  const conn = await connection.connect();
  try {
    const res = await conn.query(
      "INSERT INTO proprietarios (nome, telefone) VALUES ($1, $2) RETURNING proprietario_id",
      [proprietario.nome, proprietario.telefone]
    );
    return res.rows[0];
  } catch (err) {
    throw new Error(err.message);
  } finally {
    conn.release();
  }
}

async function updateProprietario(proprietario) {
  const conn = await connection.connect();
  try {
    const res = await conn.query(
      "UPDATE proprietarios SET nome=$1, telefone=$2 WHERE proprietario_id=$3 RETURNING *",
      [proprietario.nome, proprietario.telefone, proprietario.proprietario_id]
    );
    console.log(res.rows[0]);
    return res.rows[0];
  } catch (err) {
    throw new Error(err.message);
  } finally {
    conn.release();
  }
}

async function deleteProprietario(id) {
  const conn = await connection.connect();
  try {
    const res = await conn.query(
      "DELETE FROM proprietarios WHERE proprietario_id=$1 RETURNING proprietario_id",
      [id]
    );
    return res.rows[0];
  } catch (err) {
    throw new Error(err.message);
  } finally {
    conn.release();
  }
}

async function getProprietarios() {
  const conn = await connection.connect();
  try {
    const res = await conn.query("SELECT * FROM proprietarios");
    return res.rows;
  } catch (err) {
    throw new Error(err.message);
  } finally {
    conn.release();
  }
}

async function getProprietario(id) {
  const conn = await connection.connect();
  try {
    const res = await conn.query(
      "SELECT * FROM proprietarios WHERE proprietario_id = $1",
      [id]
    );
    if (res.rows != []) {
      return res.rows[0];
    } else {
      return false;
    }
  } catch (err) {
    throw new Error(err.message);
  } finally {
    conn.release();
  }
}

export default {
  insertProprietario,
  updateProprietario,
  deleteProprietario,
  getProprietarios,
  getProprietario,
};
