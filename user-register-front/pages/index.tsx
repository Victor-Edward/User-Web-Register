import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import {FaEdit} from "react-icons/fa"
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const [userIsLogged, setUserIsLogged] = useState<boolean>(false)

  return (
    <div className={styles.container}>
      {userIsLogged ? (
        <div>
          <div>
            <p>Olá usuário!</p>
          </div>

          <div>
            <button onClick={() => router.push("")}><FaEdit/>Editar informações</button>
            <button>Logout</button>
          </div>
        </div>
      ):(
        <div>
          <div>
            <p>Olá visitante!</p>
          </div>

          <div>
            <form action="">
              <label htmlFor="email">Email, CPF ou PIS</label>
              <input type="text" name="email" required/>
              <label htmlFor="password">Senha</label>
              <input type="password" name="password" required/>
              <div>
                <input type="submit" value="Login" />
              </div>
            </form>
            <button onClick={() => router.push("register")}>Registrar</button>
          </div>
        </div>
      )}
    </div>
  )
}
