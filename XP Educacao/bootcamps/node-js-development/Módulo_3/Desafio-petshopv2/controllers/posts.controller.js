import postsService from "../services/posts.service.js";

async function insertPost(req, res, next) {
  try {
    let post = req.body;
    if (!post.titulo) {
      throw new Error("Título é campo obrigatório");
    } else if (!post.conteudo) {
      throw new Error("Conteúdo é campo obrigatório");
    } else {
      post = {
        titulo: post.titulo,
        conteudo: post.conteudo,
        comentarios: post.comentarios,
      };
      res.send(await postsService.insertPost(post));
    }
  } catch (err) {
    next(err);
  }
}

async function getPosts(req, res, next) {
  try {
    res.send(await postsService.getPosts());
  } catch (err) {
    next(err);
  }
}

export default {
  insertPost,
  getPosts,
};
