const LanguageCard = (props) => {

  const { languages, selectedLanguage } = props
  return (
    <div className="language-card">
      <h5>{selectedLanguage === 0 ? '' : languages.find(language => language.id === selectedLanguage).title}</h5>
      <p>{selectedLanguage === 0 ? 'Nessun linguaggio selezionato' : languages.find(language => language.id === selectedLanguage).description}</p>
    </div>
  )
}

export default LanguageCard