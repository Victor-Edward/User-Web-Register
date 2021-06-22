import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from "../../../styles/components/home_visitor.module.css"
import {FaUserAlt, FaKey, FaRegEye, FaRegEyeSlash} from "react-icons/fa"

const Visitor = () => {
    const router = useRouter()

    const [logSelector, setLogSelector] = useState<string>("Email")

    const [passwordIsVisible, setPasswordIsVisible] = useState("password")

    const changePasswordVisibility = (state:string) => {
        if (state == "password") {
            setPasswordIsVisible("text")
        } else {
            setPasswordIsVisible("password")
        }
    }

    return(
        <div className={styles.wrapper}>
          <div className={styles.greetings}>
            <p className={styles.text}>Olá visitante,</p>
            <p className={styles.text}>Seja bem vindo!</p>
          </div>

          <div>
            <form action="" name="loginForm">
              <div className={styles.inputContainer}>
                <FaUserAlt className={styles.icon}/>
                <input className={styles.inputField}
                type="text" 
                name="email"
                placeholder={`Insira seu ${logSelector}`}
                required/>
              </div>
              <div className={styles.selectorContainer}>
                <label className={styles.inputLabel} htmlFor="logSelector">Logar com:</label>
                <select className={styles.selector} id="logSelector" onChange={e => setLogSelector(e.target.value)}>
                    <option value="Email">Email</option>
                    <option value="CPF">CPF</option>
                    <option value="PIS">PIS</option>
                </select>
              </div>
              <div className={styles.inputContainer}>
                <FaKey className={styles.icon}/>
                <input className={styles.inputField} 
                type={passwordIsVisible} 
                name="password"
                placeholder={"Insira sua senha"} 
                required/>
                {passwordIsVisible=="password" ? (
                  <FaRegEye 
                  onClick={() => changePasswordVisibility(passwordIsVisible)} 
                  className={styles.passwordIcon}/>
                ) : (
                  <FaRegEyeSlash 
                  onClick={() => changePasswordVisibility(passwordIsVisible)} 
                  className={styles.passwordIcon}/>
                ) }
              </div>

              <div className={styles.buttonsContainer}>
                <button className={styles.loginButton}>Entrar</button>
                <button className={styles.registerButton} onClick={() => router.push("register")}>Não tenho conta</button>
              </div>
            </form>
          </div>
        </div>
    )
}

export default Visitor