const { Firestore } = require('@google-cloud/firestore');

async function getData() {
    const db = new Firestore();
    const predictCollection = db.collection('predictions');
    const snapshot = await predictCollection.get();

    if (snapshot.empty) {
        return [];
    }

    const histories = [];
    snapshot.forEach(doc => {
        const data = doc.data();
        histories.push({
            id: doc.id,
            result: data.result,
            createdAt: data.createdAt,
            suggestion: data.suggestion
        });
    });

    return histories;
}

module.exports = getData;
