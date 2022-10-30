import styles from "./FormDestinations.module.css";

function FormDestinations() {
  return (
    <fieldset className={styles.fieldContainer}>
      <legend>Destinos de Interesse:</legend>

        <select className={styles.selectContainer} name="countries">
          <option disabled selected>Selecione os países desejados</option>
        </select>
      
        <select className={styles.selectContainer} name="cities">
          <option disabled selected>Selecione as cidades desejadas</option>
        </select>

    </fieldset>
  );
}

export default FormDestinations;
