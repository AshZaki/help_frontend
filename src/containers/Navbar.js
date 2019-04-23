import React, {Component, Fragment} from 'react'
import RoomCreate from '../components/RoomCreate'
import UserLogin from '../components/UserLogin'
import UserLogout from '../components/UserLogout'
import Register from '../components/Register'

class Navbar extends Component {
    render(){
        return (
            <Fragment>
                <RoomCreate />
                <UserLogin />
                <UserLogout />
                <Register />
            </Fragment>
        )
    }
}

export default Navbar;