import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';


Meteor.methods({

'users.register'(values) {
  console.log(values);
  Accounts.createUser(values);
}

})