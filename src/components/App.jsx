import React, { Component } from 'react';

import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    const { contacts } = this.state;

    const isInContacts = contacts.find(({ name }) => name === contact.name);

    isInContacts
      ? alert('sdasdasd')
      : this.setState({ contacts: [...contacts, contact] });
  };

  onFilterChange = e => {
    const { value } = e.currentTarget;

    this.setState({ filter: value });
  };

  onBtnDeleteClick = contactId => {
    const { contacts } = this.state;
    const deletedContact = contacts.filter(({ id }) => id !== contactId);

    this.setState({ contacts: deletedContact });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();

    const filteredContacts = this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(normalizedFilter)
    );

    const { filter } = this.state;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <h1>Phonebook</h1>
          <ContactForm dataGrab={this.addContact} />

          <h2>Contacts</h2>
          <Filter value={filter} onFilterChange={this.onFilterChange} />

          <ContactList
            contacts={filteredContacts}
            onBtnDeleteClick={this.onBtnDeleteClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
