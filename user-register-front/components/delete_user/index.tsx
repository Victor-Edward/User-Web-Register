import styles from "../../styles/components/delete_user.module.css"

const DeleteUser = () => {
    return(
        <div>
            <p>Tem certeza que quer deletar sua conta usuário?</p>
            <button>Confirmar</button>
            <button>Cancelar</button>
        </div>
    )
}

export default DeleteUser