import Loading from "@/app/ui/loading";
import { Suspense } from "react";
import EventDetails from "@/app/ui/eventDetails";
import AttendeesList from "@/app/ui/attendeesList"; 
import RegistrationForm from "@/app/ui/registration";
import { registerForEvent } from "@/app/lib/data";
import { redirect } from "next/navigation";


export default async function EventInfoPage({
  params,
}: {
  params: Promise<{ eventId: number }>;
}) {
  const { eventId } = await params;


  async function registerHandler(formData: FormData){
    "use server";
    const personName = formData.get("name") as string;
    const email = formData.get("email") as string;
    registerForEvent(eventId, personName, email);
    redirect("/success");
  }

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <EventDetails eventId={eventId} />
        <AttendeesList eventId={eventId} />
        <RegistrationForm eventId={eventId} register={registerHandler} />
        </Suspense>
    </div>
  );

}