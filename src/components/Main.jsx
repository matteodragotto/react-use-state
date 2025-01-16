import languages from "../../data/languages"
import { useState } from "react"

const Main = () => {

  const [selectedLanguage, setSelectedLanguage] = useState(0)

  return (
    <main>
      <ul>
        {languages.map(language => (
          <li key={language.id}>
            <button className={language.id === selectedLanguage ? 'active' : ''} onClick={() => setSelectedLanguage(language.id)}>{language.title}</button>
          </li>
        ))}
      </ul>

      <div className="container">
        <div className="language-card">
          <h5>{selectedLanguage === 0 ? '' : languages.find(language => language.id === selectedLanguage).title}</h5>
          <p>{selectedLanguage === 0 ? 'Nessun linguaggio selezionato' : languages.find(language => language.id === selectedLanguage).description}</p>
        </div>
      </div>
    </main>
  )
}

export default Main
