import './App.scss';
import Contact from './components/Contact.jsx';
import contactInfo from './ContactInfo.jsx';

function App() {
  return (
    <div className="App">
      <h1>Contact list</h1>
      <ul className="contactList">
        {contactInfo.map((user, userkey) => (
          <Contact
            key={userkey}
            name={user.name}
            email={user.email}
            phone={user.phone}
            isDeletable={user.isDeletable}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
