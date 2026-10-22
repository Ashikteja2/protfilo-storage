
/* =========================================================
   STAYLUXE - INDIA HOTEL BOOKING WEBSITE
   City Search + Hotel Details + Booking + Demo Payment
   ========================================================= */

/* 1. INDIAN DESTINATIONS */

const cities = [
  "Visakhapatnam", "Vijayawada", "Guntur", "Tirupati",
  "Nellore", "Kurnool", "Rajahmundry", "Kakinada",
  "Anantapur", "Kadapa", "Ongole", "Eluru", "Amaravati",
  "Hyderabad", "Warangal", "Karimnagar", "Nizamabad",
  "Khammam", "Nalgonda", "Siddipet",
  "Bengaluru", "Mysuru", "Mangaluru", "Hubballi",
  "Belagavi", "Shivamogga", "Ballari", "Udupi",
  "Chennai", "Coimbatore", "Madurai", "Salem",
  "Tiruchirappalli", "Tirunelveli", "Erode", "Vellore",
  "Thanjavur", "Kanyakumari", "Ooty", "Kodaikanal",
  "Rameswaram", "Mahabalipuram",
  "Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur",
  "Kollam", "Alappuzha", "Munnar", "Wayanad", "Kumarakom",
  "Mumbai", "Pune", "Nagpur", "Nashik", "Thane",
  "Navi Mumbai", "Kolhapur", "Solapur", "Lonavala",
  "Mahabaleshwar", "Shirdi", "Aurangabad",
  "Delhi", "New Delhi", "Noida", "Greater Noida",
  "Gurugram", "Faridabad", "Ghaziabad",
  "Agra", "Lucknow", "Kanpur", "Varanasi", "Prayagraj",
  "Ayodhya", "Mathura", "Vrindavan", "Meerut", "Jhansi",
  "Bareilly", "Aligarh", "Gorakhpur",
  "Jaipur", "Udaipur", "Jodhpur", "Jaisalmer",
  "Ajmer", "Pushkar", "Kota", "Bikaner", "Mount Abu",
  "Ahmedabad", "Surat", "Vadodara", "Rajkot",
  "Gandhinagar", "Dwarka", "Somnath", "Bhuj", "Jamnagar",
  "Indore", "Bhopal", "Gwalior", "Jabalpur",
  "Ujjain", "Khajuraho", "Sanchi", "Orchha",
  "Kolkata", "Darjeeling", "Siliguri", "Durgapur",
  "Howrah", "Kalimpong", "Digha",
  "Bhubaneswar", "Cuttack", "Puri", "Konark",
  "Rourkela", "Sambalpur",
  "Patna", "Gaya", "Bodh Gaya", "Muzaffarpur", "Bhagalpur",
  "Ranchi", "Jamshedpur", "Dhanbad", "Deoghar",
  "Amritsar", "Ludhiana", "Jalandhar", "Patiala", "Bathinda",
  "Panipat", "Karnal", "Hisar", "Ambala", "Kurukshetra",
  "Shimla", "Manali", "Dharamshala", "Kullu",
  "Chamba", "Solan", "Dalhousie",
  "Dehradun", "Haridwar", "Rishikesh", "Nainital",
  "Mussoorie", "Almora", "Ranikhet", "Jim Corbett",
  "Guwahati", "Dibrugarh", "Silchar", "Jorhat",
  "Shillong", "Cherrapunji", "Gangtok", "Aizawl",
  "Imphal", "Kohima", "Dimapur", "Itanagar",
  "Tawang", "Agartala", "Ziro",
  "Panaji", "Margao", "Vasco da Gama", "Calangute",
  "Candolim", "Baga", "Palolem", "Anjuna", "Gokarna",
  "Raipur", "Bhilai", "Bilaspur", "Jagdalpur",
  "Puducherry", "Port Blair", "Leh", "Kargil",
  "Daman", "Diu", "Silvassa", "Kavaratti"
];


/* 2. SAMPLE HOTEL DATA
   These are demonstration listings, not live inventory. */

const hotels = [
  {
    name: "Ocean Breeze Resort",
    city: "Goa",
    area: "Candolim",
    price: 4500,
    rating: 4.8,
    reviews: 120,
    tag: "Popular",
    description: "Relax by the pool and enjoy a peaceful getaway.",
    image: "photo-1571896349842-33c89424de2d"
  },
  {
    name: "Royal Heritage Hotel",
    city: "Jaipur",
    area: "Jaipur",
    price: 3200,
    rating: 4.7,
    reviews: 98,
    tag: "Best Value",
    description: "Experience traditional hospitality and elegant rooms.",
    image: "photo-1566073771259-6a8506099945"
  },
  {
    name: "Palm Paradise Retreat",
    city: "Kochi",
    area: "Kerala",
    price: 5800,
    rating: 4.9,
    reviews: 156,
    tag: "Luxury",
    description: "Escape into nature with comfort and beautiful views.",
    image: "photo-1542314831-068cd1dbfeeb"
  },
  {
    name: "Hyderabad Comfort Stay",
    city: "Hyderabad",
    area: "Banjara Hills",
    price: 2900,
    rating: 4.5,
    reviews: 84,
    tag: "City Favourite",
    description: "A comfortable base for exploring Hyderabad.",
    image: "photo-1564501049412-61c2a3083791"
  },
  {
    name: "Capital Comfort Hotel",
    city: "Delhi",
    area: "New Delhi",
    price: 4100,
    rating: 4.6,
    reviews: 143,
    tag: "Popular",
    description: "Modern rooms for your visit to the capital.",
    image: "photo-1568084680786-a84f91d1153c"
  },
  {
    name: "Mumbai Bay House",
    city: "Mumbai",
    area: "Bandra",
    price: 5200,
    rating: 4.6,
    reviews: 111,
    tag: "Guest Favourite",
    description: "A stylish stay in India's financial capital.",
    image: "photo-1520250497591-112f2f40a3f4"
  },
  {
    name: "Lakeview Palace Stay",
    city: "Udaipur",
    area: "Lake Pichola",
    price: 5600,
    rating: 4.8,
    reviews: 92,
    tag: "Scenic Stay",
    description: "Discover lakeside charm and beautiful surroundings.",
    image: "photo-1582719508461-905c673771fd"
  },
  {
    name: "Mountain Mist Lodge",
    city: "Manali",
    area: "Old Manali",
    price: 3600,
    rating: 4.7,
    reviews: 75,
    tag: "Mountain Escape",
    description: "Enjoy a peaceful stay surrounded by mountains.",
    image: "photo-1518732714860-b62714ce0c59"
  },
  {
    name: "Bengaluru Garden Hotel",
    city: "Bengaluru",
    area: "Indiranagar",
    price: 3300,
    rating: 4.5,
    reviews: 87,
    tag: "Design Pick",
    description: "A contemporary stay in a lively neighbourhood.",
    image: "photo-1564013799919-ab600027ffc6"
  },
  {
    name: "Chennai Coastal Rooms",
    city: "Chennai",
    area: "Besant Nagar",
    price: 2800,
    rating: 4.4,
    reviews: 69,
    tag: "Coastal Pick",
    description: "A relaxed base for city visits and seaside walks.",
    image: "photo-1499793983690-e29da59ef1c2"
  },
  {
    name: "Varanasi River House",
    city: "Varanasi",
    area: "Assi Ghat",
    price: 2400,
    rating: 4.5,
    reviews: 64,
    tag: "Culture Pick",
    description: "Explore local culture from a comfortable base.",
    image: "photo-1445019980597-93fa8acb246c"
  },
  {
    name: "Pune Urban Retreat",
    city: "Pune",
    area: "Koregaon Park",
    price: 3100,
    rating: 4.4,
    reviews: 81,
    tag: "Comfort Stay",
    description: "A convenient stay for work trips and weekends.",
    image: "photo-1566073771259-6a8506099945"
  }
];

const extraImages = [
  "photo-1566073771259-6a8506099945",
  "photo-1542314831-068cd1dbfeeb",
  "photo-1564501049412-61c2a3083791",
  "photo-1571896349842-33c89424de2d"
];

const imageURL = id =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=85`;

const getElement = id => document.getElementById(id);


/* 3. HELPERS */

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function findCity(input) {
  const value = String(input || "").trim().toLowerCase();
  return cities.find(city => city.toLowerCase() === value) || "";
}

function money(amount) {
  return "₹" + Number(amount).toLocaleString("en-IN");
}

function formatDate(date) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0")
  ].join("-");
}


/* 4. CITY SEARCH SUGGESTIONS */

function loadCities() {
  const cityList = getElement("cityList");
  if (!cityList) return;

  cityList.innerHTML = [...new Set(cities)]
    .sort((a, b) => a.localeCompare(b))
    .map(city => `<option value="${escapeHTML(city)}"></option>`)
    .join("");

  const cityButtons = getElement("cityButtons");

  if (cityButtons) {
    cityButtons.innerHTML = [...new Set(cities)]
      .sort((a, b) => a.localeCompare(b))
      .map(city => `
        <button class="city-button"
                type="button"
                data-city="${escapeHTML(city)}">
          ${escapeHTML(city)}
        </button>
      `).join("");

    cityButtons.querySelectorAll("button").forEach(button => {
      button.addEventListener("click", () => {
        searchHotels(button.dataset.city);
      });
    });
  }
}


/* 5. FEATURED DESTINATION CARDS */

function loadDestinations() {
  const grid = getElement("destinationGrid");
  if (!grid) return;

  const destinations = [
    {
      name: "Goa",
      city: "Goa",
      image: "photo-1512343879784-a960bf40e7f2",
      label: "Beaches and resorts"
    },
    {
      name: "Jaipur",
      city: "Jaipur",
      image: "photo-1477587458883-47145ed94245",
      label: "Heritage and culture"
    },
    {
      name: "Kerala",
      city: "Kochi",
      image: "photo-1602216056096-3b40cc0c9944",
      label: "Nature and backwaters"
    },
    {
      name: "Manali",
      city: "Manali",
      image: "photo-1626621341517-bbf3d9990a23",
      label: "Mountain escapes"
    },
    {
      name: "Delhi",
      city: "Delhi",
      image: "photo-1568084680786-a84f91d1153c",
      label: "Capital city stays"
    },
    {
      name: "Hyderabad",
      city: "Hyderabad",
      image: "photo-1564501049412-61c2a3083791",
      label: "City breaks"
    },
    {
      name: "Mumbai",
      city: "Mumbai",
      image: "photo-1520250497591-112f2f40a3f4",
      label: "City and sea views"
    },
    {
      name: "Udaipur",
      city: "Udaipur",
      image: "photo-1582719508461-905c673771fd",
      label: "Lakeside escapes"
    }
  ];

  grid.innerHTML = destinations.map(place => `
    <button class="destination-card"
            type="button"
            data-city="${escapeHTML(place.city)}">
      <img src="${imageURL(place.image)}"
           alt="${escapeHTML(place.name)}"
           loading="lazy">
      <span class="destination-info">
        <strong>${escapeHTML(place.name)}</strong>
        <small>${escapeHTML(place.label)}</small>
      </span>
    </button>
  `).join("");

  grid.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      searchHotels(button.dataset.city);
    });
  });
}


/* 6. SAMPLE LISTINGS FOR OTHER CITIES */

function generateSampleHotels(city) {
  const templates = [
    {
      suffix: "Comfort Stay",
      area: "City centre",
      price: 2199,
      rating: 4.4,
      reviews: 28,
      image: extraImages[0]
    },
    {
      suffix: "Garden Residency",
      area: "Popular neighbourhood",
      price: 2999,
      rating: 4.6,
      reviews: 41,
      image: extraImages[1]
    },
    {
      suffix: "Urban Retreat",
      area: "Near local attractions",
      price: 3799,
      rating: 4.5,
      reviews: 35,
      image: extraImages[2]
    },
    {
      suffix: "Grand Rooms",
      area: "Central district",
      price: 4599,
      rating: 4.7,
      reviews: 53,
      image: extraImages[3]
    }
  ];

  return templates.map(hotel => ({
    ...hotel,
    name: `${city} ${hotel.suffix}`,
    city,
    tag: "SAMPLE LISTING",
    description: "Illustrative accommodation listing for this destination.",
    type: "Sample accommodation"
  }));
}


/* 7. HOTEL CARDS */

function createHotelCard(hotel) {
  return `
    <article class="hotel-card">
      <div class="hotel-image-wrap">
        <img class="hotel-image"
             src="${imageURL(hotel.image)}"
             alt="${escapeHTML(hotel.name)}"
             loading="lazy">

        <span class="hotel-tag">
          ${escapeHTML(hotel.tag)}
        </span>

        <button class="favorite-button"
                type="button"
                aria-label="Save hotel"
                aria-pressed="false">♡</button>
      </div>

      <div class="hotel-details">
        <div class="hotel-city">
          ${escapeHTML(hotel.area)}, ${escapeHTML(hotel.city)}
        </div>

        <h3 class="hotel-name">
          ${escapeHTML(hotel.name)}
        </h3>

        <p class="hotel-description">
          ${escapeHTML(hotel.description)}
        </p>

        <div class="hotel-meta">
          <span>${escapeHTML(hotel.type || "Hotel")}</span>
          <span class="rating">
            <span>★</span> ${hotel.rating}
            (${hotel.reviews} reviews)
          </span>
        </div>

        <div class="hotel-footer">
          <div class="price">
            <strong>${money(hotel.price)}</strong>
            <small>per night · sample price</small>
          </div>

          <a class="view-hotel"
             href="#bookingFlow"
             data-city="${escapeHTML(hotel.city)}"
             data-hotel-name="${escapeHTML(hotel.name)}">
            View Hotel →
          </a>
        </div>
      </div>
    </article>
  `;
}

function displayHotels(hotelList, city = "") {
  const grid = getElement("hotelGrid");
  if (!grid) return;

  grid.innerHTML = hotelList.map(createHotelCard).join("");

  getElement("hotelHeading").textContent =
    city ? `Hotels in ${city}` : "Featured Hotels";

  getElement("hotelSubtitle").textContent =
    city
      ? `Explore sample accommodation in ${city}.`
      : "Discover places worth staying at.";

  getElement("resultsMessage").textContent =
    city
      ? `Showing ${hotelList.length} sample listings for ${city}. These are not live offers.`
      : "";

  addHotelActions();
}

function addHotelActions() {
  document.querySelectorAll(".favorite-button").forEach(button => {
    button.addEventListener("click", () => {
      const saved = button.classList.toggle("active");
      button.textContent = saved ? "♥" : "♡";
      button.setAttribute("aria-pressed", String(saved));
    });
  });

  document.querySelectorAll(".view-hotel").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();

      const hotelName = link.dataset.hotelName;
      const city = link.dataset.city;

      const hotel =
        hotels.find(item => item.name === hotelName) ||
        generateSampleHotels(city).find(item => item.name === hotelName);

      if (hotel) openHotelDetails(hotel);
    });
  });
}


/* 8. CITY SEARCH */

function searchHotels(input) {
  const city = findCity(input);
  const message = getElement("resultsMessage");

  if (!city) {
    message.textContent =
      "Please choose a destination from the Indian city suggestions.";
    return;
  }

  getElement("destination").value = city;

  const matches = hotels.filter(
    hotel => hotel.city.toLowerCase() === city.toLowerCase()
  );

  const results = matches.length
    ? matches
    : generateSampleHotels(city);

  displayHotels(results, city);

  const params = new URLSearchParams();
  params.set("destination", city.toLowerCase());
  params.set("checkin", getElement("checkin").value);
  params.set("checkout", getElement("checkout").value);
  params.set("guests", getElement("guests").value);

  history.replaceState(
    {},
    "",
    `${location.pathname}?${params.toString()}#hotels`
  );

  getElement("hotels").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}


/* 9. SEARCH FORM */

function setupSearchForm() {
  const form = getElement("searchForm");
  if (!form) return;

  form.addEventListener("submit", event => {
    event.preventDefault();

    const checkin = getElement("checkin").value;
    const checkout = getElement("checkout").value;

    if (checkout <= checkin) {
      getElement("resultsMessage").textContent =
        "Check-out must be after check-in.";
      getElement("checkout").focus();
      return;
    }

    searchHotels(getElement("destination").value);
  });

  getElement("viewAllButton").addEventListener("click", () => {
    getElement("destination").value = "";
    displayHotels(hotels);

    getElement("hotels").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });

  getElement("menuButton").addEventListener("click", () => {
    getElement("navigation").classList.toggle("open");
  });
}


/* 10. DEFAULT DATES */

function setupDates() {
  const checkin = getElement("checkin");
  const checkout = getElement("checkout");

  if (!checkin || !checkout) return;

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const afterTomorrow = new Date(tomorrow);
  afterTomorrow.setDate(tomorrow.getDate() + 1);

  checkin.min = formatDate(today);
  checkout.min = formatDate(tomorrow);

  checkin.value = formatDate(tomorrow);
  checkout.value = formatDate(afterTomorrow);

  checkin.addEventListener("change", () => {
    const nextDay = new Date(`${checkin.value}T12:00:00`);
    nextDay.setDate(nextDay.getDate() + 1);

    checkout.min = formatDate(nextDay);

    if (checkout.value <= checkin.value) {
      checkout.value = formatDate(nextDay);
    }
  });
}


/* 11. BOOKING PAGE HELPERS */

let selectedHotel = null;
let currentBooking = null;

function bookingEscape(value) {
  return escapeHTML(value);
}

function showBookingPage(html) {
  document.querySelectorAll(
    "body > header, body > main, body > section, body > footer"
  ).forEach(element => {
    if (element.id !== "bookingFlow") {
      element.hidden = true;
    }
  });

  const flow = getElement("bookingFlow");
  flow.hidden = false;
  flow.innerHTML = html;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function returnToHotels() {
  document.querySelectorAll(
    "body > header, body > main, body > section, body > footer"
  ).forEach(element => {
    if (element.id !== "bookingFlow") {
      element.hidden = false;
    }
  });

  getElement("bookingFlow").hidden = true;

  getElement("hotels").scrollIntoView({
    behavior: "smooth"
  });
}


/* 12. HOTEL DETAILS PAGE */

function openHotelDetails(hotel) {
  selectedHotel = hotel;

  const name = bookingEscape(hotel.name);
  const city = bookingEscape(hotel.city);

  showBookingPage(`
    <button class="flow-back" id="backToHotels">
      ← Back to hotels
    </button>

    <div class="flow-gallery">
      <img src="${imageURL(hotel.image)}" alt="${name}">
      <img src="${imageURL(extraImages[1])}" alt="Sample room">
      <img src="${imageURL(extraImages[2])}" alt="Sample facilities">
    </div>

    <div class="flow-layout">
      <div class="flow-card">
        <p class="eyebrow">${city}, INDIA</p>
        <h1>${name}</h1>

        <p class="flow-muted">
          ★ ${hotel.rating} · ${hotel.reviews} sample reviews ·
          ${bookingEscape(hotel.area)}
        </p>

        <p>${bookingEscape(hotel.description)}</p>

        <h3>About this stay</h3>
        <p class="flow-muted">
          Review this sample accommodation before continuing.
        </p>

        <h3>Amenities</h3>
        <div class="flow-amenities">
          <span>Wi-Fi</span>
          <span>Air conditioning</span>
          <span>Room service</span>
          <span>Parking</span>
          <span>Reception</span>
        </div>

        <p class="flow-notice">
          Demo listing: photos and facilities have not been
          verified with a real property.
        </p>
      </div>

      <aside class="flow-card">
        <p class="flow-muted">Sample price per night</p>
        <div class="flow-price">${money(hotel.price)}</div>

        <p class="flow-muted">
          Live availability and taxes are not connected.
        </p>

        <button class="flow-primary" id="continueBooking">
          Book this stay →
        </button>
      </aside>
    </div>
  `);

  getElement("backToHotels").addEventListener(
    "click", returnToHotels
  );

  getElement("continueBooking").addEventListener(
    "click", openBookingForm
  );
}


/* 13. GUEST BOOKING FORM */

function openBookingForm() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const nextDay = new Date(tomorrow);
  nextDay.setDate(nextDay.getDate() + 1);

  const minCheckin = formatDate(tomorrow);
  const minCheckout = formatDate(nextDay);

  showBookingPage(`
    <button class="flow-back" id="backToDetails">
      ← Back to hotel details
    </button>

    <div class="flow-layout">
      <div class="flow-card">
        <h2>Complete your booking</h2>
        <p class="flow-muted">
          ${bookingEscape(selectedHotel.name)},
          ${bookingEscape(selectedHotel.city)}
        </p>

        <form id="guestForm" class="flow-form">
          <label>
            Full name
            <input name="fullName" required maxlength="100"
                   autocomplete="name">
          </label>

          <label>
            Email address
            <input name="email" type="email" required
                   autocomplete="email">
          </label>

          <label>
            Phone number
            <input name="phone" type="tel" required
                   pattern="[0-9+() -]{8,20}"
                   autocomplete="tel">
          </label>

          <label>
            Check-in
            <input name="checkin" type="date"
                   min="${minCheckin}" value="${minCheckin}" required>
          </label>

          <label>
            Check-out
            <input name="checkout" type="date"
                   min="${minCheckout}" value="${minCheckout}" required>
          </label>

          <label>
            Guests
            <select name="guests">
              <option value="1">1 guest</option>
              <option value="2" selected>2 guests</option>
              <option value="3">3 guests</option>
              <option value="4">4 guests</option>
              <option value="5">5 guests</option>
            </select>
          </label>

          <button class="flow-primary" type="submit">
            Continue to payment →
          </button>
        </form>
      </div>

      <aside class="flow-card">
        <h3>Price summary</h3>
        <div class="flow-total">
          <span>Price per night</span>
          <strong>${money(selectedHotel.price)}</strong>
        </div>
        <div class="flow-total">
          <span>Estimated total</span>
          <strong id="bookingTotal">${money(selectedHotel.price)}</strong>
        </div>
        <p class="flow-muted">
          Sample estimate before applicable taxes.
        </p>
      </aside>
    </div>
  `);

  getElement("backToDetails").addEventListener(
    "click", () => openHotelDetails(selectedHotel)
  );

  const form = getElement("guestForm");
  const checkin = form.elements.checkin;
  const checkout = form.elements.checkout;

  function calculateTotal() {
    if (!checkin.value || !checkout.value ||
        checkout.value <= checkin.value) return;

    const nights = Math.round(
      (new Date(checkout.value + "T12:00:00") -
       new Date(checkin.value + "T12:00:00")) / 86400000
    );

    getElement("bookingTotal").textContent =
      money(nights * selectedHotel.price);
  }

  checkin.addEventListener("change", () => {
    if (!checkin.value) return;

    const minimum = new Date(checkin.value + "T12:00:00");
    minimum.setDate(minimum.getDate() + 1);

    checkout.min = formatDate(minimum);

    if (checkout.value <= checkin.value) {
      checkout.value = formatDate(minimum);
    }

    calculateTotal();
  });

  checkout.addEventListener("change", calculateTotal);

  form.addEventListener("submit", event => {
    event.preventDefault();

    if (checkout.value <= checkin.value) {
      alert("Check-out must be after check-in.");
      return;
    }

    const nights = Math.round(
      (new Date(checkout.value + "T12:00:00") -
       new Date(checkin.value + "T12:00:00")) / 86400000
    );

    currentBooking = {
      hotel: selectedHotel,
      fullName: form.elements.fullName.value.trim(),
      email: form.elements.email.value.trim(),
      phone: form.elements.phone.value.trim(),
      checkin: checkin.value,
      checkout: checkout.value,
      guests: form.elements.guests.value,
      nights,
      total: nights * selectedHotel.price,
      reference: "DEMO-" + Date.now().toString().slice(-8)
    };

    openPaymentPage();
  });
}


/* 14. DEMO PAYMENT PAGE */

function openPaymentPage() {
  showBookingPage(`
    <button class="flow-back" id="backToBooking">
      ← Back to guest details
    </button>

    <div class="flow-layout">
      <div class="flow-card">
        <h2>Payment</h2>

        <p class="flow-notice">
          Demo mode only. No money will be collected and no
          real reservation will be created.
        </p>

        <form id="paymentForm" class="flow-form">
          <label>
            Payment method
            <select name="method">
              <option value="Demo UPI">Demo UPI</option>
              <option value="Demo card">Demo card</option>
              <option value="Pay at property (demo)">
                Pay at property (demo)
              </option>
            </select>
          </label>

          <button class="flow-primary" type="submit">
            Simulate successful payment
          </button>
        </form>
      </div>

      <aside class="flow-card">
        <h3>Booking summary</h3>
        <p>${bookingEscape(currentBooking.hotel.name)}</p>
        <p class="flow-muted">
          ${currentBooking.checkin} to ${currentBooking.checkout}
        </p>

        <div class="flow-total">
          <span>${currentBooking.nights} night(s)</span>
          <strong>${money(currentBooking.total)}</strong>
        </div>
      </aside>
    </div>
  `);

  getElement("backToBooking").addEventListener(
    "click", openBookingForm
  );

  getElement("paymentForm").addEventListener("submit", event => {
    event.preventDefault();

    const method = event.currentTarget.elements.method.value;
    showBookingSuccess(method);
  });
}


/* 15. BOOKING SUCCESS PAGE */

function showBookingSuccess(method) {
  showBookingPage(`
    <div class="flow-success">
      <div class="flow-success-icon">✓</div>
      <h1>Demo booking successful!</h1>

      <p>
        Thank you, ${bookingEscape(currentBooking.fullName)}.
      </p>

      <p class="flow-notice">
        This is a simulated confirmation. No room has actually
        been reserved and no payment has been processed.
      </p>

      <div class="flow-card" style="text-align:left;margin-top:24px">
        <h3>Booking details</h3>

        <div class="flow-total">
          <span>Reference</span>
          <strong>${currentBooking.reference}</strong>
        </div>

        <div class="flow-total">
          <span>Hotel</span>
          <strong>${bookingEscape(currentBooking.hotel.name)}</strong>
        </div>

        <div class="flow-total">
          <span>City</span>
          <strong>${bookingEscape(currentBooking.hotel.city)}</strong>
        </div>

        <div class="flow-total">
          <span>Check-in</span>
          <strong>${currentBooking.checkin}</strong>
        </div>

        <div class="flow-total">
          <span>Check-out</span>
          <strong>${currentBooking.checkout}</strong>
        </div>

        <div class="flow-total">
          <span>Guests</span>
          <strong>${currentBooking.guests}</strong>
        </div>

        <div class="flow-total">
          <span>Demo payment method</span>
          <strong>${bookingEscape(method)}</strong>
        </div>

        <div class="flow-total">
          <span>Sample total</span>
          <strong>${money(currentBooking.total)}</strong>
        </div>
      </div>

      <button class="flow-primary" id="finishBooking">
        Back to hotels
      </button>
    </div>
  `);

  getElement("finishBooking").addEventListener(
    "click", returnToHotels
  );
}


/* 16. START THE WEBSITE */

function initializeWebsite() {
  loadCities();
  loadDestinations();
  setupDates();
  setupSearchForm();

  getElement("year").textContent = new Date().getFullYear();

  displayHotels(hotels);

  const params = new URLSearchParams(location.search);
  const initialCity = params.get("destination");

  if (initialCity) {
    const city = findCity(initialCity);

    if (city) {
      getElement("destination").value = city;

      const matches = hotels.filter(
        hotel => hotel.city.toLowerCase() === city.toLowerCase()
      );

      displayHotels(
        matches.length ? matches : generateSampleHotels(city),
        city
      );
    }
  }
}

initializeWebsite();
