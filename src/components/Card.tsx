import { FC } from 'react'

const Card: FC = () => {
  return (
    <div className="card bg-sky-200 text-black p-4 m-2 shadow-md hover:shadow-xl w-auto md:w-[500px]">
      <h1 className="text-2xl ">Hello this is the card componenet!</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum in
        voluptates quibusdam sunt quaerat ratione, veniam veritatis saepe
        impedit quo odio facilis inventore provident. Adipisci aperiam
        voluptates doloribus sunt nihil.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        quidem expedita iusto tempora ipsam, debitis dolor hic veritatis minus
        voluptatum voluptate temporibus, similique, inventore placeat facere
        saepe consequuntur consectetur alias?
      </p>
    </div>
  )
}

export default Card
