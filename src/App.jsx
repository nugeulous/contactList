import { useState, useEffect } from 'react';
// Components
import ContactList from './Components/ContactList';
import SelectedContact from './Components/SelectedContact';
// css
import './App.css';
// Variables
const API_URL = 'https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users';

function App() {
    const [contacts, setContacts] = useState([]);
    const [selectedContactId, setSelectedContactId] = useState(null);

    console.log('select contact id:', selectedContactId);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                let response = await fetch(API_URL);
                let contacts = await response.json();
                console.log('contacts:', contacts);
                setContacts(contacts);
            } catch (error) {
                console.log('error!');
            }
        };
        fetchContacts();
    }, []);

    return (
        <div>
            <ContactList
                contacts={contacts}
                setSelectedContactId={setSelectedContactId}
            />
            <SelectedContact
                contacts={contacts}
                setSelectedContactId={setSelectedContactId}
                selectedContactId={selectedContactId}
            />
        </div>
    );
}

export default App;
