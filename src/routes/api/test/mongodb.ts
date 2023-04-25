import { MongoClient } from 'mongodb';

console.log('HI');
export const client = new MongoClient(import.meta.env.VITE_MONGODB_URI);
console.log('BYE');
