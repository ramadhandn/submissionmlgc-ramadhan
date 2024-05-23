const { Firestore } = require('@google-cloud/firestore');
const dataStore = require('./dataStore');

async function storeData(id, data) {
  const db = new Firestore();

  const predictCollection = db.collection('predictions');
  return predictCollection.doc(id).set(data);
}

module.exports = storeData;
