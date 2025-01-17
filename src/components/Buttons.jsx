const Buttons = (props) => {
  const { languages, selectedLanguage, setSelectedLanguage } = props
  return (
    <ul>
      {languages.map(language => (
        <li key={language.id}>
          <button className={language.id === selectedLanguage ? 'active' : ''} onClick={() => setSelectedLanguage(language.id)}>{language.title}</button>
        </li>
      ))
      }
    </ul>

  )
}

export default Buttons