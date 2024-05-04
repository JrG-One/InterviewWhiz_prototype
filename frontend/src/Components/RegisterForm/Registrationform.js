import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Components from './Component';
import axios from 'axios';

const SignupComponent = ({ signIn }) => {
  const navigate = useNavigate();

  // Function to toggle between sign-in and sign-up parts
  const toggleSign = () => {
    if (signIn) {
      navigate('/register'); // Navigate to /register if toggling to sign-up
    } else {
      navigate('/login'); // Navigate to /login if toggling to sign-in
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    
    try {
      console.log(formData);
      const response = axios.post('http://localhost:8080/api/signup', formData);
      console.log(formData);
      // Handle success (e.g., display a success message)
      console.log('User signed up successfully:', response.data);
    } catch (error) {
      // Handle error (e.g., display an error message)
      console.error('Error signing up:', error);
    }
  };
  
  

  return (
    <div>
      {signIn ? (
        <Components.SignInContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Sign in</Components.Title>
            <Components.Input type='email' placeholder='Email' />
            <Components.Input type='password' placeholder='Password' />
            <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
            <Components.Button >Sign In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>
      ) : (
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form >
            <Components.Title>Create Account</Components.Title>
            <Components.Input type='text' name='name' placeholder='Name' onChange={handleInputChange} />
            <Components.Input type='email' name='email' placeholder='Email' onChange={handleInputChange} />
            <Components.Input type='password' name='password' placeholder='Password' onChange={handleInputChange} />
            <Components.Button onClick={(event) => handleSignUp(event)} >Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>
      )}

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={toggleSign}>Sign In</Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter Your personal details and start journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={toggleSign}>Sign Up</Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </div>
  );
};

export default SignupComponent;
