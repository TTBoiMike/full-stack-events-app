import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import {Form} from 'react-bootstrap'

export default class Profile extends React.Component {
    
    render() {
        return (
            <div>
                <h3>
                    My Profile
                </h3>
                <Tabs className="mt-5" defaultActiveKey="home" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Account Details">
                        
                    </Tab>
                    <Tab eventKey="profile" title="Edit Account">
                        <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1"> Change Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        </form>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}