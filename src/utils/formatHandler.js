export function formatName (name) {
  return name[0].toUpperCase() + name.slice(1)
}

export function formatEmail (email) {
  return email[0] + '***' + email.slice(email.indexOf('@') - 2)
}

export function formatTitle (title, length = 40) {
  return title.length > length ? title.slice(0, length).trim() + '...' : title
}

export function formatPrice (price) {
  //
}
