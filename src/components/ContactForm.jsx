
import { useState, useEffect } from "react";

export default function ContactForm({
  onAddContact,
  editingContact,
  onUpdateContact,
  onCancelEdit,
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name);
      setPhone(editingContact.phone);
    } else {
      setName("");
      setPhone("");
    }
  }, [editingContact]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) return;

    if (editingContact) {
      onUpdateContact(name, phone);
    } else {
      onAddContact(name, phone);
    }

    setName("");
    setPhone("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2"
    >
      <input
        className="min-h-12 w-full rounded-lg border-2 border-gray-700 px-3 py-2 outline-none focus:border-blue-500"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        className="min-h-12 w-full rounded-lg border-2 border-gray-700 px-3 py-2 outline-none focus:border-blue-500"
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />

      <button
        type="submit"
        className={`min-h-11 w-full rounded-lg px-4 py-2 text-white ${
          editingContact
            ? "bg-green-600 hover:bg-green-700"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {editingContact
          ? "Update Contact"
          : "Add New Contact"}
      </button>

      {editingContact && (
        <button
          type="button"
          onClick={onCancelEdit}
          className="rounded-lg border border-gray-300 p-2 hover:bg-gray-100"
        >
          Cancel
        </button>
      )}
    </form>
  );
}
