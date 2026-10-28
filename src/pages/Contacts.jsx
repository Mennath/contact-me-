import { useState } from "react";
import ContactForm from "../components/ContactForm";
import ContactCard from "../components/ContactCard";

const initialContacts = [
  { id: "#1786812555445", name: "ahmed", phone: "87834658" },
  { id: "#1786812564561", name: "sara", phone: "876875" },
];

export default function Contacts() {
  const [contacts, setContacts] = useState(initialContacts);
  const [editingContact, setEditingContact] = useState(null);

  function addContact(name, phone) {
    setContacts((current) => [
      { id: `#${Date.now()}`, name: name.trim(), phone: phone.trim() },
      ...current,
    ]);
  }

  function startUpdate(contact) {
    setEditingContact(contact);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateContact(name, phone) {
    setContacts((current) =>
      current.map((contact) =>
        contact.id === editingContact.id
          ? { ...contact, name: name.trim(), phone: phone.trim() }
          : contact
      )
    );
    setEditingContact(null);
  }

  function deleteContact(id) {
    setContacts((current) => current.filter((contact) => contact.id !== id));
    if (editingContact?.id === id) setEditingContact(null);
  }

  function cancelUpdate() {
    setEditingContact(null);
  }

  return (
    <main className="min-h-screen bg-white px-3 py-6 sm:px-6">
      <section className="mx-auto w-full max-w-4xl">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">Contact List</h1>

        <ContactForm
          onAddContact={addContact}
          editingContact={editingContact}
          onUpdateContact={updateContact}
          onCancelEdit={cancelUpdate}
        />

        <section className="mt-6 flex flex-col gap-3" aria-label="Contact list">
          {contacts.length === 0 ? (
            <p className="rounded-2xl bg-[#efeff5] p-6 text-center text-gray-500">
              No contacts yet. Add your first contact.
            </p>
          ) : (
            contacts.map((contact) => (
              <ContactCard
                key={contact.id}
                contact={contact}
                onDelete={deleteContact}
                onUpdate={startUpdate}
              />
            ))
          )}
        </section>
      </section>
    </main>
  );
}