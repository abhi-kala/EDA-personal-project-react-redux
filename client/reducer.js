const INITIAL_STATE = {
  selectedDay: null,
  selectedLocation: null,
  selectedDuration: null,
  selectedJob: null,
  jobs:[
    { id:1, title: "IT Assistance", day: "Monday", money: 80, location: "Parnell", duration: "2" },
    { id:2, title: "Promo Staff", day: "Friday", money: 100, location: "Britomart", duration: "4" },
    { id:3, title: "Leaflet drop", day: "Friday", money: 90, location: "Ponsonby", duration: "4" },
    { id:4, title: "Finance tutor needed", day: "Monday", money: 90, location: "Mission Bay", duration: "3" },
    { id:5, title: "Usher for promo event needed", day: "Saturday", money: 200, location: "Britomart", duration: "5" },
    { id:6, title: "Night club work", day: "Saturday", money: 80, location: "Britomart", duration: "4" },
    { id:7, title: "Cafe work", day: "Saturday", money: 120, location: "Remeuera", duration: "6" }
  ]
}

export default (state = INITIAL_STATE, action) => {
  return state
}