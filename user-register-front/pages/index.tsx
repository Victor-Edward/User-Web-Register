import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Visitor from '../components/homepage/visitor/index'
import Logged from '../components/homepage/logged/index'

export default function Home() {
  
  const [userIsLogged, setUserIsLogged] = useState<boolean>(false)

  return (
    <div className={styles.container}>
      {userIsLogged ? (
        <Logged />
      ):(
        <Visitor />
      )}
    </div>
  )
}
