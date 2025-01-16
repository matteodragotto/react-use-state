import languages from "../../data/languages"

const Main = () => {

  return (
    <main>
      <ul>
        {languages.map(language => (
          <li key={language.id}><button>{language.title}</button></li>
        ))}
      </ul>

      <div className="container">
        <div className="language-card">
          <p></p>
        </div>
      </div>
    </main>
  )
}

export default Main
