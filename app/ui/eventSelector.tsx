import { Event, fetchEvents } from "@/app/lib/data";
import { redirect } from "next/navigation";

export default async function EventSelector() {
  const events = await fetchEvents();

  async function useEvent(formData: FormData) {
    'use server';
    const eventid = formData.get('event') as string;
    const id = Number(eventid);
    redirect('/eventInfo/' + id);
  }

  return (
    <form
      action={useEvent}
      className="space-y-4 bg-gray-800 rounded-xl p-6 shadow-lg"
    >
      <div>
        <label
          htmlFor="event"
          className="block text-sm font-medium text-gray-200 mb-1"
        >
          Select an Event:
        </label>
        <select
          name="event"
          id="event"
          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {events.map((event) => (
            <option key={event.id} value={event.id}>
              {event.title}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 transition"
      >
        Select Event
      </button>
    </form>
  );
}
