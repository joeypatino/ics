"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = setOrganizer;

function setOrganizer(_ref) {
  var name = _ref.name,
      email = _ref.email,
      dir = _ref.dir,
      sentBy = _ref.sentBy;
  var formattedOrganizer = '';
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

  if (re.test(sentBy)) {
    formattedOrganizer += sentBy ? "SENT-BY=\"mailto:".concat(sentBy, "\":") : '';
  } else {
    formattedOrganizer += sentBy ? "SENT-BY=\"".concat(sentBy, "\":") : '';
  }

  formattedOrganizer += dir ? "DIR=".concat(dir, ";") : '';
  formattedOrganizer += 'CN=';
  formattedOrganizer += name || 'Organizer';
  formattedOrganizer += email ? ":mailto:".concat(email) : '';
  return formattedOrganizer;
}