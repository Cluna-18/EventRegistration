import { Suspense } from "react";
import Loading from "@/app/ui/loading";
import EventSelector from "@/app/ui/eventSelector";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Welcome to the Registration App
        </h1>

        <div className="bg-gray-800 border border-gray-600 rounded-xl p-6 shadow-lg">
          <Suspense fallback={<Loading />}>
            <EventSelector />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
