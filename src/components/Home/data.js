const data = [
  {
    title: "Best cookie in Amsterdam- Van Stapele",
    type: "LINK",
    content:
      "https://www.instagram.com/p/CL65dEbFCii/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
    description:
      "This is one of Amsterdam’s most viral food spots, with crowds lining up over an hour before the store even opens only 2.50 Euro a cookie Amsterdam",
    tags: ["street food", "cookie", "must eat"],
    location: "Amsterdam",
    favourite: true,
  },

  {
    title: "NEW - Hellenika Cultured Creamery in Pike Place",
    type: "LINK",
    content:
      "https://www.theinfatuation.com/seattle/reviews/hellenika-cultured-creamery",
    description:
      "Hellenika’s cultured gelato in flavors like lemon curd, dutch chocolate, and coconut ube (our favorite). - From the team behind Ellenos",
    tags: ["Ice Cream", "Pike Place Market"],
    location: "Seattle",
    favourite: true,
  },

  {
    title: "Portland: Trolley City Tour with Portland Head Light Stop",
    type: "LINK",
    content:
      "https://www.tripadvisor.com/ShowUserReviews-g40554-d108101-r529848917-Portland_Head_Light-Cape_Elizabeth_Maine.html",
    description:
      "Jump aboard a trolley for a fully-narrated sightseeing tour of Portland's diverse historic and hidden gems. Engage with informative guides and explore Portland's rich history. The tour also includes a stop at the iconic Portland Head Light. Available from Sun-Thurs 9:45am onwards.",
    tags: ["Sightseeing", "Historic Tour", "Lighthouse", "Trolley Tour"],
    location: "Portland, Maine",
    favourite: true,
  },

  {
    title: "Paris: 1-Hour River Seine Cruise",
    type: "LINK",
    content: "https://www.youtube.com/watch?v=zHehIzEBmAk",
    description:
      "Experience the magic of Paris from the water! Have Dinner along the Seine River, showcasing iconic landmarks like the Eiffel Tower, Notre Dame, and more. A must-do activity when visiting the City of Lights.",
    tags: [
      "Seine River",
      "Cruise",
      "Eiffel Tower",
      "Paris Landmarks",

      "Dinner",
    ],
    location: "Paris, France",
    favourite: true,
  },

  {
    title: "NEW - Central in Lima: The World's Best Restaurant 2023",
    type: "LINK",
    content:
      "https://www.theworlds50best.com/stories/News/the-worlds-50-best-restaurants-2023-the-list-in-pictures.html",
    description:
      "Voted No.1 in the World's 50 Best Restaurants 2023 list, Central in Lima is crowned as the best. Experience the culinary delights of South America.",
    tags: ["Fine Dining", "Lima", "Best Restaurant", "Culinary Experience"],
    location: "Lima, Peru",
    favourite: true,
  },

  {
    title: "NEW - Disfrutar in Barcelona: A Culinary Gem",
    type: "LINK",
    content:
      "https://www.eater.com/worlds-50-best-restaurants-awards/23767356/the-worlds-50-best-restaurants-2023-the-list-so-far",
    description:
      "Ranked 2nd in the World's 50 Best Restaurants 2023 list, Disfrutar offers a unique dining experience in the heart of Barcelona.",
    tags: ["Fine Dining", "Barcelona", "Gourmet", "Spanish Cuisine"],
    location: "Barcelona, Spain",
    favourite: true,
  },

  {
    title: "NEW - Diverxo in Madrid: A Spanish Culinary Adventure",
    type: "LINK",
    content:
      "https://www.cnn.com/travel/worlds-50-best-restaurants-2023/index.html",
    description:
      "Diverxo, ranked 3rd in the World's 50 Best Restaurants 2023 list, is a must-visit for those seeking a unique gastronomic journey in Madrid.",
    tags: ["Fine Dining", "Madrid", "Gourmet", "Innovative Cuisine"],
    location: "Madrid, Spain",
    favourite: true,
  },

  {
    title: "NEW - Asador Etxebarri: A Grilling Masterpiece in Atxondo",
    type: "LINK",
    content:
      "https://www.usatoday.com/story/money/food/2023/06/22/worlds-50-best-restaurant-list-2023/70345912007/",
    description:
      "Asador Etxebarri, ranked 4th, is renowned for its grilling techniques. Experience the flavors of Spain in this iconic restaurant.",
    tags: ["Fine Dining", "Grilling", "Spanish Cuisine", "Atxondo"],
    location: "Atxondo, Spain",
    favourite: true,
  },

  {
    title: "Best Places to Travel in 2023 - Havana, Cuba",
    type: "LINK",
    content:
      "https://www.instagram.com/p/Cmem36mONjO/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
    description:
      "Havana has become more accessible for Americans as of January 2023. Dive into the vibrant culture and history of this Caribbean gem. Check out the post for detailed tips and insights.",
    tags: ["Havana", "Cuba", "Travel Guide", "Culture"],
    location: "Havana, Cuba",
    favourite: true,
  },

  {
    title: "Traveling to Venice in 2023: What You Need to Know",
    type: "LINK",
    content:
      "https://www.instagram.com/p/CmhClDZOdu2/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
    description:
      "Starting in 2023, there's a new tax for tourists making a day trip to Venice. Discover the canals and historic sites while being informed about the latest travel updates.",
    tags: ["Venice", "Italy", "Travel Tax", "Canals"],
    location: "Venice, Italy",
    favourite: true,
  },

  {
    title: "Discover Asheville in 2023: The Napa Valley for Beer-Lovers",
    type: "LINK",
    content:
      "https://www.instagram.com/p/CmtzXGOA-vP/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
    description:
      "Asheville is a haven for beer enthusiasts, offering a plethora of amazing restaurants and attractions. In 2023, new resorts and experiences are set to launch in Asheville.",
    tags: ["Asheville", "Beer", "Restaurants", "Travel"],
    location: "Asheville, NC",
    favourite: true,
  },

  {
    title: "Keystone, CO: A Winter Wonderland",
    type: "LINK",
    content:
      "https://www.instagram.com/reel/CmwKVg-BsOL/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
    description:
      "Keystone is a favorite destination for skiing in the winter or spring. The village offers everything you need for a perfect snowy getaway.",
    tags: ["Keystone", "Skiing", "Winter", "Travel"],
    location: "Keystone, CO",
    favourite: true,
  },

  {
    title: "Marrakech: A Blend of Culture and Vibrancy",
    type: "LINK",
    content:
      "https://www.instagram.com/p/Cm_3VMBuKBq/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
    description:
      "Marrakech is a top travel destination, known for its beautiful architecture, vibrant culture, and lively nightlife. Dive into the heart of Morocco and explore its wonders.",
    tags: ["Marrakech", "Morocco", "Culture", "Nightlife"],
    location: "Marrakech, Morocco",
    favourite: true,
  },

  {
    title: "The Floating Forest Experience in Cambodia",
    type: "LINK",
    content:
      "https://www.instagram.com/reel/ChwZpqzjVa0/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
    description:
      "Kayak through a mesmerizing flooded forest in Cambodia. Experience the tranquility of nature and get a glimpse of local life. A must-visit for nature enthusiasts.",
    tags: ["Nature", "Kayaking", "Unique Experience"],
    location: "Cambodia",
    favourite: true,
  },
  {
    title: "Northern Lights Viewing in Tromsø, Norway",
    type: "LINK",
    content: "https://www.tiktok.com/@itsjamiebiotch/video/7265784125754232110",
    description:
      "Witness the breathtaking Aurora Borealis in Tromsø, one of the best places in the world for this natural phenomenon. Don't forget to bring your camera! Troll Museum, Dog Sledding",
    tags: ["Nature", "Aurora Borealis", "Must See", "Bucket List"],
    location: "Tromsø, Norway",
    favourite: true,
  },
];
export default data;