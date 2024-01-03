export function formatName (name) {
  return name[0].toUpperCase() + name.slice(1)
}

export function formatEmail (email) {
  return email[0] + '***' + email.slice(email.indexOf('@') - 2)
}
