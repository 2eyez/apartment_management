const apartments = [
  {
    id: 1,
    type: "2 Bedroom",
    location: "Maitama",
    address: "12 Maitama Road, Abuja",
    listedBy: "PrimeNest Properties",
    price: 50000,
    discountPrice: 45000,
    maxAdults: 4,
    maxChildren: 2,
    rating: 4.2,
    images: [
      "/images/Apt1.jpeg",
      "/images/Apt7.jpeg",
      "/images/Apt4.jpeg",
      "/images/Apt2.jpeg",
      "/images/Apt3.jpeg",
    ],
    amenities: [
      { icon: "ri-wifi-line", label: "Wi-Fi" },
      { icon: "ri-fridge-line", label: "Air Conditioning" },
      { icon: "ri-tv-line", label: "Smart TV" },
      { icon: "ri-parking-box-line", label: "Parking" },
      { icon: "ri-restaurant-line", label: "Kitchen" },
      { icon: "ri-shield-check-line", label: "Security" }
    ],
    rules: [
      "Check-in from 2:00 PM",
      "Check-out by 12:00 PM",
      "No smoking inside the apartment",
      "No parties or events",
      "Pets are not allowed",
      "Valid ID required at check-in"
    ],
    discounts: [
      { start: "2026-02-14", end: "2026-02-20", price: 40000 },
      { start: "2026-12-20", end: "2026-12-31", price: 42000 }
    ]
  },
  {
    id: 2,
    type: "3 Bedroom",
    location: "Lekki Phase 1",
    address: "24 Lekki Road, Lagos",
    listedBy: "LuxeLiving Realty",
    price: 60000,
    discountPrice: 55000,
    maxAdults: 3,
    maxChildren: 2,
    rating: 3.8,
    images: [
      "/images/Apt2.jpeg",
      "/images/Apt8.jpeg",
      "/images/Apt3.jpeg",
      "/images/Apt7.jpeg",
      "/images/Apt1.jpeg",
    ],
    amenities: [
      { icon: "ri-wifi-line", label: "Wi-Fi" },
      { icon: "ri-fridge-line", label: "Air Conditioning" },
      { icon: "ri-tv-line", label: "Smart TV" },
      { icon: "ri-parking-box-line", label: "Parking" }
    ],
    rules: [
      "Check-in from 3:00 PM",
      "Check-out by 11:00 AM",
      "No parties or events",
      "Pets allowed on request",
      "Valid ID required at check-in"
    ],
    discounts: [
      { start: "2026-03-01", end: "2026-03-10", price: 50000 }
    ]
  },
  {
    id: 3,
    type: "4 Bedroom Penthouse",
    location: "Jabi",
    address: "18 Jabi Lake Road, Abuja",
    listedBy: "Skyline Estates",
    price: 120000,
    discountPrice: 110000,
    maxAdults: 6,
    maxChildren: 3,
    rating: 4.7,
    images: [
      "/images/Apt6.jpeg",
      "/images/Apt2.jpeg",
      "/images/Apt5.jpeg",
      "/images/Apt1.jpeg",
      "/images/Apt3.jpeg",
      "/images/Apt4.jpeg",
    ],
    amenities: [
      { icon: "ri-wifi-line", label: "Wi-Fi" },
      { icon: "ri-fridge-line", label: "Air Conditioning" },
      { icon: "ri-tv-line", label: "Smart TV" }
    ],
    rules: [
      "Check-in from 1:00 PM",
      "Check-out by 12:00 PM",
      "No smoking inside the apartment"
    ],
    discounts: []
  },
  {
    id: 4,
    type: "Studio Apartment",
    location: "Ikoyi",
    address: "45 Ikoyi Road, Lagos",
    listedBy: "UrbanStay Homes",
    price: 40000,
    maxAdults: 2,
    maxChildren: 1,
    rating: 0,
    images: [
      "/images/Apt6.jpeg",
      "/images/Apt2.jpeg",
      "/images/Apt5.jpeg",
      "/images/Apt1.jpeg",
      "/images/Apt3.jpeg",
      "/images/Apt4.jpeg",
    ],
    amenities: [
      { icon: "ri-wifi-line", label: "Wi-Fi" },
      { icon: "ri-fridge-line", label: "Air Conditioning" },
      { icon: "ri-parking-box-line", label: "Parking" }
    ],
    rules: [
      "Check-in from 2:00 PM",
      "Check-out by 11:00 AM",
      "No parties"
    ],
    discounts: [
      { start: "2026-05-01", end: "2026-05-07", price: 35000 }
    ]
  },
  {
    id: 5,
    type: "2 Bedroom",
    location: "Garki",
    address: "10 Garki Road, Abuja",
    listedBy: "Capital City Rentals",
    price: 55000,
    discountPrice: 50000,
    maxAdults: 4,
    maxChildren: 2,
    rating: 0,
    images: [
      "/images/Apt1.jpeg",
      "/images/Apt2.jpeg",
      "/images/Apt3.jpeg",
    ],
    amenities: [
      { icon: "ri-wifi-line", label: "Wi-Fi" },
      { icon: "ri-fridge-line", label: "Air Conditioning" }
    ],
    rules: [
      "Check-in from 2:00 PM",
      "Check-out by 12:00 PM"
    ],
    discounts: []
  },
  {
    id: 6,
    type: "3 Bedroom Penthouse",
    location: "Victoria Island",
    address: "20 Victoria Island, Lagos",
    listedBy: "EliteEdge Properties",
    price: 90000,
    discountPrice: 85000,
    maxAdults: 5,
    maxChildren: 2,
    rating: 4.0,
    images: [
      "/images/Apt4.jpeg",
      "/images/Apt5.jpeg",
      "/images/Apt6.jpeg",
    ],
    amenities: [
      { icon: "ri-wifi-line", label: "Wi-Fi" },
      { icon: "ri-fridge-line", label: "Air Conditioning" },
      { icon: "ri-tv-line", label: "Smart TV" },
      { icon: "ri-parking-box-line", label: "Parking" }
    ],
    rules: [
      "Check-in from 3:00 PM",
      "Check-out by 11:00 AM"
    ],
    discounts: []
  },
  {
    id: 7,
    type: "1 Bedroom",
    location: "Asokoro",
    address: "5 Asokoro Street, Abuja",
    listedBy: "Prestige Apartments Ltd",
    price: 30000,
    maxAdults: 2,
    maxChildren: 0,
    rating: 0,
    images: [
      "/images/Apt7.jpeg",
      "/images/Apt8.jpeg"
    ],
    amenities: [
      { icon: "ri-wifi-line", label: "Wi-Fi" },
      { icon: "ri-fridge-line", label: "Air Conditioning" }
    ],
    rules: [
      "Check-in from 2:00 PM",
      "Check-out by 11:00 AM"
    ],
    discounts: []
  },
  {
    id: 8,
    type: "2 Bedroom",
    location: "Maitama",
    address: "12 Maitama Road, Abuja",
    listedBy: "PrimeNest Properties",
    price: 50000,
    discountPrice: 45000,
    maxAdults: 4,
    maxChildren: 2,
    rating: 4.2,
    images: [
      "/images/Apt1.jpeg",
      "/images/Apt7.jpeg",
      "/images/Apt4.jpeg",
      "/images/Apt2.jpeg",
      "/images/Apt3.jpeg",
    ],
    amenities: [
      { icon: "ri-wifi-line", label: "Wi-Fi" },
      { icon: "ri-fridge-line", label: "Air Conditioning" },
      { icon: "ri-tv-line", label: "Smart TV" },
      { icon: "ri-parking-box-line", label: "Parking" },
      { icon: "ri-restaurant-line", label: "Kitchen" },
      { icon: "ri-shield-check-line", label: "Security" }
    ],
    rules: [
      "Check-in from 2:00 PM",
      "Check-out by 12:00 PM",
      "No smoking inside the apartment",
      "No parties or events",
      "Pets are not allowed",
      "Valid ID required at check-in"
    ],
    discounts: [
      { start: "2026-02-14", end: "2026-02-20", price: 40000 },
      { start: "2026-12-20", end: "2026-12-31", price: 42000 }
    ]
  },
];

export default apartments;