
export default interface Directus {
  auth: {
    login: Function,
    logout: Function
  },
  users: {
    me: {
      read: Function
    }
  }
}
