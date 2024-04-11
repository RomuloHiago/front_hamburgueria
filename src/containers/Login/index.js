import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
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
  }

  return (
    <Container>
      <LoginImage src={LoginImg} alt="image-with-two-hamburgers" />
      <ContainerItems>
        <img src={LogoImg} alt="logo-image-code-burger" />

        <h1>Login</h1>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Label>Email</Label>
          <Input
            onError={errors.email?.message}
            type="email"
            {...register('email')}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input
            onError={errors.password?.message}
            type="password"
            {...register('password')}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

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
