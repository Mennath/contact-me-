
export default function ContactCard({ contact, onDelete,onUpdate,}) {
  return (
    <article className="flex min-h-24 flex-col items-start justify-between gap-4 rounded-2xl bg-[#efeff5] p-4 sm:flex-row sm:items-center">
      <div className="flex min-w-0 flex-wrap items-center gap-2.5">
       
        <span className="break-all rounded-md bg-blue-600 px-2 py-1 text-white">
          Name : {contact.name}
        </span>

        <span className="break-all rounded-md bg-blue-600 px-2 py-1 text-white">
          Phone : {contact.phone}
        </span>
      </div>

      <div className="flex gap-2 self-end sm:self-auto">
        <button
          type="button"
          onClick={() => onUpdate(contact)}
          className="rounded-md bg-amber-500 px-3 py-1 text-white hover:bg-amber-600"
        >
          Update
        </button>

        <button
          type="button"
          onClick={() => onDelete(contact.id)}
          className="rounded-md bg-red-700 px-3 py-1 text-white hover:bg-red-800"
        >
          Delete
        </button>
      </div>
    </article>
  );
}
