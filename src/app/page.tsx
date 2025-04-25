// src/pages/Reservations.tsx
import { ReservationCard } from "@/components/ReservationCard";

const reservations = [
  {
    name: "John Doe",
    status: "Pending",
    email: "john.doe@example.com",
    phone: "+1-234-567-890",
    checkIn: "01/01/2024",
    checkOut: "01/05/2024",
    bookingDate: "12/25/2023",
    guests: { adults: 2, children: 1 },
    total: 500,
    due: 200,
    docStatus: "Received",
  },
  {
    name: "Jane Smith",
    status: "Cancelled",
    email: "jane.smith@example.com",
    phone: "+1-987-654-321",
    checkIn: "02/01/2024",
    checkOut: "02/03/2024",
    bookingDate: "01/15/2024",
    guests: { adults: 1, children: 1 },
    total: 300,
    due: 100,
    docStatus: "Pending",
  },
  {
    name: "Alex Johnson",
    status: "Confirmed",
    email: "alex.johnson@example.com",
    phone: "+1-555-123-456",
    checkIn: "03/01/2024",
    checkOut: "03/07/2024",
    bookingDate: "02/10/2024",
    guests: { adults: 3, children: 2 },
    total: 700,
    due: 350,
    docStatus: "Received",
  },
  {
    name: "Emily Davis",
    status: "Pending",
    email: "emily.davis@example.com",
    phone: "+1-555-987-654",
    checkIn: "04/10/2024",
    checkOut: "04/15/2024",
    bookingDate: "03/20/2024",
    guests: { adults: 2, children: 0 },
    total: 400,
    due: 150,
    docStatus: "Received",
  },
  {
    name: "Michael Brown",
    status: "Confirmed",
    email: "michael.brown@example.com",
    phone: "+1-555-321-987",
    checkIn: "05/05/2024",
    checkOut: "05/10/2024",
    bookingDate: "04/15/2024",
    guests: { adults: 4, children: 2 },
    total: 900,
    due: 450,
    docStatus: "Received",
  },
  {
    name: "Sarah Lee",
    status: "Cancelled",
    email: "sarah.lee@example.com",
    phone: "+1-555-654-321",
    checkIn: "06/10/2024",
    checkOut: "06/12/2024",
    bookingDate: "05/20/2024",
    guests: { adults: 2, children: 0 },
    total: 350,
    due: 100,
    docStatus: "Pending",
  },
  {
    name: "David Martinez",
    status: "Confirmed",
    email: "david.martinez@example.com",
    phone: "+1-555-876-543",
    checkIn: "07/01/2024",
    checkOut: "07/05/2024",
    bookingDate: "06/10/2024",
    guests: { adults: 2, children: 3 },
    total: 800,
    due: 350,
    docStatus: "Received",
  },
  {
    name: "Olivia Wilson",
    status: "Pending",
    email: "olivia.wilson@example.com",
    phone: "+1-555-432-109",
    checkIn: "08/15/2024",
    checkOut: "08/20/2024",
    bookingDate: "07/25/2024",
    guests: { adults: 2, children: 1 },
    total: 550,
    due: 250,
    docStatus: "Received",
  },
  {
    name: "Daniel Harris",
    status: "Confirmed",
    email: "daniel.harris@example.com",
    phone: "+1-555-654-876",
    checkIn: "09/01/2024",
    checkOut: "09/07/2024",
    bookingDate: "08/15/2024",
    guests: { adults: 3, children: 0 },
    total: 650,
    due: 300,
    docStatus: "Received",
  },
];


export default function ReservationsPage() {
  return (
    <div className="min-h-screen bg-[#0D0F13] p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Reservations</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reservations.map((res, idx) => (
          <ReservationCard key={idx} reservation={res} />
        ))}
      </div>
    </div>
  );
}
