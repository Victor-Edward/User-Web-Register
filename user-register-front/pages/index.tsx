import Image from 'next/image'
import { useState } from 'react'
import Visitor from '../components/homepage/visitor/index'
import Logged from '../components/homepage/logged/index'
import styles from '../styles/pages/homepage.module.css'

export default function Home() {
  
  const [userIsLogged, setUserIsLogged] = useState<boolean>(true)

  return (
    <div className={styles.wrapper}>
      {userIsLogged ? (
        <Logged />
      ):(
        <Visitor />
      )}
    </div>
  )
}
