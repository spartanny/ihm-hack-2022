import { FC } from 'react'
import CustomerReview from '../components/CustomerReview'
import FaqComponent from '../components/FaqComponent'
import ProductComponent from '../components/ProoductComponent/ProductComponent'
import {
  FAQDataProduct3,
  overallReviews,
  ProductData,
} from '../data/ProductData'

const LandingPage: FC = () => {
  const product = ProductData[2]
  const faq = FAQDataProduct3
  const renderFAQ = faq.map((item) => {
    return <FaqComponent faq={item} />
  })
  const overallReview = overallReviews[2]

  return (
    <div>
      <ProductComponent product={product} />
      <h1 className="text-2xl text-black">Frequently Asked Questions</h1>
      {renderFAQ}
      <h1 className="text-2xl text-black">Customer Reviews</h1>
      <CustomerReview review={overallReview} />
    </div>
  )
}

export default LandingPage
