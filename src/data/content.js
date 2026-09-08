// ============================================================================
// All editable invitation content lives in this single file.
// Change names, dates, times, phone numbers or wording here —
// you do NOT need to touch any component file.
// ============================================================================

export const mandal = {
  shortName: 'BJP',
  fullName: 'Bappa Janta Party',
};

export const family = {
  name: 'Vaishya Family',
};

export const invitationDates = {
  hindi: '14 सितंबर – 18 सितंबर',
  english: '14 September – 18 September',
};

export const organizers = [
  { image: '/images/image2.jpg', nameHi: 'श्रीमती प्रिया केसरवानी', nameEn: 'Ms. Priya Kesarwani' },
  { image: '/images/image3.jpg', nameHi: 'श्री हर्ष वैश्य', nameEn: 'Mr. Harsh Vaishya' },
  { image: '/images/image4.jpg', nameHi: 'श्री संस्कार वैश्य', nameEn: 'Mr. Sanskar Vaishya' },
];

export const location = {
  nameHi: 'चोखेलाल वैश्य निवास',
  nameEn: 'Chokhelal Vaishya Niwas',
  // Optional full postal address (street, area, pincode). Leave empty
  // to skip this line — nothing is invented if you don't fill it in.
  address: '',
  // If you have an exact Google Maps share link, paste it here — the
  // "Open Maps" button will use it directly. Leave empty and the
  // button will fall back to a plain text search for the name above
  // (see README.md for instructions).
  mapsUrl: '',
};

export const contact = {
  name: 'संस्कार वैश्य (Sanskar Vaishya)',
  phoneDisplay: '+91 87797 29929',
  phoneTel: '+918779729929',
  whatsappUrl: 'https://wa.me/918779729929',
};

// Five-day program. `event: null` days are shown lightly (general darshan)
// instead of an empty card, per the family's request.
export const timeline = [
  {
    day: 1,
    date: '14 सितंबर',
    dateEn: '14 Sept',
    events: [{ titleHi: 'गणपति स्थापना', titleEn: 'Ganpati Sthapana', timeHi: 'सुबह 9:00 बजे', timeEn: '9:00 AM' }],
  },
  {
    day: 2,
    date: '15 सितंबर',
    dateEn: '15 Sept',
    events: [],
    note: 'दर्शन एवं स्वागत',
    noteEn: 'General darshan — all are welcome',
  },
  {
    day: 3,
    date: '16 सितंबर',
    dateEn: '16 Sept',
    events: [{ titleHi: 'महाआरती', titleEn: 'Maha Aarti', timeHi: 'रात्रि 8:00 बजे', timeEn: '8:00 PM' }],
  },
  {
    day: 4,
    date: '17 सितंबर',
    dateEn: '17 Sept',
    events: [
      { titleHi: 'सत्यनारायण पूजा', titleEn: 'Satyanarayan Puja', timeHi: 'सुबह 11:00 बजे', timeEn: '11:00 AM' },
      { titleHi: 'महाप्रसाद', titleEn: 'Maha Prasad', timeHi: 'रात्रि 8:00 बजे', timeEn: '8:00 PM' },
    ],
  },
  {
    day: 5,
    date: '18 सितंबर',
    dateEn: '18 Sept',
    events: [{ titleHi: 'गणपति विसर्जन', titleEn: 'Ganpati Visarjan', timeHi: 'शाम 7:00 बजे', timeEn: '7:00 PM' }],
  },
];

export const gallery = [
  { image: '/images/image5.jpg', ratio: 'landscape', altHi: 'गणपति उत्सव की झलक', altEn: 'Ganpati celebration glimpse' },
  { image: '/images/image6.jpg', ratio: 'portrait', altHi: 'गणपति उत्सव की झलक', altEn: 'Ganpati celebration glimpse' },
  { image: '/images/image7.jpg', ratio: 'portrait', altHi: 'गणपति उत्सव की झलक', altEn: 'Ganpati celebration glimpse' },
  { image: '/images/image8.jpg', ratio: 'portrait', altHi: 'गणपति उत्सव की झलक', altEn: 'Ganpati celebration glimpse' },
  { image: '/images/image9.jpg', ratio: 'portrait', altHi: 'गणपति उत्सव की झलक', altEn: 'Ganpati celebration glimpse' },
];

export const footer = {
  craftedByHi: 'हर्ष वैश्य द्वारा निर्मित',
  craftedByEn: 'Crafted by Harsh Vaishya',
};
