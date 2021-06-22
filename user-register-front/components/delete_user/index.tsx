import styles from "../../styles/components/delete_user.module.css"

const DeleteUser = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.greetings}>
                    <p className={styles.text}>Tem certeza que quer deletar sua conta usuário?</p>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.cancelButton}>Cancelar</button>
                    <button className={styles.confirmButton}>Confirmar</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteUser