import { useState } from "react"

function Dice() {
  const [dice, setState] = useState(0)

  function rollDice() {
    setState(Math.floor(Math.random() * 6) + 1)
  }

  return (
    <>
      <div className="dice">
        <h1>Täring</h1>
        <button onClick={() => rollDice()}>Veereta</button>
        <div>Täringu tulemus: {dice}</div>
      </div>
    </>
  )
}
export default Dice
