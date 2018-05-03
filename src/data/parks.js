const Parks = [
  {
    id: 1,
    name: 'Brecknock County Park',
    address: {
      streetAddress: '80 Old Camden Rd',
      city: 'Camden',
      state: 'DE',
      zipCode: 19934,
      country: 'US',
    },
    location: {
      latitude: 39.1225035,
      longitude: -75.53542279999999,
    },
    category: ['Family', 'Sport'],
    activity: ['Hiking', 'Biking', 'Picnic', 'Fitness'],
    description:
      'The land which now includes Brecknock Park was first granted to Alexander Humphrey in 1680. The proximity to the Isaac Branch water source provided the opportunity for milling operations. Owners such as John Clayton Jr. and the partnership of Joshua Gregg and Thomas Hanson operated a grain mill on the property. In 1812, Thomas Hanson Howell, a grandson of the previous owner, obtained title to the property. Mill operations continued with changes made in machinery as technology advanced. Descendants of the Howell family owned the property until the late twentieth century.',
    amenities: [
      'Public Restroom',
      'Playground',
      'Horseshoes',
      'Nature Trail',
      'Walking Trail',
      'Sand Volleyball',
      'Pavilion',
      'Softball Fields',
      'Multi-Purpose Fields',
      'Picnic Area',
      'Outdoor Grill',
      'Nature Center',
      'Fitness Area',
      'Bike Rack',
      'Field Rentals',
      'Stage',
    ],
    contactInformation: {
      manager: 'Michael S. Rigby',
      phone: '+1 (302) 744-2495',
      email: 'ParksRec@co.kent.de.us',
      officeHours: '8:00 A.M. - 5:00 P.M.  Mon. - Fri.',
      officeName: 'Kent County Recreation Center',
      address: {
        streetAddress: '1683 New Burton Road',
        city: 'Dover',
        state: 'DE',
        zipCode: 19904,
        country: 'US',
      },
    },
    website:
      'http://www.co.kent.de.us/parks-recreation/brecknock-county-park.aspx',
    workingHours: [
      {
        day: 'Monday',
        openTime: '6:00 AM',
        closeTime: '8:00 PM',
      },
      {
        day: 'Tuesday',
        openTime: '6:00 AM',
        closeTime: '8:00 PM',
      },
      {
        day: 'Wednesday',
        openTime: '6:00 AM',
        closeTime: '8:00 PM',
      },
      {
        day: 'Thursday',
        openTime: '6:00 AM',
        closeTime: '8:00 PM',
      },
      {
        day: 'Friday',
        openTime: '6:00 AM',
        closeTime: '8:00 PM',
      },
      {
        day: 'Saturday',
        openTime: '6:00 AM',
        closeTime: '8:00 PM',
      },
      {
        day: 'Sunday',
        openTime: '6:00 AM',
        closeTime: '8:00 PM',
      },
    ],
    mainImageUrl: 'https://cdn.parkdetective.org/img/park1-main.jpg',
    imagesUrls: [
      'https://cdn.parkdetective.org/img/park1-1.jpg',
      'https://cdn.parkdetective.org/img/park1-2.jpg',
      'https://cdn.parkdetective.org/img/park1-3.jpg',
      'https://cdn.parkdetective.org/img/park1-4.jpg',
    ],
  },
];

export default Parks;
