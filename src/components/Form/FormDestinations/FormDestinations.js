import styles from "./FormDestinations.module.css";
import { useState, useEffect } from "react";

function FormDestinations() {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("https://amazon-api.sellead.com/country", {
      method: "GET",
      headers: {
        "Contente-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://amazon-api.sellead.com/city", {
      method: "GET",
      headers: {
        "Contente-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCities(data);
      });
  }, []);
  
  return (
    <fieldset className={styles.fieldContainer}>
      <legend>Destinos de Interesse:</legend>

      <select
        className={styles.selectContainer}
        multiple
        name="countries"
        required
      >
        <option disabled defaultValue="">
          Selecione os países desejados
        </option>
        {countries.map((country) => (
          <option id={country.code.toString()} key={country.code.toString()}>
            {country.name_ptbr}
          </option>
        ))}
      </select>

      <select
        className={styles.selectContainer}
        multiple
        name="cities"
        required
      >
        <option disabled defaultValue="">
          Selecione as cidades desejadas
        </option>
        {cities.map(
          (city) =>
            city.name_ptbr && (
              <option id={city.id} key={city.id}>
                {city.name_ptbr}
              </option>
            )
        )}
      </select>
    </fieldset>
  );
}

export default FormDestinations;
