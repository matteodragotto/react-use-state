import languages from "../../data/languages"
import { useState } from "react"

const Main = () => {

  const [selectedLanguage, setSelectedLanguage] = useState(1)

  return (
    <main>
      <ul>
        {languages.map(language => (
          <li key={language.id}><button onClick={() => setSelectedLanguage(language.id)}>{language.title}</button></li>
        ))}
      </ul>

      <div className="container">
        <div className="language-card">
          <h5>{languages.find(language => language.id === selectedLanguage).title}</h5>
          <p>{languages.find(language => language.id === selectedLanguage).description}</p>
        </div>
      </div>
    </main>
  )
}

export default Main
