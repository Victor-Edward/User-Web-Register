

const UserEdit = () => {
    return(
        <div>
            <p>Altere suas informações abaixo e clique em confirmar</p>

            <form action="">
                <label htmlFor="name"><b>Nome</b></label>
                <input type="text" placeholder="Nome" name="name" id="name" required />

                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Email" name="email" id="email" required />

                <div>
                    <p>Endereço</p>
                    <div>
                        <label htmlFor="CEP"><b>CEP</b></label>
                        <input type="text" placeholder="CEP" name="CEP" id="CEP" required />

                        <label htmlFor="país"><b>País</b></label>
                        <input type="text" placeholder="País" name="país" id="país" required />

                        <label htmlFor="UF"><b>Estado</b></label>
                        <input type="text" placeholder="Estado" name="UF" id="UF" required />

                        <label htmlFor="municipio"><b>Município</b></label>
                        <input type="text" placeholder="Município" name="municipio" id="municipio" required />

                        <label htmlFor="rua"><b>Rua</b></label>
                        <input type="text" placeholder="Rua" name="rua" id="rua" required />

                        <label htmlFor="número"><b>Número</b></label>
                        <input type="text" placeholder="Número" name="número" id="número" required />

                        <label htmlFor="complemento"><b>Complemento</b></label>
                        <input type="text" placeholder="Complemento" name="complemento" id="complemento" required />
                    </div>
                </div>
                

                <label htmlFor="CPF"><b>CPF</b></label>
                <input type="text" placeholder="CPF" name="CPF" id="CPF" required />
                
                <label htmlFor="PIS"><b>PIS</b></label>
                <input type="text" placeholder="PIS" name="PIS" id="PIS" required />
                
                <label htmlFor="password"><b>Senha</b></label>
                <input type="text" placeholder="Senha" name="password" id="password" required />
                
                <label htmlFor="confirm-password"><b>Confirme sua Senha</b></label>
                <input type="text" placeholder="Confirme sua Senha" name="confirm-password" id="confirm-password" required />

                <input type="submit" value="Confirmar" />
            </form>
        </div>
    )
}

export default UserEdit