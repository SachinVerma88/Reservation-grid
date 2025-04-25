// src/types.ts or wherever your types are defined
export type Reservation = {
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
  