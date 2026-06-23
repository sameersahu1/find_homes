// Central business configuration - update in one place
export const BUSINESS = {
  name: 'Find Homes',
  tagline: 'Sales, Renting and Fresh Booking in Noida and Greater Noida',
  shortTagline: 'Fresh Booking Specialists',

  // Contact
  phone: '98999185715',
  phoneDisplay: '+91 98999 185715',
  phoneDisplayShort: '98999 185715',
  phoneWa: '9198999185715',

  email: 'findhomes104@gmail.com',

  address: {
    line1: 'F-43, 5th Floor, Urbtech NPX',
    line2: 'Sector-153, Noida 201310',
    full: 'F-43, 5th Floor, Urbtech NPX, Sector-153, Noida 201310',
    landmark: 'Urbtech NPX, Sector 153',
  },

  whatsappMessage:
    'Hi Find Homes, I am interested in fresh bookings / properties in Noida and Greater Noida. Please share more details.',

  // Legal
  foundedYear: 2012,
};

export const waLink = (msg?: string) =>
  `https://wa.me/${BUSINESS.phoneWa}?text=${encodeURIComponent(
    msg || BUSINESS.whatsappMessage
  )}`;
