import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import Particle from '../imports/api/particle.min.js';

import './main.html';

Template.login.onCreated(function helloOnCreated() {
  // counter starts at 0
  //this.counter = new ReactiveVar(0);

});

Template.login.helpers({
  //counter() {
  //  return Template.instance().counter.get();
  //},
});

Template.login.events({
  'submit .login-form'(event) {
    //if (event.target.new_user.checked == true) {
      sAlert.success('create user: ' + event.target.email.value + ", " + event.target.password.value);
      var particle = new Particle();
      particle.login({username: event.target.email.value, password: event.target.password.value}).then(
        function(data){
          console.log('API call completed on promise resolve: ', data.body.access_token);
        },
        function(err) {
          console.log('API call completed on promise fail: ', err);
        }
      );
    //} else {
/*
      sAlert.success('login user: ' + event.target.email.value + ", " + event.target.password.value + ", " + event.target.new_user.checked);

      $.post("https://api.particle.io/v1/products/wifidoorbell-v100/customers",
      {
          response_type: "token",
          client_id: "testdoorbelloauth-3991",
          email: event.target.email.value,
          password: event.target.password.value
      },
      function(data, status){
          sAlert.success("Data: " + data + "\nStatus: " + status);
          console(data);
          console(status);
      });
    }
    */
  },
});
