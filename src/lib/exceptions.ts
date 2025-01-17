export class UserNotAuthenticated extends Error {
  constructor(message = 'Usuário não autenticado, faça login para continuar') {
    super(message)
  }
}
