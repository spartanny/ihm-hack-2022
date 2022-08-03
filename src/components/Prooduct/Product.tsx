import { FC } from 'react'
import Card from '../Card'
import { Product } from '../../types'

interface Props {
  asin?: string
  product?: Product
}

const ProductComponent: FC<Props> = (props: Props) => {
  const { asin } = props
  const obj = {
    name: 'Wine',
    asin: '123123',
    launchDate: 'Today',
  } as Product
  return (
    <div>
      <Card product={obj} />
    </div>
  )
}

export default ProductComponent
