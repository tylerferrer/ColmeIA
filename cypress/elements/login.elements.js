const loginElements = {
  emailInput: '#email',
  passwordInput: '#password',
  loginButtonText: /^Entrar$/i,
  forgotPasswordLinkText: /Esqueceu sua senha\?/i,
  continueButtonText: /^Continuar$/i,
  messageContainer: 'span, p, div',
  interactiveElements: 'a, button',
  incorrectLoginModalText: 'Seu login está incorreto, quer continuar?',
  invalidEmailMessageText: /Email inválido|Email invalido/i,
  invalidCredentialsMessageText: 'Usuário ou senha inválidos',
  requiredFieldMessageText: 'Este campo é obrigatório'
}

export default loginElements
