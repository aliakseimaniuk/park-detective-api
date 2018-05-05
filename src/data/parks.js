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
    mainImageUrl:
      'https://raw.githubusercontent.com/aliakseimaniuk/park-detective-api/develop/src/public/images/category-box-01.jpg',
    imagesUrls: [
      'https://cdn.parkdetective.org/img/park1-1.jpg',
      'https://cdn.parkdetective.org/img/park1-2.jpg',
      'https://cdn.parkdetective.org/img/park1-3.jpg',
      'https://cdn.parkdetective.org/img/park1-4.jpg',
    ],
  },
  {
    id: 2,
    name: 'Big Oak County Park',
    address: {
      streetAddress: '417 Big Oak Rd',
      city: 'Smyrna',
      state: 'DE',
      zipCode: 19977,
      country: 'US',
    },
    location: {
      latitude: 39.280369104000044,
      longitude: -75.58586471599995,
    },
    category: ['Family', 'Sport', 'Nature', 'Adventure', 'Fun'],
    activity: ['Biking', 'Fitness', 'Baseball'],
    description:
      'Big Oak County Park is a ninety acre site bordered on the west and north by SR1 (Exit 114 – South Smyrna Exit) and on the south by Big Oak Road (C.R. 325). It includes forty acres leased to the Delaware Aero Space Education Foundation for Space and Earth Science education and recreation. The location of the DASEF facility and Big Oak County Park’s free public access recreation and conservation demonstration areas make it a major regional outdoor destination.',
    amenities: [
      'Public Restroom',
      'Playground',
      'Walking Trail',
      'Pavilion',
      'Softball Fields',
      'Multi-Purpose Fields',
      'Picnic Area',
      'Outdoor Grill',
      'Bike Rack',
      'Field Rentals',
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
      'http://www.co.kent.de.us/parks-recreation/big-oak-county-park.aspx',
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
    mainImageUrl:
      'https://raw.githubusercontent.com/aliakseimaniuk/park-detective-api/develop/src/public/images/category-box-01.jpg',
    imagesUrls: [
      'https://cdn.parkdetective.org/img/park1-1.jpg',
      'https://cdn.parkdetective.org/img/park1-2.jpg',
      'https://cdn.parkdetective.org/img/park1-3.jpg',
      'https://cdn.parkdetective.org/img/park1-4.jpg',
    ],
  },
  {
    id: 3,
    name: 'Brown Branch County Park',
    address: {
      streetAddress: '1215 Killens Pond Rd',
      city: 'Harrington',
      state: 'DE',
      zipCode: 19952,
      country: 'US',
    },
    location: {
      latitude: 38.95181242700005,
      longitude: -75.52280184399996,
    },
    category: ['Family', 'Sport', 'Nature', 'Adventure', 'Fun'],
    activity: [
      'Biking',
      'Baseball',
      'Volleyball',
      'Soccer',
      'Horseshoes',
      'Picnic',
      'Hiking',
    ],
    description:
      'Browns Branch includes 38 acres of forested floodplain and 40 acres of former tilled uplands, with the latter being converted to active recreation such as baseball and soccer fields, volleyball, horseshoe, picnicking, and a youth (ages 2 through 12) playground. A mature evergreen buffer and roadside hardwood buffer have been established on the perimeter of the active recreation areas. The landscape of Kent County’s newest park is intended to provide a public site for recreation and leisure services more typical of regional parks. Along with active recreation, Browns Branch was designed to support the quiet, passive recreation and conservation elements of regional recreation pursuits such as hiking, birding, and personal solitude. A beautiful walking trail has been established which interacts with a uniquely designed wetland boardwalk. This trail terminates in a charming and picturesque public picnic area.',
    amenities: [
      'Public Restroom',
      'Playground',
      'Horseshoes',
      'Nature Trail',
      'Walking Trail',
      'Sand Volleyball',
      'Softball Fields',
      'Multi-Purpose Fields',
      'Picnic Area',
      'Outdoor Grill',
      'Bike Rack',
      'Field Rentals',
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
      'http://www.co.kent.de.us/parks-recreation/browns-branch-county-park.aspx',
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
    mainImageUrl:
      'https://raw.githubusercontent.com/aliakseimaniuk/park-detective-api/develop/src/public/images/category-box-01.jpg',
    imagesUrls: [
      'https://cdn.parkdetective.org/img/park1-1.jpg',
      'https://cdn.parkdetective.org/img/park1-2.jpg',
      'https://cdn.parkdetective.org/img/park1-3.jpg',
      'https://cdn.parkdetective.org/img/park1-4.jpg',
    ],
  },
  {
    id: 4,
    name: 'Lebanon Landing County Park',
    address: {
      streetAddress: '1400 Sorghum Mill Rd',
      city: 'Dover',
      state: 'DE',
      zipCode: 19901,
      country: 'US',
    },
    location: {
      latitude: 39.11436628900003,
      longitude: -75.49945556099993,
    },
    category: ['Family', 'Sport', 'Fun'],
    activity: ['Fishing', 'Boating', 'Picnic'],
    description:
      'Lebanon Landing Fishing, Boating Access and Recreation Area, administered by Kent County Levy Court for your use and enjoyment. This beautiful picnicking, boating, and fishing area offers enjoyment for young and old and all in-between.',
    amenities: ['Picnic Area', 'Bike Rack', 'Fishing Pier', 'Boating Ramp'],
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
      'http://www.co.kent.de.us/parks-recreation/lebanon-landing-county-park.aspx',
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
    mainImageUrl:
      'https://raw.githubusercontent.com/aliakseimaniuk/park-detective-api/develop/src/public/images/category-box-01.jpg',
    imagesUrls: [
      'https://cdn.parkdetective.org/img/park1-1.jpg',
      'https://cdn.parkdetective.org/img/park1-2.jpg',
      'https://cdn.parkdetective.org/img/park1-3.jpg',
      'https://cdn.parkdetective.org/img/park1-4.jpg',
    ],
  },
  {
    id: 5,
    name: 'Tidbury Creek Country Park',
    address: {
      streetAddress: '2233 South State Street',
      city: 'Dover',
      state: 'DE',
      zipCode: 19901,
      country: 'US',
    },
    location: {
      latitude: 39.113946198000065,
      longitude: -75.51322962599994,
    },
    category: ['Family', 'Fun', 'Romance'],
    activity: ['Hiking', 'Biking', 'Picnic', 'Fishing', 'Dog'],
    description:
      'Tidbury Creek County Park offers picnic tables, grills, playground and a park dedicated to dogs. Explore the half -mile walking trail around the pond for dogs on leashes, hoses for water bowls and two fenced areas for dogs large and small to run and play unleashed. There is no admission fee and the park is open from dawn to dusk. ',
    amenities: [
      'Playground',
      'Nature Trail',
      'Pavilion',
      'Picnic Area',
      'Outdoor Grill',
      'Nature Center',
      'Fitness Area',
      'Bike Rack',
      'Fishing Pond',
      'Dog Park',
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
      'http://www.co.kent.de.us/parks-recreation/tidbury-creek-county-park.aspx',
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
    mainImageUrl: 'https://raw.githubusercontent.com/aliakseimaniuk/park-detective-api/develop/src/public/images/category-box-01.jpg',
    imagesUrls: [
      'https://cdn.parkdetective.org/img/park1-1.jpg',
      'https://cdn.parkdetective.org/img/park1-2.jpg',
      'https://cdn.parkdetective.org/img/park1-3.jpg',
      'https://cdn.parkdetective.org/img/park1-4.jpg',
    ],
  },
];

export default Parks;
