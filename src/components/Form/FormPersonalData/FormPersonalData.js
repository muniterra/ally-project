import styles from "./FormPersonalData.module.css";

function FormPersonalData() {
  return (
    <fieldset className={styles.fieldContainer}>
      <legend>Dados Pessoais:</legend>

      <div className={styles.inputContainer}>
        <label htmlFor="name">Nome:</label>
        <input
          id="name"
          name="name"
          placeholder="Digite seu nome"
          required
          type="text"
        />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          placeholder="Digite seu email"
          required
          type="email"
        />
      </div>

      <div className={styles.inputContainer}>
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

      <div className={styles.inputContainer}>
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
