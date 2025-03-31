export const rooms = [
  {
    id: 1,
    roomNumber: "231",
    roomType: "Deluxe twin",
    floor: "Д-31",
    bedType: "Twin bed",
    capacity: 2,
    status: { label: "Бохир", value: "dirty", color: "#dc3545" },
    amenities: "Queen Size, Шүршүүр, Жакуз",
    price: 150,
    area: 50,
    description: "A deluxe twin room with great views.",
    otherOptions: ["early-checkin"]
  },
  {
    id: 2,
    roomNumber: "100",
    roomType: "Superior twin",
    floor: "Д-02",
    bedType: "Twin bed",
    capacity: 2,
    status: { label: "Бэлэн", value: "available", color: "#198754" },
    amenities: "Жакуз, Шүршүүр, Mini-Bar",
    price: 180,
    area: 60,
    description: "A superior twin room perfect for couples.",
    otherOptions: []
  },
  {
    id: 3,
    roomNumber: "101",
    roomType: "Executive suite",
    floor: "Д-01",
    bedType: "King size bed",
    capacity: 4,
    status: { label: "Хүлээгдэж", value: "pending", color: "#0d6efd" },
    amenities: "Double Bed, Жакуз, Шүршүүр",
    price: 250,
    area: 80,
    description: "Spacious executive suite with a king size bed.",
    otherOptions: ["late-checkout", "spa"]
  },
  {
    id: 4,
    roomNumber: "101", // Duplicate room number for testing
    roomType: "Executive suite",
    floor: "Д-01",
    bedType: "King size bed",
    capacity: 4,
    status: { label: "Хүлээгдэж", value: "pending", color: "#0d6efd" },
    amenities: "Double Bed, Жакуз, Шүршүүр",
    price: 250,
    area: 80,
    description: "Another spacious executive suite.",
    otherOptions: ["spa"]
  },
  {
    id: 5,
    roomNumber: "675",
    roomType: "Standard Double",
    floor: "Д-02",
    bedType: "Queen size bed",
    capacity: 2,
    status: { label: "Захиалсан", value: "booked", color: "#ffc107" },
    amenities: "Double Bed, Жакуз, Шүршүүр",
    price: 120,
    area: 45,
    description: "A standard double room for a comfortable stay.",
    otherOptions: []
  },
  {
    id: 6,
    roomNumber: "2",
    roomType: "Comfort Single",
    floor: "Д-04",
    bedType: "Twin bed", // Should likely be Single Bed
    capacity: 1, // Should likely be 1
    status: { label: "Бэлэн", value: "available", color: "#198754" }, // Updated status label
    amenities: "Single Bed, Шүршүүр",
    price: 90,
    area: 30,
    description: "A cozy single room.",
    otherOptions: ["early-checkin"]
  },
  {
    id: 7,
    roomNumber: "231", // Duplicate room number
    roomType: "Deluxe suite",
    floor: "Д-31",
    bedType: "Queen size bed",
    capacity: 3,
    status: { label: "Бохир", value: "dirty", color: "#dc3545" },
    amenities: "Queen Size, Шүршүүр",
    price: 200,
    area: 70,
    description: "A deluxe suite perfect for small families.",
    otherOptions: []
  },
  {
    id: 8,
    roomNumber: "100", // Duplicate room number
    roomType: "Comfort Single",
    floor: "Д-02",
    bedType: "Twin bed", // Should likely be Single Bed
    capacity: 1, // Should likely be 1
    status: { label: "Бэлэн", value: "available", color: "#198754" },
    amenities: "Жакуз, Шүршүүр, Mini-Bar", // Amenities might not match single room
    price: 100,
    area: 35,
    description: "Another cozy single room.",
    otherOptions: ["late-checkout"]
  },
  {
    id: 9,
    roomNumber: "231", // Duplicate room number
    roomType: "Deluxe king",
    floor: "Д-31",
    bedType: "King size bed", // Mismatch with room type?
    capacity: 2,
    status: { label: "Бохир", value: "dirty", color: "#dc3545" },
    amenities: "Queen Size, Шүршүүр",
    price: 220,
    area: 75,
    description: "A deluxe king room offering luxury.",
    otherOptions: ["spa"]
  },
  {
    id: 10,
    roomNumber: "675", // Duplicate room number
    roomType: "Superior king",
    floor: "Д-02",
    bedType: "King size bed", // Mismatch with room type?
    capacity: 2,
    status: { label: "Захиалсан", value: "booked", color: "#ffc107" },
    amenities: "Double Bed, Жакуз, Шүршүүр",
    price: 190,
    area: 65,
    description: "A superior king room with premium amenities.",
    otherOptions: []
  },
];

export type Room = (typeof rooms)[0];
