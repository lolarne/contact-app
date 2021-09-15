import './App.css';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="App">
      <h1>Contact list</h1>
      <Contact
        name="Lola"
        email="email@email.com"
        phone="06300000"
        isDeletable="true"
      />
      <Contact
        name="Tom"
        email="email@email.com"
        phone="06300000"
        isDeletable="true"
      />
      <Contact
        name="Jacques"
        email="email@email.com"
        phone="06300000"
        isDeletable="false"
      />
      <Contact
        name="Lucie"
        email="email@email.com"
        phone="06300000"
        isDeletable="true"
      />
      <Contact
        name="Paul"
        email="email@email.com"
        phone="06300000"
        isDeletable="false"
      />
    </div>
  );
}

export default App;
