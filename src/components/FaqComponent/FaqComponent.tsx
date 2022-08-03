import { FC } from 'react'
import { FAQ } from '../../types'

interface Props {
  faq?: FAQ
}
const FaqComponent: FC<Props> = (props: Props) => {
  return <div className="text-black">FAQ Compoenent</div>
}

export default FaqComponent
