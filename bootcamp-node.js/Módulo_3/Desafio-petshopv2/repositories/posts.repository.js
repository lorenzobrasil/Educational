import mongodbClient from "./db-mongodb.js";

async function insertPost(post) {
  const client = await mongodbClient();
  try {
    await client.connect();
    await client.db("petshop").collection("posts").insertOne(post);
  } catch (err) {
    throw new Error("Problemas ao inserir o post");
  } finally {
    client.close();
  }
}

async function getPosts() {
  const client = await mongodbClient();
  try {
    client.connect();
    const result = client.db("petshop").collection("posts").find().toArray();
    return result;
  } catch (err) {
    //throw new Error("Problemas ao ler os posts");
    throw err;
  } finally {
    client.close();
  }
}

export default {
  insertPost,
  getPosts,
};
