
export const LOGIN_MUTATION = `
mutation Login($email: String!, $password: String!) {
  loginWithEmail(email: $email, password: $password) {
    token
  }
}
`;
