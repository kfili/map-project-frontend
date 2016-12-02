'use strict';
const store = require('../store');

// hide the following buttons and items on page load
$("#status").hide();
$("#show-places").hide();
$("#change-password-open").hide();
$("#sign-out").hide();

const signInSuccess = (data) => {
  store.user = data.user;
  $("#messages").text("sign in success");
  $("#status").show();
  $("#show-places").show();
  $("#change-password-open").show();
  $("#sign-out").show();
};

const signOutSuccess = () => {
  $("#messages").text("sign out success");
  $("#status").hide();
  $("#show-places").hide();
  $("#change-password-open").hide();
  $("#sign-out").hide();
};

const changePasswordSuccess = () => {
  $("#messages").text("password changed");
};

const signUpSuccess = () => {
  $("#messages").text("sign up success");
};

const failure = (error) => {
  console.error(error);
  $("#messages").text("failure");
};

module.exports = {
  failure,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  signUpSuccess
};
