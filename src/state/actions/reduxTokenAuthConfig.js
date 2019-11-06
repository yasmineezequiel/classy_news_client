import { generateAuthActions } from "redux-token-auth"

const config = {
  authUrl: 'http://localhost:3000/auth',
  userAttributes: {
    uid: "uid",
    name: "name",
    nickname: "nickname",
    city: "city",
    country: "country",
    role: "role",
    email: "email"
  },
  userRegistrationAttributes: {
    uid: "uid",
    name: "name",
    nickname: "nickname",
    city: "city",
    country: "country",
    role: "role",
    email: "email"
  }
}

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,
} = generateAuthActions(config)

export { registerUser, signInUser, signOutUser, verifyCredentials }