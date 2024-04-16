// Write your JS code here
import './index.css'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const Logout = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')

    history.replace('/login')
  }
  return (
    <button onClick={onLogout} type="button">
      Logout
    </button>
  )
}
export default withRouter(Logout)
