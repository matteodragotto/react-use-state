import languages from "../../data/languages"
import LanguageCard from "./LanguageCard"
import Buttons from "./Buttons"
import { useState } from "react"

const Main = () => {

  const [selectedLanguage, setSelectedLanguage] = useState(0)

  return (
    <main>
      <Buttons languages={languages} selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />

      <div className="container">
        <LanguageCard languages={languages} selectedLanguage={selectedLanguage} />

      </div>
    </main>
  )
}

export default Main
