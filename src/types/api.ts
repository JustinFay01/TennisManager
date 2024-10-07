export interface IUser {
  id: string
  firstName: string
  lastName: string
  email?: string
  phoneNumber?: string
  //packages?: Package[];
}

export type Coach = IUser

export interface Customer extends IUser {
  // sessions?: Session[];
}

export type Package = {
  id: string
  name: string
  defaultPrice: number
  usesRemaining: number
  coachPrice?: number
}

//export type User = Coach | Customer

export interface Session {
  id: string
  name: string
  date: Date
  description?: string
  type: keyof typeof SessionType
  coach?: Coach
}

export interface PaginatedResponse<T> {
  items: T[]
  pageNumber: number
  pageSize: number
  totalItems: number
  totalPages: number
}

export class SessionType {
  static readonly Event = 'event'
  static readonly TennisPrivate = 'tennisPrivate'
  static readonly TennisDrill = 'tennisDrill'
  static readonly TennisHitting = 'tennisHitting'
  static readonly PicklePrivate = 'picklePrivate'
  static readonly PickleDrill = 'pickleDrill'
  static readonly PickleHitting = 'pickleHitting'

  static addSpaceBetween(sessionType: string) {
    return (
      sessionType
        // Insert a space before each uppercase letter, except for the first character
        .replace(/([A-Z])/g, ' $1')
        // Trim any leading spaces and capitalize the first letter
        .replace(/^./, (str) => str.toUpperCase())
    )
  }

  static isPrivate(sessionType: string) {
    const privateSessionTypes = [
      SessionType.TennisPrivate,
      SessionType.PicklePrivate,
    ].map((type) => type.toLocaleLowerCase())

    return privateSessionTypes.includes(sessionType.toLocaleLowerCase())
  }

  static isDrill(sessionType: string) {
    const drillSessionTypes = [
      SessionType.TennisDrill,
      SessionType.PickleDrill,
    ].map((type) => type.toLocaleLowerCase())

    return drillSessionTypes.includes(sessionType.toLocaleLowerCase())
  }
}
