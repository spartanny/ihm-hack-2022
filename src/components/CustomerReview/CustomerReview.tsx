import { FC } from 'react'
import { CustomerReviews, OverallReviews } from '../../types'

interface Props {
  review: CustomerReviews | OverallReviews
}

const CustomerReview: FC<Props> = (props: Props) => {
  const { review } = props
  const renderReview = Object.entries(review).map((key, value) => {
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
      {renderReview}
    </div>
  )
}

export default CustomerReview
