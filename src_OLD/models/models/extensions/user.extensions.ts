import { User } from '../user'

export namespace UserExtensions {
  export function getFullName(user: User) {
    return user.name && user.lastName ?
      `${user.name} ${user.lastName}` :
      `${user.username}`
  }
}