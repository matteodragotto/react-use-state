import languages from "../../data/languages"
import LanguageCard from "./LanguageCard"
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
        <LanguageCard languages={languages} selectedLanguage={selectedLanguage} />

      </div>
    </main>
  )
}

export default Main
