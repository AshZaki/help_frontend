import React, { Component, Fragment } from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

class RoomVoteInfo extends Component {
    render() {
        return (
            <Fragment>
                <Form> 
                    <Form.Field
                        id='form-input-control-first-name'
                        control={Input}
                        label='Topic'
                        placeholder='Topic(Room Name)'
                    />
                    <Form.Field
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        label='Detail'
                        placeholder='Detail'
                    />
                    <Input
                        icon='tags'
                        iconPosition='left'
                        label={{ tag: true, content: 'Add Tag' }}
                        labelPosition='right'
                        placeholder='Catagories tags'
                        
                    />
                    <Form.Field
                        id='form-button-control-public'
                        control={Button}
                        content='Create'
                        label=''
                    />
                </Form>
            </Fragment>
        )
    }
}

export default RoomVoteInfo;