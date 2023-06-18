
import React, { useState } from 'react';
import './Member_2.css';
import musician_03 from '../Member/musician_03.jpg';

export default function Member_2() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailError, setEmailError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [mobileNumberError, setMobileNumberError] = useState('');
  const [nicNumber, setNicNumber] = useState('');
  const [nicNumberError, setNicNumberError] = useState('');
  const [gender, setGender] = useState('');
  const [genderError, setGenderError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'firstName') {
      setFirstName(value);
      setFirstNameError('');
    } else if (name === 'lastName') {
      setLastName(value);
      setLastNameError('');
    } else if (name === 'email') {
      setEmail(value);
      setEmailError('');
    } else if (name === 'password') {
      setPassword(value);
      setPasswordError('');
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
      setConfirmPasswordError('');
    } else if (name === 'mobileNumber') {
      setMobileNumber(value);
      setMobileNumberError('');
    } else if (name === 'nicNumber') {
      setNicNumber(value);
      setNicNumberError('');
    } else if (name === 'gender') {
      setGender(value);
      setGenderError('');
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email format');
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    if (password.length < 8) {
      setPasswordError('Password should have at least 8 characters');
      return false;
    }
    return true;
  };

  const validateMobileNumber = () => {
    const mobileNumberRegex = /^\d+$/;
    if (!mobileNumberRegex.test(mobileNumber)) {
      setMobileNumberError('Mobile number should only contain numbers');
      return false;
    }
    return true;
  };

  const validateNicNumber = () => {
    // Add your NIC number validation logic here
    // Example: check for a specific pattern or length
    if (nicNumber.length !== 10) {
      setNicNumberError('NIC number should have 10 digits');
      return false;
    }
    return true;
  };

  const validateGender = () => {
    if (gender === '') {
      setGenderError('Please select your gender');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (firstName.trim() === '') {
      setFirstNameError('First name cannot be empty');
      isValid = false;
    }

    if (lastName.trim() === '') {
      setLastNameError('Last name cannot be empty');
      isValid = false;
    }

    if (!validateEmail()) {
      isValid = false;
    }

    if (!validatePassword()) {
      isValid = false;
    }

    if (!validateMobileNumber()) {
      isValid = false;
    }

    if (!validateNicNumber()) {
      isValid = false;
    }

    if (!validateGender()) {
      isValid = false;
    }

    if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    }

    if (isValid) {
      // Form submission logic
      console.log('Form submitted');
    }
  };

  return (
    <div style={{ backgroundSize: 'cover', backgroundImage: `url(${musician_03})` }}>
      <h4 style={{ textAlign: 'center', fontSize: '30px', backgroundColor: '#f5c542', fontFamily: 'Source Sans Pro' }}>
        Member Registration
      </h4>
      <div className="form">
        <div className="form-body">
          <div className="username">
            <label className="form__label" htmlFor="firstName">
              First Name
            </label>
            <input
              className="form__input"
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={handleInputChange}
            />
            {firstNameError && <p className="error">{firstNameError}</p>}
          </div>
          <div className="lastname">
            <label className="form__label" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="form__input"
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={handleInputChange}
            />
            {lastNameError && <p className="error">{lastNameError}</p>}
          </div>
          <div className="email">
            <label className="form__label" htmlFor="email">
              Email
            </label>
            <input
              className="form__input"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleInputChange}
            />
            {emailError && <p className="error">{emailError}</p>}
          </div>
          <div className="password">
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <input
              className="form__input"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleInputChange}
            />
            {passwordError && <p className="error">{passwordError}</p>}
          </div>
          <div className="confirm-password">
            <label className="form__label" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="form__input"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleInputChange}
            />
            {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}
          </div>
          <div className="mobile-number">
            <label className="form__label" htmlFor="mobileNumber">
              Mobile Number
            </label>
            <input
              className="form__input"
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={handleInputChange}
            />
            {mobileNumberError && <p className="error">{mobileNumberError}</p>}
          </div>
          <div className="nic-number">
            <label className="form__label" htmlFor="nicNumber">
              NIC Number
            </label>
            <input
              className="form__input"
              type="text"
              id="nicNumber"
              name="nicNumber"
              placeholder="NIC Number"
              value={nicNumber}
              onChange={handleInputChange}
            />
            {nicNumberError && <p className="error">{nicNumberError}</p>}
          </div>
          <div className="gender">
            <label className="form__label">Gender</label>
            <div className="gender__option">
              <label className='gender__option'>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === 'male'}
                  onChange={handleInputChange}
                />
                Male
              </label>
              <label className='gender__option'>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === 'female'}
                  onChange={handleInputChange}
                />
                Female
              </label>
            </div>
            {genderError && <p className="error">{genderError}</p>}
          </div>
          {/* Rest of the form fields */}
        </div>
        <div className="footer">
          <button
            type="submit"
            className="btn"
            style={{ backgroundColor: '#f5c542', color: 'white' }}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
