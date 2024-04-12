import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import LoginImg from '../../assets/login-image.svg'
import LogoImg from '../../assets/logo-image.svg'
import { Button, ErrorMessage } from '../../components'
import paths from '../../constants/paths'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
  Container,
  LoginImage,
  ContainerItems,
  Input,
  Label,
  SignUpLink
} from './styles'

export function Login() {
  const history = useHistory()
  const { putUserdata } = useUser()

  const [emailErrorDisplayed, setEmailErrorDisplayed] = useState(false)
  const [passwordErrorDisplayed, setPasswordErrorDisplayed] = useState(false)

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('O email não é válido')
      .required('O email é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve conter no mínimo 6 caracteres')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    try {
      const { data } = await toast.promise(
        api.post('sessions', {
          email: clientData?.email,
          password: clientData?.password
        }),
        {
          loading: 'Carregando dados',
          success: 'Login efetuado com sucesso',
          error: 'E-mail ou senha incorretos. Verifique e tente novamente'
        }
      )
      putUserdata(data)

      setTimeout(() => {
        if (data.admin) {
          history.push(paths.Order)
        } else {
          history.push('/')
        }
      }, 1000)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        const errorMessage = error.response.data?.message || ''

        if (errorMessage.includes('email')) {
          setEmailErrorDisplayed(true)
        } else {
          setPasswordErrorDisplayed(true)
        }
      } else {
        toast.error(
          'Ocorreu um erro ao tentar fazer login. Por favor, tente novamente mais tarde.'
        )
      }
    }
  }

  return (
    <Container>
      <LoginImage src={LoginImg} alt="image-with-two-hamburgers" />
      <ContainerItems>
        <img src={LogoImg} alt="logo-image-code-burger" />

        <h1>Login</h1>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Label>Email</Label>
          <Input type="email" {...register('email')} />
          {errors.email && !emailErrorDisplayed && (
            <ErrorMessage>{errors.email.message}</ErrorMessage>
          )}

          <Label>Senha</Label>
          <Input type="password" {...register('password')} />
          {errors.password && !passwordErrorDisplayed && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}

          <Button
            autoComplete="current-password"
            type="submit"
            style={{ marginTop: 50, marginBottom: 20 }}
          >
            Entrar
          </Button>
        </form>

        <SignUpLink>
          Não possui conta?{' '}
          <Link to="/cadastro" style={{ color: 'white' }}>
            Faça seu cadastro!
          </Link>
        </SignUpLink>
      </ContainerItems>
    </Container>
  )
}
