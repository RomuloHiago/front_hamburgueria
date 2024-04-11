import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import LogoImg from '../../assets/logo-image.svg'
import RegisterImg from '../../assets/register-image.svg'
import { ErrorMessage } from '../../components'
import { Button } from '../../components/Button'
import api from '../../services/api'
import {
  Container,
  RegisterImage,
  ContainerItems,
  Input,
  Label,
  SignUpLink
} from './styles'

export function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
      .email('O email não é válido')
      .required('O email é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve conter no mínimo 6 caracteres'),
    confirmPassword: Yup.string()
      .required('A confirmação da senha é obrigatória')
      .oneOf([Yup.ref('password')], 'As senhas não coincidem')
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
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Registro efetuado com sucesso. Seja bem-vindo!!!')
      } else if (status === 409) {
        toast.error('O usuário informado já existe!')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Algo deu errado. Tente novamente!')
    }
  }

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="image-with-two-hamburgers" />
      <ContainerItems>
        <img src={LogoImg} alt="logo-image-code-burger" />

        <h1>Cadastre-se</h1>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Label onError={errors.name?.message}>Nome</Label>
          <Input
            onError={errors.name?.message}
            type="text"
            {...register('name')}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label onError={errors.email?.message}>E-mail</Label>
          <Input
            onError={errors.email?.message}
            type="email"
            {...register('email')}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label onError={errors.password?.message}>Senha</Label>
          <Input
            onError={errors.password?.message}
            type="password"
            {...register('password')}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label onError={errors.confirmPassword?.message}>
            Confirmar senha
          </Label>
          <Input
            onError={errors.confirmPassword?.message}
            type="password"
            {...register('confirmPassword')}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 15, marginBottom: 15 }}>
            Cadastrar
          </Button>
        </form>

        <SignUpLink>
          Já possui conta?{' '}
          <Link to="/login" style={{ color: 'white' }}>
            Login
          </Link>
        </SignUpLink>
      </ContainerItems>
    </Container>
  )
}

export default Register
