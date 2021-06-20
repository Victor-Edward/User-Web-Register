import {FaEdit} from "react-icons/fa"
import { useRouter } from 'next/router'
import styles from "../../../styles/components/home_logged.module.css"

const Logged = () => {
    const router = useRouter()

    return(
        <div>
          <div>
            <p>Olá usuário!</p>
          </div>

          <div>
            <button onClick={() => router.push("edit")}><FaEdit/>Editar informações</button>
            <button>Logout</button>
          </div>
        </div>
    )
}

export default Logged