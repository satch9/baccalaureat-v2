import PropTypes from 'prop-types'
import './alphabet.css'

const Alphabet = ({ selectedLetters }) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
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

Alphabet.propTypes = {
  selectedLetters: PropTypes.array // Valider la prop selectedLetter
}

export default Alphabet