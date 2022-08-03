import { FC } from 'react'
import Card from '../components/Card'
import CustomerReview from '../components/CustomerReview'
import FaqComponent from '../components/FaqComponent'
import ProductComponent from '../components/Prooduct/Product'
import { ProductData } from '../data/ProductData'

const LandingPage: FC = () => {
  const product = ProductData[1]
  // Information page
  // qna comp
  // review component

  return (
    <div>
      <ProductComponent />
      <FaqComponent />
      <CustomerReview />
    </div>
  )
}

export default LandingPage
