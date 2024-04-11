import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined'
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErrorMessage } from '../../../components'
import api from '../../../services/api'
import {
  Container,
  Input,
  Label,
  ButtonStyles,
  LabelUpload,
  OfferContainer
} from './styles'

function NewProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const { push } = useHistory()

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o preço do produto'),
    category: Yup.object().required('Selecione a categoria'),
    file: Yup.mixed()
      .test('required, Carregue um arquivo', value => {
        return value?.length > 0
      })
      .test('fileSize', 'Carregue arquivos de até 2mb', value => {
        return value[0]?.size <= 2000000
      })
      .test('type', 'Carregue apenas arquivos JPEG e PNG', value => {
        return value[0]?.type === 'image/jpeg' || value[0].type === 'image/png'
      }),
    offer: Yup.bool()
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = async data => {
    const productDataFormData = new FormData()

    productDataFormData.append('name', data.name)
    productDataFormData.append('price', data.price)
    productDataFormData.append('category_id', data.category.id)
    productDataFormData.append('file', data.file[0])
    productDataFormData.append('offer', data.offer)

    await toast.promise(api.post('/products', productDataFormData), {
      pending: 'Criando novo produto...',
      success: 'Produto criado com sucesso!',
      error: 'Falha ao criar produto. Tente novamente!'
    })

    setTimeout(() => {
      push('/listar-produtos')
    }, 2000)
  }

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
    }
    loadCategories()
  }, [])

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input type="text" {...register('name')} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

        <div>
          <Label>Preço</Label>
          <Input type="number" {...register('price')} />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>

        <div>
          <LabelUpload>
            {fileName || (
              <>
                <CloudUploadOutlinedIcon style={{ color: '#9758A6' }} />
                Carregue uma imagem
              </>
            )}
            <input
              type="file"
              accept="image/png, image/jpeg"
              {...register('file')}
              onChange={value => setFileName(value.target.files[0]?.name)}
            />
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>

        <Controller
          name="category"
          control={control}
          render={({ field }) => {
            return (
              <div>
                <Label>Categoria</Label>
                <ReactSelect
                  {...field}
                  options={categories}
                  getOptionLabel={cat => cat.name}
                  getOptionValue={cat => cat.id}
                  placeholder="Selecione..."
                />
                <ErrorMessage>{errors.category?.message}</ErrorMessage>
              </div>
            )
          }}
        ></Controller>
        <OfferContainer>
          <input type="checkbox" {...register('offer')} />
          <Label>Produto em oferta?</Label>
        </OfferContainer>

        <ButtonStyles>Adicionar Produto</ButtonStyles>
      </form>
    </Container>
  )
}

export default NewProduct
