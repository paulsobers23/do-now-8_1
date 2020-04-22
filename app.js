// should take a greetings object as props
const MultiLingualGreeting = ({greetings}) =>{
  const [language,setLanguage] = React.useState('English');
  return (
    <div>
      <h1>{greetings[language]}</h1>
      {Object.keys(greetings)
      .filter((lan) =>  lan !== language)
      .map((language) =>  <button key={language} onClick={() => setLanguage(language)}>{language}</button>)}
    </div>
    );
};


const greetings = { "English": "Good Morning", "Espanol": "Buenos Dias", "Kreyole": "Bonjou", "Portugues": "Bom Dia", "Hindi": "Shubh Prabat" }

// adding keys and properties on the props object
ReactDOM.render(<MultiLingualGreeting greetings ={greetings} />, document.querySelector('.greeting') )