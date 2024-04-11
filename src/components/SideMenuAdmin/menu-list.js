import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined'

import paths from '../../constants/paths'

const listLinks = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.Order,
    icon: ShoppingBagOutlinedIcon
  },
  {
    id: 2,
    label: 'Produtos',
    link: paths.Products,
    icon: StorefrontOutlinedIcon
  },
  {
    id: 3,
    label: 'Novo produto',
    link: paths.NewProduct,
    icon: AddOutlinedIcon
  },
  {
    id: 4,
    label: 'Adicionar categoria',
    link: paths.NewCategory,
    icon: CategoryOutlinedIcon
  }
]

export default listLinks
