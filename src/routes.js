import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Details from './pages/Details'

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/fruits/:name" component={Details} />
      </Switch>
    </BrowserRouter>
  )
}
