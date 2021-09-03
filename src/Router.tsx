import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import AboutPage from './components/containers/AboutPage'
import UrlFormComponent from './components/UrlFormComponent'

export const Router = () => {
    return (
        <Switch>
            <Route exact={true} path='/' component={UrlFormComponent} />
            <Route path='/about' component={AboutPage} />
        </Switch>
    )
}
