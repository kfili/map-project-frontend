'use strict';
const store = require('../store');
const showPlacesTemplate = require('../templates/place-listing.handlebars');

// hide the following buttons and items on page load
$("#status").hide();
$("#show-places").hide();
$("#change-password-open").hide();
$("#sign-out").hide();
$("#create-place-open").hide();
$("#show-places").hide();
$("#update-place-open").hide();
$("#delete-place-open").hide();

const signInSuccess = (data) => {
  store.user = data.user;
  $("#messages").text("sign in success");
  $("#status").show();
  $("#show-places").show();
  $("#change-password-open").show();
  $("#sign-out").show();
  $("#create-place-open").show();
  $("#show-places").show();
  $("#update-place-open").show();
  $("#delete-place-open").show();
};

const signOutSuccess = () => {
  $("#messages").text("sign out success");
  $("#status").hide();
  $("#show-places").hide();
  $("#change-password-open").hide();
  $("#sign-out").hide();
  $("#create-place-open").hide();
  $("#show-places").hide();
  $("#update-place-open").hide();
  $("#delete-place-open").hide();
};

const changePasswordSuccess = () => {
  $("#messages").text("password changed");
};

const signUpSuccess = () => {
  $("#messages").text("sign up success");
};

const createPlaceSuccess = () => {
  $("#messages").text("create place success");
};

const updatePlaceSuccess = () => {
  $("#messages").text("update place success");
};

const showPlacesSuccess = (data) => {
  console.log(data);
  $('#messages').html(showPlacesTemplate(data.places));
};

const deletePlaceSuccess = () => {
  $("#messages").text("place deleted successfully");
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
  signUpSuccess,
  createPlaceSuccess,
  updatePlaceSuccess,
  showPlacesSuccess,
  deletePlaceSuccess
};
