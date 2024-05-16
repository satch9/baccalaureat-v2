import './alphabet.css'
import { useGameContext } from '../../../hooks/useGame'

const Alphabet = () => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const {selectedLetters} = useGameContext()
  //console.log("selectedLetters",  selectedLetters)
  return (
    <div className="alphabetList">
      <ul>
        {alphabet.split('').map(letter => (
          <li key={letter} className={selectedLetters.includes(letter) ? 'selected' : ''}>
            {selectedLetters.includes(letter) ? <del>{letter}</del> : letter}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Alphabet