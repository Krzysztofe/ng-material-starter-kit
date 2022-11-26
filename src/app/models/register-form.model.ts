export interface RegisterFormModel {
  readonly adress: adressInterface,
  readonly email: string,
  readonly name: nameInterface,
  readonly password: string,
  readonly phone: string,
  readonly username: string,
}

interface nameInterface {
  readonly firstname: string,
  readonly lastname: string,
}

interface adressInterface {
  readonly city: string,
  readonly street: string,
  readonly number: number,
  readonly zipcode: string,
  // readonly geolocation: geolocationInterface,
}


// interface geolocationInterface {
//   readonly lat: string,
//   readonly long: string,
// }

