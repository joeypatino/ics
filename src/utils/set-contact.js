export default function setContact({name, email, rsvp, dir, partstat, role, sentBy}) {
  let formattedAttendee = ''
  let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  if (re.test(sentBy)) {
    formattedAttendee += sentBy ? `SENT-BY=mailto:${sentBy};` : ''
  } else {
    formattedAttendee += sentBy ? `SENT-BY=${sentBy};` : ''
  }
  formattedAttendee += rsvp ? 'RSVP=TRUE;' : 'RSVP=FALSE;'
  formattedAttendee += role ? `ROLE=${role};` : ''
  formattedAttendee += partstat ? `PARTSTAT=${partstat};` : ''
  formattedAttendee += dir ? `DIR=${dir};` : ''
  formattedAttendee += 'CN='
  formattedAttendee += name || 'Unnamed attendee'
  formattedAttendee += email ? `:mailto:${email}` : ''

  return formattedAttendee
}
