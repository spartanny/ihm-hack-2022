import { FC } from 'react'
import CustomerReview from '../components/CustomerReview'
import FaqComponent from '../components/FaqComponent'
import Header from '../components/Header'
import ProductComponent from '../components/ProoductComponent/ProductComponent'
import {
  FAQDataProduct1,
  overallReviews,
  ProductData,
} from '../data/ProductData'

const LandingPage: FC = () => {
  const product = ProductData[0]
  const faq = FAQDataProduct1
  const renderFAQ = faq.map((item) => {
    return <FaqComponent faq={item} />
  })
  const overallReview = overallReviews[0]

  return (
    <div>
      <Header />
      <ProductComponent product={product} />
      <h1 className="text-2xl text-black">Frequently Asked Questions</h1>
      {renderFAQ}
      <h1 className="text-2xl text-black">Customer Reviews</h1>
      <CustomerReview review={overallReview} />
    </div>
  )
}

export default LandingPage
