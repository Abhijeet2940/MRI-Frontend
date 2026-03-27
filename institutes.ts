export interface Institute {
  id: string;
  name: string;
  description: string;
  highlighted?: boolean;
  fullDescription?: string;
  established: number;
  location: string;
  facilities: string[];
  contact: {
    phone: string;
    address: string;
    email: string;
  };
  welfareInspector: {
    name: string;
    email: string;
  };
  secretary: {
    name: string;
    phone: string;
  };
  terms: string[];
  images?: string[];
}

export const institutes: Institute[] = [
  {
    id: "malda",
    name: "Malda Railway Institute",
    description:
      "Established in 1910, Malda Railway Institute is the main institute under the Malda Division, hosting cultural events and auditorium programs for railway families.",
    fullDescription:
      "Malda Railway Institute, located in Malda under Eastern Railway, is a well-established facility dedicated to promoting cultural, recreational, and community-oriented activities for railway employees and their families. It features a spacious auditorium, meeting hall, and other amenities ideal for hosting official programs, social gatherings, and cultural events.\n\nOver time, the institute has become a vibrant center for departmental functions, national celebrations, and talent showcases by railway staff and their families. Its accessible location, organized premises, and supportive environment make it a valuable venue for both formal and informal occasions.",
    established: 1910,
    location: "Malda",
    facilities: ["A huge ground/lawn area in front.", "A big hall with a stage attached.", "A corridor in front of Institute.", "A Corridor in Back of Institute", "A Corridor in Side of Institute", "Separate Washrooms for Male and Female.", "Changing Room."],
    contact: {
      phone: "+91 9002-079941",
      address: "SONARPUR RAILWAY COLONY, SONARPUR, KOLKATA - 700150",
      email: "bagp91362@gmail.com"
    },
    welfareInspector: {
      name: "P.K. Roy",
      email: "roypkj@gmail.com"
    },
    secretary: {
      name: "P.K. Bagh",
      phone: "+91 9002-079941"
    },
    terms: [
      "The allotment timing of the Sealdah Institute hall/premises is from 07:00 hrs on the date of allotment to 07:00 hrs the following day. Allottees must adhere strictly to these timings.",
      "The managing committee is not responsible for any loss or theft of personal belongings of the occupants.",
      "Electricity for extra lighting or external hall lighting must be arranged separately by the allottee.",
      "Sticking posters anywhere on the premises is strictly prohibited. Any defacement will be charged to the allottee.",
      "Consumption of alcoholic drinks, drugs, and playing cards is strictly prohibited within the institute premises.",
      "The allottee is responsible for all institute property (including chairs and tables). Any damage or breakage will be recovered from the allottee.",
      "Only the function mentioned in the application form may be conducted. No additional or unrelated functions are permitted.",
      "Subletting or misusing the premises for any purpose other than that stated will lead to cancellation and forfeiture of the security deposit under D&A Rules.",
      "Allottees must inspect the facilities well in advance and ensure all required arrangements are in place prior to their event.",
      "In case of non-supply or short supply of electricity/water by the railway authority, the allottee must make their own arrangements. The managing committee shall not be held responsible.",
      "No contract exists for electrical or stage decoration. All expenses for such arrangements must be borne by the allottee.",
      "The managing committee does not provide private security. Allottees must arrange their own security personnel if needed.",
      "Allottees are advised to secure their belongings. Use of personal locks for rooms during the event is recommended.",
      "Loudspeakers or DJ systems are strictly prohibited after 22:00 hrs outside the hall and after 23:00 hrs inside the hall.",
      "Blasting or use of firecrackers is strictly prohibited within Sealdah Institute premises."
    ],
    images: [
      "https://lightgoldenrodyellow-leopard-162857.hostingersite.com/wp-content/uploads/2025/08/5-3-1024x1024.png",
      "https://lightgoldenrodyellow-leopard-162857.hostingersite.com/wp-content/uploads/2025/08/2-3-1024x1024.png"
    ],
    highlighted: true,
  },
  {
    id: "sahibganj",
    name: "Sahibganj Railway Institute",
    description:
      "Sahibganj Railway Institute serves the railway community with its auditorium, facilitating cultural programs and official events in the Sahibganj area.",
    fullDescription:
      "Sahibganj Railway Institute, located in Sahibganj under Eastern Railway, is a well-established facility dedicated to promoting cultural, recreational, and community-oriented activities for railway employees and their families. It features a spacious auditorium, meeting hall, and other amenities ideal for hosting official programs, social gatherings, and cultural events.\n\nOver time, the institute has become a vibrant center for departmental functions, national celebrations, and talent showcases by railway staff and their families. Its accessible location, organized premises, and supportive environment make it a valuable venue for both formal and informal occasions.",
    established: 1920,
    location: "Sahibganj",
    facilities: ["A huge ground/lawn area in front.", "A big hall with a stage attached.", "A corridor in front of Institute.", "A Corridor in Back of Institute", "A Corridor in Side of Institute", "Separate Washrooms for Male and Female.", "Changing Room."],
    contact: {
      phone: "+91 9002-079941",
      address: "SONARPUR RAILWAY COLONY, SONARPUR, KOLKATA - 700150",
      email: "bagp91362@gmail.com"
    },
    welfareInspector: {
      name: "P.K. Roy",
      email: "roypkj@gmail.com"
    },
    secretary: {
      name: "P.K. Bagh",
      phone: "+91 9002-079941"
    },
    terms: [
      "The allotment timing of the Sealdah Institute hall/premises is from 07:00 hrs on the date of allotment to 07:00 hrs the following day. Allottees must adhere strictly to these timings.",
      "The managing committee is not responsible for any loss or theft of personal belongings of the occupants.",
      "Electricity for extra lighting or external hall lighting must be arranged separately by the allottee.",
      "Sticking posters anywhere on the premises is strictly prohibited. Any defacement will be charged to the allottee.",
      "Consumption of alcoholic drinks, drugs, and playing cards is strictly prohibited within the institute premises.",
      "The allottee is responsible for all institute property (including chairs and tables). Any damage or breakage will be recovered from the allottee.",
      "Only the function mentioned in the application form may be conducted. No additional or unrelated functions are permitted.",
      "Subletting or misusing the premises for any purpose other than that stated will lead to cancellation and forfeiture of the security deposit under D&A Rules.",
      "Allottees must inspect the facilities well in advance and ensure all required arrangements are in place prior to their event.",
      "In case of non-supply or short supply of electricity/water by the railway authority, the allottee must make their own arrangements. The managing committee shall not be held responsible.",
      "No contract exists for electrical or stage decoration. All expenses for such arrangements must be borne by the allottee.",
      "The managing committee does not provide private security. Allottees must arrange their own security personnel if needed.",
      "Allottees are advised to secure their belongings. Use of personal locks for rooms during the event is recommended.",
      "Loudspeakers or DJ systems are strictly prohibited after 22:00 hrs outside the hall and after 23:00 hrs inside the hall.",
      "Blasting or use of firecrackers is strictly prohibited within Sealdah Institute premises."
    ],
    images: [
      "https://lightgoldenrodyellow-leopard-162857.hostingersite.com/wp-content/uploads/2025/08/5-3-1024x1024.png",
      "https://lightgoldenrodyellow-leopard-162857.hostingersite.com/wp-content/uploads/2025/08/2-3-1024x1024.png"
    ],
  },
  {
    id: "bhagalpur",
    name: "Bhagalpur Railway Institute",
    description:
      "Bhagalpur Railway Institute is a prominent centre for railway personnel, featuring an auditorium that supports cultural activities and community events.",
    fullDescription:
      "Bhagalpur Railway Institute, located in Bhagalpur under Eastern Railway, is a well-established facility dedicated to promoting cultural, recreational, and community-oriented activities for railway employees and their families. It features a spacious auditorium, meeting hall, and other amenities ideal for hosting official programs, social gatherings, and cultural events.\n\nOver time, the institute has become a vibrant center for departmental functions, national celebrations, and talent showcases by railway staff and their families. Its accessible location, organized premises, and supportive environment make it a valuable venue for both formal and informal occasions.",
    established: 1925,
    location: "Bhagalpur",
    facilities: ["A huge ground/lawn area in front.", "A big hall with a stage attached.", "A corridor in front of Institute.", "A Corridor in Back of Institute", "A Corridor in Side of Institute", "Separate Washrooms for Male and Female.", "Changing Room."],
    contact: {
      phone: "+91 9002-079941",
      address: "SONARPUR RAILWAY COLONY, SONARPUR, KOLKATA - 700150",
      email: "bagp91362@gmail.com"
    },
    welfareInspector: {
      name: "P.K. Roy",
      email: "roypkj@gmail.com"
    },
    secretary: {
      name: "P.K. Bagh",
      phone: "+91 9002-079941"
    },
    terms: [
      "The allotment timing of the Sealdah Institute hall/premises is from 07:00 hrs on the date of allotment to 07:00 hrs the following day. Allottees must adhere strictly to these timings.",
      "The managing committee is not responsible for any loss or theft of personal belongings of the occupants.",
      "Electricity for extra lighting or external hall lighting must be arranged separately by the allottee.",
      "Sticking posters anywhere on the premises is strictly prohibited. Any defacement will be charged to the allottee.",
      "Consumption of alcoholic drinks, drugs, and playing cards is strictly prohibited within the institute premises.",
      "The allottee is responsible for all institute property (including chairs and tables). Any damage or breakage will be recovered from the allottee.",
      "Only the function mentioned in the application form may be conducted. No additional or unrelated functions are permitted.",
      "Subletting or misusing the premises for any purpose other than that stated will lead to cancellation and forfeiture of the security deposit under D&A Rules.",
      "Allottees must inspect the facilities well in advance and ensure all required arrangements are in place prior to their event.",
      "In case of non-supply or short supply of electricity/water by the railway authority, the allottee must make their own arrangements. The managing committee shall not be held responsible.",
      "No contract exists for electrical or stage decoration. All expenses for such arrangements must be borne by the allottee.",
      "The managing committee does not provide private security. Allottees must arrange their own security personnel if needed.",
      "Allottees are advised to secure their belongings. Use of personal locks for rooms during the event is recommended.",
      "Loudspeakers or DJ systems are strictly prohibited after 22:00 hrs outside the hall and after 23:00 hrs inside the hall.",
      "Blasting or use of firecrackers is strictly prohibited within Sealdah Institute premises."
    ],
    images: [
      "https://lightgoldenrodyellow-leopard-162857.hostingersite.com/wp-content/uploads/2025/08/5-3-1024x1024.png",
      "https://lightgoldenrodyellow-leopard-162857.hostingersite.com/wp-content/uploads/2025/08/2-3-1024x1024.png"
    ],
  },
];

export const getInstituteById = (id: string): Institute | undefined => {
  return institutes.find((inst) => inst.id === id);
};
