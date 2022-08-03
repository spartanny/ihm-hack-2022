import { FC } from 'react'
import { CustomerReviews } from '../../types'

interface Props {
  customerReview?: CustomerReviews
}

const CustomerReview: FC<Props> = (props: Props) => {
  return <div className="text-black"> Customer Review Component</div>
}

export default CustomerReview
