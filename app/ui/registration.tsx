import { Suspense } from 'react';
import Loading from '@/app/ui/loading';

export default async function RegistrationForm({
  eventId,
  register,
}: {
  eventId: number;
  register: (formData: FormData) => void;
}) {
  return (
    <Suspense fallback={<Loading />}>
      <div className="max-w-5xl mx-auto mt-8 px-4">
        <h1 className="text-2xl font-bold text-white mb-4">Registration</h1>
        <form action={register}>
          <div className="grid grid-cols-12 gap-4 items-center bg-gray-800 border border-gray-600 rounded-xl p-6 shadow-lg text-sm text-white">
            <div className="col-span-4">
              <label htmlFor="name" className="block text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div className="col-span-4">
              <label htmlFor="email" className="block text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div className="col-span-4 pt-5">
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded transition"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </Suspense>
  );
}
