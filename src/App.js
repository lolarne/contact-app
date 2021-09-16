import './App.css';
import Contact from './components/Contact.jsx';
import contactInfo from './ContactInfo.jsx';

function App() {
  return (
    <div className="App">
      <h1>Contact list</h1>
      {contactInfo.map((user, userkey) => (
        <Contact
          key={userkey}
          name={user.name}
          email={user.email}
          phone={user.phone}
          isDeletable={user.isDeletable}
        />
      ))}
    </div>
  );
}

export default App;
