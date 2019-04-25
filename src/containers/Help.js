import React, {Component, Fragment} from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import Navbar from './Navbar';

class Help extends Component {

    state = {
        activeItem: 'bio'
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
                <Navbar />
                <Grid>
                    <Grid.Column width={2}>
                        <Menu fluid vertical tabular>
                            <Menu.Item 
                                name='Join the room' 
                                active={activeItem === 'Join the room'} 
                                onClick={this.handleItemClick} 
                            />
                            <Menu.Item 
                                name='Create new room' 
                                active={activeItem === 'Create new room'} 
                                onClick={this.handleItemClick} 
                            />
                            <Menu.Item
                                name='My Room history'
                                active={activeItem === 'My Room history'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='links'
                                active={activeItem === 'links'}
                                onClick={this.handleItemClick}
                            />
                        </Menu>
                    </Grid.Column>
                    <Grid.Column stretched width={14}>
                        <Segment>
                            This is an stretched grid column. This segment will always match the tab height
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Fragment>    
        )
    }
}

export default Help;