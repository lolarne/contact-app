import React from 'react';
import './contact.scss';

const Contact = ({ name, email, phone, isDeletable }) => {

  const onPressDelete = (e) => {
    e.preventDefault();
    return alert("deleted");
  }

  return (
    <div className="listContainer">
      <ul>
        <li>
          <div>
            <h3>{name}</h3>
            <h4>{email}</h4>
            <h4>{phone}</h4>
          </div>
          {isDeletable === true ? null : (
            <div>
              <button onClick={(e) => onPressDelete(e)}>Supprimer</button>
            </div>
          )}
        </li>

      </ul>
    </div>
  );
};

export default Contact;