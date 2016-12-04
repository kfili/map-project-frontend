'use strict';

const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields.js');

const onSignUp = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
  .done(ui.signUpSuccess)
  .fail(ui.failure);
};

const onSignIn = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.failure);
};

const onSignOut = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signOut(data)
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};

const onChangePassword = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
  .done(ui.changePasswordSuccess)
  .fail(ui.failure);
};

const onCreatePlace = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createPlace(data)
  .done(ui.createPlaceSuccess)
  .fail(ui.failure);
};

const onUpdatePlace = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updatePlace(data)
  .done(ui.updatePlaceSuccess)
  .fail(ui.failure);
};

const onShowPlaces = function(event){
  console.log(event, "showPlaces!");
  event.preventDefault();
  api.showPlaces()
  .done(ui.showPlacesSuccess)
  .fail(ui.failure);
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('#create-place').on('submit', onCreatePlace);
  $('#update-place').on('submit', onUpdatePlace);
  $('#show-places').on('click', onShowPlaces);
};

module.exports = {
  addHandlers,
};
