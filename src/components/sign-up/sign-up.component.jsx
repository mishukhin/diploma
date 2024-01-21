import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import { SignUpContainer } from './sign-up.styles.jsx'
import { useDispatch } from 'react-redux'
import { signUpStart } from '../../store/user/user.action'

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields
  const dispatch = useDispatch()

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert("passwords do not match")
      return
    }

    try {
      dispatch(signUpStart(email, password, displayName))
      resetFormFields()
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use")
      } else {
        console.log("user creation encountered an error", error)
      }
    }

  }

  const handleChange = event => {
    const { name, value } = event.target
    setFormFields({...formFields, [name]: value})
  }

  return (
    <SignUpContainer>
      <h2>Зарегистрироваться</h2>
      <span>Зарегистрироваться с почтой и паролем</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Отображаемое имя"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Почта"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Пароль"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        
        <FormInput
          label="Подтвердите пароль"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Зарегистрироваться</Button>
      </form>
    </SignUpContainer>
  )
}

export default SignUp
