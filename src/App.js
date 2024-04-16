import {Switch, Route} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'

import NotFound from './components/NotFound'

import Home from './components/Home'

import About from './components/About'

import Login from './components/Login'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/about" component={About} />
    <NotFound />
  </Switch>
)

export default App
