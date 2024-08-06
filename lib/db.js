import Dexie from 'dexie';

const db = new Dexie('textDatabase');
db.version(1).stores({
  texts: '++id, content, createdAt'
});

export default db;
