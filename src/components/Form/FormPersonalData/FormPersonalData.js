function FormPersonalData() {
  return (
    <fieldset>
      <legend>Dados Pessoais:</legend>

      <div>
        <label htmlFor="name">Nome:</label>
        <input
          id="name"
          name="name"
          placeholder="Digite seu nome"
          required
          type="text"
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          placeholder="Digite seu email"
          required
          type="email"
        />
      </div>

      <div>
        <label htmlFor="tel">Telefone:</label>
        <input
          id="tel"
          name="tel"
          pattern="\([1-9]{2}\) ?[0-9]{4,5}-[0-9]{4}"
          placeholder="(XX) XXXXX-XXXX"
          required
          type="tel"
        />
      </div>

      <div>
        <label htmlFor="cpf">CPF:</label>
        <input
          id="cpf"
          name="cpf"
          pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
          placeholder="XXX.XXX.XXX-XX"
          required
          type="text"
        />
      </div>

    </fieldset>
  );
}

export default FormPersonalData;
