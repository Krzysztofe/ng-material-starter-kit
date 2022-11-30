export interface UserModel {
  readonly email: string;
  readonly name: userFirstName;
}

interface userFirstName{
  readonly firstname: string;
  readonly lastname: string;
}
