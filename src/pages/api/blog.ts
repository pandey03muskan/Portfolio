// pages/api/blogs.ts (or .js if using JS)

import { MongoClient } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from "mongodb";

const uri = 'mongodb+srv://pandey03muskan:cRAbhiIt6burlOnR@cluster0.4bkbt.mongodb.net/Resume?retryWrites=true&w=majority&appName=Cluster0';

let cachedClient: MongoClient | null = null;


async function run() {
  const uri = "mongodb+srv://pandey03muskan:cRAbhiIt6burlOnR@cluster0.4bkbt.mongodb.net/Resume?retryWrites=true&w=majority&appName=Cluster0";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("Resume");
    const collection = db.collection("Blog");

const documents = [
  {
    _id: new ObjectId(), // Automatically generated ObjectId
    title: "Introduction to MongoDB",
    description: "A beginner's guide to MongoDB and its features.",
    image: "",
    time: "10:30",
    date: "2025-06-12"
  },
  {
    _id: new ObjectId(),
    title: "Advanced MongoDB Queries",
    description: "Learn how to perform complex queries in MongoDB.",
    image: "",
    time: "14:15",
    date: "2025-06-13"
  },
  {
    _id: new ObjectId(),
    title: "MongoDB Indexing Techniques",
    description: "Optimize your MongoDB performance with indexing.",
    image: "",
    time: "09:00",
    date: "2025-06-14"
  }
];

    const result = await collection.insertMany(documents);
    console.log(`${result.insertedCount} documents were inserted.`);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Use cached client if available
    if (!cachedClient) {
      const client = new MongoClient(uri);
      await client.connect();
      cachedClient = client;
    }

    const db = cachedClient.db('Resume');
    const collection = db.collection('Blog');

    const blogs = await collection
      .find({}, { projection: { _id: 0, title: 1, description: 1, image: 1, time: 1, date: 1 } })
      .toArray();

    res.status(200).json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
