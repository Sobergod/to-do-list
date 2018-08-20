import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import Home from '../containers/Home.jsx'
import Finish from '../containers/Finish.jsx'
import NavBar from '../components/NavBar/NavBar'
class RouterMap extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/finish" component={Finish} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default RouterMap