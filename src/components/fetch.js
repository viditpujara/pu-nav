const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
const serviceAccount = require('path/to/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Example endpoint to get a document from Firestore
app.get('/api/documents/:documentId', (req, res) => {
  const documentId = req.params.documentId;
  const docRef = db.collection('collectionName').doc(documentId);

  docRef.get()
    .then(doc => {
      if (!doc.exists) {
        res.status(404).send('Document not found');
      } else {
        res.send(doc.data());
      }
    })
    .catch(error => {
      console.log('Error getting document:', error);
      res.status(500).send('Internal server error');
    });
});
