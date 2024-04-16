// Write your JS code here
import './index.css'
import Cookies from 'js-cookie'

const Login = props => {
  const onLogin = jwtToken => {
    const {history} = props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  const Balu = async () => {
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const i = await fetch(url, options)
    const y = await i.json()
    if (i.ok === true) {
      onLogin(y.jwt_token)
    }
  }
  const u = Cookies.get('jwt_token')
  if (u !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div className="lol">
      <h1>Please Login</h1>
      <button onClick={Balu} type="button">
        Login with Sample Creds
      </button>
    </div>
  )
}
export default Login
