// src/components/ReservationCard.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, FileText, Users, User } from "lucide-react";


type Reservation = {
  name: string;
  status: "Pending" | "Confirmed" | "Cancelled";
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  bookingDate: string;
  guests: { adults: number; children: number };
  total: number;
  due: number;
  docStatus: "Received" | "Pending" | "Partial";
};


export function ReservationCard({
  reservation,
}: {
  reservation: Reservation;
}) {
  const statusColor = {
    Pending: "bg-yellow-500",
    Confirmed: "bg-green-500",
    Cancelled: "bg-red-500",
  }[reservation.status];

  const docStatusColor = {
    Received: "bg-green-500",
    Pending: "bg-yellow-500",
    Partial: "bg-orange-500",
  }[reservation.docStatus];

  return (
    <Card className="bg-[#111418] text-white rounded-xl shadow-md p-4 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center font-bold">
            {reservation.name[0]}
          </div>
          <div className="flex flex-col">
            <h2 className="font-semibold">{reservation.name}</h2>
            <p className="text-xs text-gray-400">Res. No: #12345</p>
          </div>
        </div>
        <Badge className={`${statusColor}`}>{reservation.status}</Badge>
      </div>

      <div className="flex flex-col text-sm gap-2">
        <p>
          <span className="font-medium">Check-in / Check-out:</span><br/>
          {reservation.checkIn} - {reservation.checkOut}
        </p>
        <p>
          <span className="font-medium">Booking Date:</span> {reservation.bookingDate}
        </p>

        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2">
            <Mail size={14} />
            {reservation.email}
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} />
            {reservation.phone}
          </div>
          <div className="flex items-center gap-2">
            <FileText size={14} />
            <Badge className={`${docStatusColor}`}>{reservation.docStatus}</Badge>
          </div>
        </div>

        <div className="flex gap-4 mt-2 items-center">
          <div className="flex gap-2 items-center">
            <Users size={14} /> {reservation.guests.adults}
          </div>
          <div className="flex gap-2 items-center">
            <User size={14} /> {reservation.guests.children}
          </div>
        </div>

        <div className="flex flex-col gap-1 mt-2">
          <p className="font-semibold">Total: ${reservation.total}</p>
          <Badge variant="destructive" className="w-max">
            Due: ${reservation.due}
          </Badge>
        </div>

        <Button variant="secondary" size="sm" className="w-full mt-2">
          View Room
        </Button>
      </div>
    </Card>
  );
}
