import comentariosService from "../services/comentarios.service.js";

async function insertComentario(req, res, next) {
  try {
    if (!req.body._id) {
      throw new Error("ID do post é campo obrigatório");
    } else if (!req.body.nome) {
      throw new Error("Nome do autor do comentário é campo obrigatório");
    } else if (!req.body.conteudo) {
      throw new Error("Conteúdo do comentário do post é campo obrigatório");
    } else {
      const comment = {
        _id: req.body._id,
        nome: req.body.nome,
        conteudo: req.body.conteudo,
      };
      res.send(await comentariosService.insertComentario(comment));
    }
  } catch (err) {
    next(err);
  }
}

export default {
  insertComentario,
};
