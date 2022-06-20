import type { NextPage } from 'next'
import { useEffect } from 'react'
import { play } from '../playground'


const Home: NextPage = () => {
  const message:string = 'Hello World'

  useEffect(() => {

    play()


  },[])

  return (
    <div>
      <h2>{message}</h2>
    </div>
  )
}

export default Home
