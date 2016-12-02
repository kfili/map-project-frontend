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
  $("#messages").text("success");
  $("#status").hide();
  $("#show-places").hide();
  $("#change-password-open").hide();
  $("#sign-out").hide();
};

const changePasswordSuccess = () => {
  $("#messages").text("success");
};

const success = (data) => {
  $("#messages").text("success");
};

const failure = (error) => {
  console.error(error);
  $("#messages").text("failure");
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess
};
