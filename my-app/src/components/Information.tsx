import "./Information.css"

const Information = () => {
  return (
    <div className="information">
      <h1>Karl Luberg</h1>
      <p>Minu huvideks on: programmeerimine, arvutimängud, padel ja muusika</p>

      <label>
        Võta minuga ühendust minu emailil luberg@tlu.ee:&nbsp;
        <textarea placeholder=""></textarea>
      </label>

      <button className="submit-button">Saada</button>
    </div>
  )
}

export default Information
