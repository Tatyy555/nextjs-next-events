export const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Concert in the Park",
    description:
      "Join us for a night of live music and entertainment in the local park.",
    location: "Central Park",
    date: "2022/06/12",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Wien_-_Sommernachtskonzert_2019.JPG/600px-Wien_-_Sommernachtskonzert_2019.JPG",
    isFeatured: true,
  },
  {
    id: "e2",
    title: "Art Walk",
    description:
      "Explore the local art scene and discover new artists at our monthly art walk event.",
    location: "Downtown",
    date: "2022/05/15",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/San_Francisco_from_the_Marin_Headlands_in_August_2022.jpg/1600px-San_Francisco_from_the_Marin_Headlands_in_August_2022.jpg",
    isFeatured: false,
  },
  {
    id: "e3",
    title: "Food Festival",
    description:
      "Sample delicious food from local restaurants and vendors at our annual food festival.",
    location: "Main Street",
    date: "2022/07/10",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Pongal_fest.jpg",
    isFeatured: true,
  },
  {
    id: "e4",
    title: "Book Club Meeting",
    description:
      "Join our monthly book club and discuss the latest best-selling novel.",
    location: "Library",
    date: "2022/08/12",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/A_meeting_between_a_man_and_a_woman.jpg/440px-A_meeting_between_a_man_and_a_woman.jpg",
    isFeatured: false,
  },
  {
    id: "e5",
    title: "Farmers Market",
    description:
      "Shop for fresh produce, baked goods, and handmade items at our weekly farmers market.",
    location: "City Square",
    date: "2022/09/15",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/ea/Farmers_and_Artisans_Market_at_Farmington_-_Michigan.jpg",
    isFeatured: true,
  },
  {
    id: "e6",
    title: "Wine Tasting",
    description:
      "Taste and learn about different types of wine at our monthly wine tasting event.",
    location: "Wine Bar",
    date: "2022/09/15",
    image: "/images/maja-petric-vGQ49l9I4EE-unsplash.jpg",
    isFeatured: false,
  },
  {
    id: "e7",
    title: "Comedy Night",
    description:
      "Laugh out loud at our weekly comedy night featuring local comedians.",
    location: "Comedy Club",
    date: "2022/09/15",
    image: "/images/darius-E-_I18oX5NQ-unsplash.jpg",
    isFeatured: true,
  },
  {
    id: "e8",
    title: "Yoga in the Park",
    description:
      "Start your morning with a yoga class in the beautiful surroundings of the park.",
    location: "Central Park",
    date: "2022/09/15",
    image: "/images/mike-kilcoyne-8Z2ccyjqhSg-unsplash.jpg",
    isFeatured: false,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getEventById(id: string) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter: { year: string; month: string }) {
  let { year, month } = dateFilter;
  let yearInt = parseInt(year as string);
  let monthInt = parseInt(month as string);

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === yearInt &&
      eventDate.getMonth() === monthInt - 1
    );
  });
  return filteredEvents;
}
