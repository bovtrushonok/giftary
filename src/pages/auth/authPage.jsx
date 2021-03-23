const { default: AuthForm } = require("./authForm")

const AuthorizationPage = () => {
  return (
    <div>
      <span>Authorization page</span>
      <AuthForm />
    </div>
  )
}

export default AuthorizationPage;