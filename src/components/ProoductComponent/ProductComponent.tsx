import { FC } from 'react'
import { Product } from '../../types'

interface Props {
  product: Product
}

const ProductComponent: FC<Props> = (props: Props) => {
  const { product } = props
  const renderProduct = Object.entries(product).map((key, value) => {
    return (
      <div className="m-[2px] grid grid-cols-2 shadow-md">
        <span className="p-3 capitalize bg-[#eaeded] flex justify-center">
          {key[0]}
        </span>
        <span className="p-3 flex justify-center">{key[1]}</span>
      </div>
    )
  })
  return (
    <div className="card bg-white text-black p-4 m-2 shadow-md hover:shadow-xl w-auto md:w-full">
      <h1 className="text-2xl text-center">Product Image!</h1>
      {renderProduct}
      <button className="grid m-auto btn mt-4 rounded-full bg-[#FF9900]">
        Speak it up !
      </button>
    </div>
  )
}

export default ProductComponent
