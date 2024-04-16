// Write your JS code here
import Cookies from 'js-cookie'

import {Route,Redirect} from 'react-router-dom'

const ProtectedRoute = props => {
  const v = Cookies.get('jwt_token')
  if (v === undefined) {
    return <Redirect to="/login"/>
  }
  return <Route {...props} />
}
export default ProtectedRoute
