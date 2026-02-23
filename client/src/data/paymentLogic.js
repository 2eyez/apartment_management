// src/paymentLogic.js
import apartments from "./apartments";

// Fetch apartment by ID
export async function fetchApartment(id) {
  const aptId = parseInt(id, 10);
  return apartments.find((apt) => apt.id === aptId) || null;
}

// Simulate payment processing
export function processPayment(apartment) {
  alert(`Processing payment for ${apartment.location} ₦${apartment.price.toLocaleString()}`);
}