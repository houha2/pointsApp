import React from 'React';
import firebase from 'react-native-firebase';

var database = firebase.database();

function createUser( Chapter, fName, lName, status, pin, email){
    var userData = {
      chapter: Chapter,
      first_name: fName,
      last_name: lName,
      status: status,
      password: pin,
      email: email
    };
    var newPostKey = database.ref().child("members").push().key
    var update = {};
    update['/members/'+ newPostKey] = userData;
    return database.ref().update(update);
}
export default class SignUp extends React.Component {
  render(){
    
  }
}

