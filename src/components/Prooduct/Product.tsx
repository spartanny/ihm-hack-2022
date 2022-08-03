import { FC } from 'react'
import Card from '../Card'
import { Product } from '../../types'
import { ProductData } from '../../data/ProductData'

interface Props {
  asin?: string
  product?: Product
}

const ProductComponent: FC<Props> = (props: Props) => {
  const { asin } = props
  const obj = ProductData[0]
  return (
    <div>
      <Card product={obj} />
    </div>
  )
}

export default ProductComponent
