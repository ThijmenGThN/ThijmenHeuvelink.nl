
export default interface Directus {
  auth: {
    login: Function
  },
  users: {
    me: {
      read: Function
    }
  }
}
