import comentariosRepository from "../repositories/comentarios.repository.js";

async function insertComentario(comment) {
  return await comentariosRepository.insertComentario(comment);
}

export default {
  insertComentario,
};
