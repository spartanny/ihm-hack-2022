import { FC } from 'react'
import { Product, FAQ, CustomerReviews, OverallReviews } from '../types'

interface Props {
  product?: Product
  faq?: FAQ
  customerReviews?: CustomerReviews
  overallReviews?: OverallReviews
}

const Card: FC<Props> = (props: Props) => {
  const { product, faq, customerReviews } = props
  const text =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, saepe aliquid voluptatibus illum cupiditate, ipsam esse, deserunt libero provident molestiae reprehenderit. Et, reprehenderit aperiam eum repellat beatae consequatur magni ipsa.'
  const render = !product && !faq && !customerReviews && (
    <div>
      <p className="mt-2"> {text} </p>
      <p className="mt-2"> {text} </p>
    </div>
  )
  const ProductComponent =
    product &&
    Object.entries(product).map((key, value) => {
      console.log(key, value)
      return (
        <p className="text-lg">
          {key[0]} : {key[1]}
        </p>
      )
    })
  return (
    <div className="card bg-sky-200 text-black p-4 m-2 shadow-md hover:shadow-xl w-auto md:w-[500px]">
      <h1 className="text-2xl ">Hello this is the card componenet!</h1>
      {render}
      {ProductComponent}
      <button className="btn mt-4 rounded-full bg-orange-300">
        Speak it up !
      </button>
    </div>
  )
}

export default Card
