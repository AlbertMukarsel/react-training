import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import AboutPage from './components/containers/AboutPage'
import App from './components/containers/App'

const Router = () => {
    return (
        <Switch>
            <Route path='/' component={App} />
            <Route path='/about' component={AboutPage} />
        </Switch>
    )
}

export default Router;