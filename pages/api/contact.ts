import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import { ObjectId } from 'bson';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  type userMessage = {
    id: undefined | ObjectId,
    email: string,
    name: string,
    message: string

  } 
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newMessage: userMessage = {
      id: undefined,
      email,
      name,
      message,
    };

    let client: undefined | MongoClient;
    try {
      client = await MongoClient.connect(process.env.NODE_DATABASE!);
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
    }
    client.close();
    res
      .status(201)
      .json({ message: "Succesfully stored message!", message2: newMessage });
  }
}

export default handler;
