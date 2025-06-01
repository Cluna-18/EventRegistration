import { Suspense } from 'react';
import Loading from '@/app/ui/loading';
import { fetchRegistrations } from '../lib/data';
import { Fragment } from 'react';

export default async function AttendeesList({
    eventId,
    }: {
    eventId:number;
    }) {
      const registrations = await fetchRegistrations(eventId);

    
    return (
        <Suspense fallback={<Loading/>}>
            <div className="max-w-3xl mx-auto mt-8">
                <h1 className="text-2xl font-bold text-white mb-4">Attendees List</h1>

                <div className="grid grid-cols-12 gap-y-4 gap-x-6 bg-gray-800 border border-gray-600 rounded-xl p-6 text-sm text-white shadow-lg">
                    {registrations.length > 0 ? (
                    registrations.map((registered) => (
                        <Fragment key={registered.id}>
                        <div className="font-semibold text-right col-span-2">Name:</div>
                        <div className="col-span-4 text-gray-200">{registered.name}</div>

                        <div className="font-semibold text-right col-span-2">Email:</div>
                        <div className="col-span-4 text-gray-200">{registered.email}</div>
                        </Fragment>
                    ))
                    ) : (
                    <div className="col-span-8 text-center text-gray-300">
                        No attendees registered.
                    </div>
                    )}
                </div>
            </div>
        </Suspense>
    );
}