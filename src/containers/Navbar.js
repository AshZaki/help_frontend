import React, {Component, Fragment} from 'react'
import { Menu,} from 'semantic-ui-react'
import RoomCreate from './RoomCreate'
import UserLogin from '../components/UserLogin'
import UserLogout from '../components/UserLogout'
import Register from '../components/Register'

class Navbar extends Component {

    state = {
        activeItem: 'home'
    }

    handleItemClick = (e, { name }) => {
        this.setState({ 
            activeItem: name 
        })
    } 

    render(){
        const { activeItem } = this.state

        return (
            <Fragment>
                <Menu pointing secondary>
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                    <Menu.Item
                        name='messages'
                        active={activeItem === 'messages'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='friends'
                        active={activeItem === 'friends'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item
                        name='logout'
                        active={activeItem === 'logout'}
                        onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu>
            </Fragment>
        )
    }
}

export default Navbar;