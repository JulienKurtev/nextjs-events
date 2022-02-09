import { MongoClient } from 'mongodb';

export async function connectDatabase() {
    const connectionUrl = 'mongodb+srv://jkurtev:eBG4qeM7VRn8WHSB@cluster0.rovnc.mongodb.net/events?retryWrites=true&w=majority';
    const client = await MongoClient.connect(connectionUrl);

    return client;
}

export async function insertDocument(client, collection, document) {
    const db = client.db();
            
    const result = await db.collection(collection).insertOne(document);

    return result;
}

export async function getAllDocuments(client, collection, sort){
    const db = client.db();
        
    const documents = await db
    .collection(collection)
    .find()
    .sort(sort)
    .toArray();

    return documents;
}