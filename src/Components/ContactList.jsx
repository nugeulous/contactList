import { useState } from 'react';
import ContactRow from './ContactRow';
import { useEffect } from 'react';

export default function ContactList({ contacts, setSelectedContactId }) {
    const [name, setName] = useState('');

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="2">Contact List</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                {contacts.map((contact) => {
                    return (
                        <ContactRow
                            key={contact.id}
                            contact={contact}
                            setSelectedContactId={setSelectedContactId}
                        />
                    );
                })}
            </tbody>
        </table>
    );
}
