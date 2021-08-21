import React from 'react'
import Header from '../components/Header'
import Employeedetail from '../components/Employeedetail'
import Employeelist from '../components/Employeelist'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


const AppRouter = () => {
    return (
        <BrowserRouter>
            <div id="container">
            <Header></Header>
                <main>                    
                    <Switch>
                        <Route path="/" component={Employeelist} exact />
                        <Route path="/employee/:id" component={Employeedetail} exact />
                    </Switch>
                </main>
            </div>
        </BrowserRouter>
    )
}


export default AppRouter

