import FormPersonalData from "./FormPersonalData/FormPersonalData";
import FormDestinations from "./FormDestinations/FormDestinations";
import styles from "./Form.module.css";

function Form() {
  return (
    <form className={styles.formContainer}>
      <FormPersonalData />
      <FormDestinations />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form;
