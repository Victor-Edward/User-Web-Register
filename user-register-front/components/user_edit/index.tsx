import { useRouter } from 'next/router'
import styles from "../../styles/components/user_edit.module.css"
import {FaUserAltSlash} from "react-icons/fa"

const UserEdit = () => {
    const router = useRouter()

    return(
        <div className={styles.wrapper}>
            <div className={styles.greetings}>
                <p className={styles.text}>Para alterar suas informações, preencha os campos abaixo:</p>
            </div>

            <form className={styles.fieldsContainer} action="" method="post">
                <p className={styles.category}><b>Informação pessoal</b></p>
                <div className={styles.pessoalInfoContainer}>
                    <div className={styles.ColumnContainer}>
                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel} htmlFor="name"><b>Nome</b></label>
                            <input className={styles.inputField} type="text" placeholder="Nome" name="name" id="name" required />
                        </div>

                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel} htmlFor="email"><b>Email</b></label>
                            <input className={styles.inputField} type="text" placeholder="Email" name="email" id="email" required />
                        </div>

                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel} htmlFor="password"><b>Senha</b></label>
                            <input className={styles.inputField} type="text" placeholder="Senha" name="password" id="password" required />
                        </div>
                    </div>

                    <div className={styles.ColumnContainer}>
                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel} htmlFor="CPF"><b>CPF</b></label>
                            <input className={styles.inputField} type="text" placeholder="CPF" name="CPF" id="CPF" required />
                        </div>

                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel} htmlFor="PIS"><b>PIS</b></label>
                            <input className={styles.inputField} type="text" placeholder="PIS" name="PIS" id="PIS" required />
                        </div>

                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel} htmlFor="confirm-password"><b>Confirme sua Senha</b></label>
                            <input className={styles.inputField} type="text" placeholder="Confirme sua Senha" name="confirm-password" id="confirm-password" required />
                        </div>
                    </div>
                </div>

                <p className={styles.category}><b>Endereço</b></p>
                <div className={styles.addressInfoContainer}>
                    <div className={styles.ColumnContainer}>
                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel} htmlFor="CEP"><b>CEP</b></label>
                            <input className={styles.inputField} type="text" placeholder="CEP" name="CEP" id="CEP" required />
                        </div>

                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel} htmlFor="país"><b>País</b></label>
                            <input className={styles.inputField} type="text" placeholder="País" name="país" id="país" required />
                        </div>
                        
                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel} htmlFor="municipio"><b>Município</b></label>
                            <input className={styles.inputField} type="text" placeholder="Município" name="municipio" id="municipio" required />
                        </div>

                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel} htmlFor="número"><b>Número</b></label>
                            <input className={styles.inputField} type="text" placeholder="Número" name="número" id="número" required />
                        </div>
                    </div>

                    <div className={styles.ColumnContainer}>
                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel} htmlFor="CEP"><b>Pesquisar CEP</b></label>
                            <button className={styles.cepSearchButton} id="CEP">Pesquisar CEP</button>
                        </div>
                        
                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel} htmlFor="UF"><b>Estado</b></label>
                            <input className={styles.inputField} type="text" placeholder="Estado" name="UF" id="UF" required />
                        </div>
                        
                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel} htmlFor="rua"><b>Rua</b></label>
                            <input className={styles.inputField} type="text" placeholder="Rua" name="rua" id="rua" required />
                        </div>

                        <div className={styles.inputContainer}>
                            <label className={styles.inputLabel} htmlFor="complemento"><b>Complemento</b></label>
                            <input className={styles.inputField} type="text" placeholder="Complemento" name="complemento" id="complemento" required />
                        </div>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <input className={styles.submitButton} type="submit" value="Confirmar alteração" />
                    <button 
                    onClick={() => router.push("confirm_delete")}
                    className={styles.deleteButton}>
                    <FaUserAltSlash className={styles.icon}/>Excluir conta
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UserEdit