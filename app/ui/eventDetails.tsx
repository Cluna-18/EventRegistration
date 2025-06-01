import { Suspense } from 'react';
import Loading from '@/app/ui/loading';
import { fetchEvent } from '@/app/lib/data';

export default async function EventDetails({
  eventId,
}: {
 eventId:number;
}) {
    const event = await fetchEvent(eventId);

  return (
    <Suspense fallback={<Loading />}>
      <div className="max-w-3xl mx-auto mt-8">
        <h1 className="text-2xl font-bold text-white mb-4">Event Details</h1>

        <div className="grid grid-cols-8 gap-y-4 gap-x-6 bg-gray-800 border border-gray-600 rounded-xl p-6 text-sm text-white shadow-lg">
        
          <div className="font-semibold text-right col-span-2">Name:</div>
          <div className="col-span-2 text-gray-200">{event.title}</div>

          <div className="font-semibold text-right col-span-2">Time:</div>
          <div className="col-span-2 text-gray-200">{event.time}</div>

          <div className="font-semibold text-right col-span-2">Location:</div>
          <div className="col-span-2 text-gray-200">{event.place}</div>

          <div className="font-semibold text-right col-span-2">Description:</div>
          <div className="col-span-2 text-gray-200">{event.description}</div>
        
        </div>
      </div>

    </Suspense>
  );
}