import React, {Component, Fragment} from 'react'
import { Button, Divider, Form } from 'semantic-ui-react'

class RoomLogin extends Component {
    render(){
        const sizes = 'massive'

        return (
            <Fragment>
               
                    <Form size={sizes}>
                        <Form.Group widths='equal'>
                        <Form.Field label='Room Password' control='input' placeholder='Password' />
                        </Form.Group>
                        <Button type='submit'>Join!</Button>
                        <Divider hidden />
                    </Form>
                // might have to create another component
            </Fragment>
        )
    }
}

export default RoomLogin;