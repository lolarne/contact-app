import React from 'react';
import contactInfo from '../ContactInfo.jsx';
import './contact.scss';

const Contact = () => {
  return (
    <div className="listContainer">
      <ul>
        {contactInfo.map((user, userKey) => (
          <li key={userKey}>
            <div>
              <h3>{user.name}</h3>
              <h4>{user.email}</h4>
              <h4>{user.phone}</h4>
            </div>
            {user.isDeletable === true ? null : (
              <div>
                <button>Supprimer</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;