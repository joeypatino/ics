"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = setContact;

function setContact(_ref) {
  var name = _ref.name,
      email = _ref.email,
      rsvp = _ref.rsvp,
      dir = _ref.dir,
      partstat = _ref.partstat,
      role = _ref.role,
      sentBy = _ref.sentBy;
  var formattedAttendee = '';
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

  if (re.test(sentBy)) {
    formattedAttendee += sentBy ? "SENT-BY=mailto:".concat(sentBy, ";") : '';
  } else {
    formattedAttendee += sentBy ? "SENT-BY=".concat(sentBy, ";") : '';
  }

  formattedAttendee += rsvp ? 'RSVP=TRUE;' : 'RSVP=FALSE;';
  formattedAttendee += role ? "ROLE=".concat(role, ";") : '';
  formattedAttendee += partstat ? "PARTSTAT=".concat(partstat, ";") : '';
  formattedAttendee += dir ? "DIR=".concat(dir, ";") : '';
  formattedAttendee += 'CN=';
  formattedAttendee += name || 'Unnamed attendee';
  formattedAttendee += email ? ":mailto:".concat(email) : '';
  return formattedAttendee;
}