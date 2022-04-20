import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import LoginButton from '../LoginButton.js';

class Login extends React.Component {
  render() {
    return(
      <Card className="checkLogIn" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
          You must be logged in
          </Card.Text>
        <LoginButton/>
        </Card.Body>
      </Card>


    )
  }
}

export default Login;
