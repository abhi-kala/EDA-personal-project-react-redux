export const INITIAL_STATE = {
  selectedMenu: 1,
  selectedDay: null,
  selectedLocation: null,
  selectedDuration: null,
  selectedJob: 0,
  searchString:'',
  menu:[
    {id:1, title: "Jobs Listings"},
    {id:2, title: "Add Job"}
  ],
  jobs:[
    {
      id:1,
      title: "IT Assistance",
      day: "Monday",
      money: 80, location: "Parnell", duration: "2",
      description: "This is the best job in the world" },
    {
      id:2,
      title: "Promo Staff",
      day: "Friday",
      money: 100,
      location: "Britomart", duration: "4",
      description: "This is the best job in the world" },
    {
      id:3,
      title: "Leaflet drop",
      day: "Friday",
      money: 90,
      location: "Ponsonby",
      duration: "4",
      description: "This is the best job in the world" },
    {
      id:4,
      title: "Finance tutor needed",
      day: "Monday",
      money: 90,
      location: "Mission Bay",
      duration: "3",
      description: "This is the best job in the world" },
    {
      id:5,
      title: "Usher for promo event needed",
      day: "Saturday",
      money: 200,
      location: "Britomart",
      duration: "5",
      description: "This is the best job in the world" },
    {
      id:6,
      title: "Night club work",
      day: "Saturday",
      money: 80,
      location: "Britomart",
      duration: "4",
      description: "This is the best job in the world" },
    {
      id:7,
      title: "Cafe work",
      day: "Saturday",
      money: 120,
      location: "Remeuera",
      duration: "6",
      description: "This is the best job in the world" }
  ]
}
