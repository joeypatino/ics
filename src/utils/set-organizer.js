export default function setOrganizer({name, email, dir, sentBy}) {
  let formattedOrganizer = ''
  let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  if (re.test(sentBy)) {
    formattedOrganizer += sentBy ? `SENT-BY="mailto:${sentBy}":` : ''
  } else {
    formattedOrganizer += sentBy ? `SENT-BY="${sentBy}":` : ''
  }

  formattedOrganizer += dir ? `DIR=${dir};` : ''
  formattedOrganizer += 'CN='
  formattedOrganizer += name || 'Organizer'
  formattedOrganizer += email ? `:mailto:${email}` : ''

  return formattedOrganizer
}
