import mongoDbClient from "./db-mongodb.js";
import mongodb from "mongodb";

async function getComentarios(postId) {
  const client = await mongoDbClient();
  try {
    client.connect();
    const post = await client
      .db("petshop")
      .collection("posts")
      .findOne({
        _id: new mongodb.ObjectId(postId),
      });
    return post.comentarios;
  } catch (err) {
    throw new Error("Problemas ao obter comentários do post");
  } finally {
    await client.close();
  }
}

async function insertComentario(comment) {
  const client = await mongoDbClient();
  try {
    let comments = await getComentarios(comment._id);
    comments.push({
      nome: comment.nome,
      conteudo: comment.conteudo,
    });
    client.connect();
    await client
      .db("petshop")
      .collection("posts")
      .updateOne(
        { _id: new mongodb.ObjectId(comment._id) },
        { $set: { comentarios: comments } }
      );
    return comment;
  } catch (err) {
    throw new Error("Problemas ao inserir comentário");
  } finally {
    client.close();
  }
}

export default {
  insertComentario,
};
