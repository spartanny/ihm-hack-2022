import { FC } from 'react'
import { FAQ } from '../../types'

interface Props {
  faq: FAQ
}
const FaqComponent: FC<Props> = (props: Props) => {
  const { faq } = props
  return (
    <div className="card bg-white text-black p-4 m-2 shadow-md hover:shadow-xl w-auto md:w-full">
      <div className="grid grid-rows-3">
        <div className="grid grid-cols-3 justify-items-start">
          <span className="font-bold col-span-1">Question. </span>
          <span className="col-span-2">{faq.question}</span>
        </div>
        <div className="grid grid-cols-3 justify-items-start">
          <span className="font-bold col-span-1">Answer. </span>
          <span className="col-span-2">{faq.answer}</span>
        </div>
        <div className="mt-2 grid justify-items-end">
          <span>
            {faq.answeredBy} | {faq.dateOfAnswer}
          </span>
        </div>
      </div>
    </div>
  )
}

export default FaqComponent
