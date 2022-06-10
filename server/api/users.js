import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
  'users.register'(values) {
    Accounts.createUser(values);
  },
});
