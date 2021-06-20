import {FaEdit} from "react-icons/fa"
import { useRouter } from 'next/router'

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