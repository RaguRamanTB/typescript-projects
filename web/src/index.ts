import { Collection } from './models/Collection';

const collection = new Collection('http://localhost:3000/users');

collection.on('change', () => {
  console.log('Collection has changed');
  console.log(collection);
});

collection.fetch();
