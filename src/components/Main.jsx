import languages from "../../data/languages"

const Main = () => {

  const selectedLanguage = 2

  return (
    <main>
      <ul>
        {languages.map(language => (
          <li key={language.id}><button>{language.title}</button></li>
        ))}
      </ul>

      <div className="container">
        <div className="language-card">
          <p>{languages.find(language => language.id === selectedLanguage).description}</p>
        </div>
      </div>
    </main>
  )
}

export default Main
