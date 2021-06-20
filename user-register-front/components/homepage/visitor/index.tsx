import { useRouter } from 'next/router'

const Visitor = () => {
    const router = useRouter()

    return(
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
    )
}

export default Visitor