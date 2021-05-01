const Model = use ('Model');

const admin = require ('firebase-admin');

const serviceAccount= require("../../adonis-firestore-firebase-adminsdk-pjvx7-e90496fec6.json");


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://adonisjs-firestore.firebaseio.com"
});

const db= admin.firestore();

class Firestore extends Model{
    db(){
        return admin.firestore();
    }

}

module.exports = Firestore;