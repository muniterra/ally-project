function FormDestinations() {
  return (
    <fieldset>
      <legend>Destinos de Interesse:</legend>

      <div>
        <select name="countries">
          <option disabled selected>Selecione os países desejados</option>
        </select>
      </div>
      
      <div>
        <select name="cities">
          <option disabled selected>Selecione as cidades desejadas</option>
        </select>
      </div>

    </fieldset>
  );
}

export default FormDestinations;
