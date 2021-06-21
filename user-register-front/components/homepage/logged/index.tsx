import {FaEdit, FaPowerOff} from "react-icons/fa"
import { useRouter } from 'next/router'
import styles from "../../../styles/components/home_logged.module.css"

const Logged = () => {
    const router = useRouter()

    return(
        <div className={styles.wrapper}>
          <div className={styles.greetings}>
            <p className={styles.text}>Olá <b>usuário</b>,</p>
            <p className={styles.text}>Seja bem vindo!</p>
          </div>

          <div className={styles.buttons}>
            <button className={styles.editButton} 
              onClick={() => router.push("edit")}>
              <FaEdit className={styles.icon}/> Editar informações
            </button>
            <button className={styles.logOutButton}>
              <FaPowerOff className={styles.icon}/> Logout
            </button>
          </div>
        </div>
    )
}

export default Logged