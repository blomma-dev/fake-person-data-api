// app.js - main file of the application / fake person data API

// import faker.js
import { faker } from "@faker-js/faker";

// import express.js
import express from "express";

//import express.js rateLimit
import rateLimit from "express-rate-limit";

// declare express.js
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// using rateLimit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message:
    "The api supports 50 requests per 15minutes, remove or tweak express-rate-limit for local testing",
  // store: ... , // Use an external store for more precise rate limiting
});

// Apply the rate limiting middleware to all requests
app.use(limiter);

// GET route
app.get("/api/users", (req, res) => {
  const users = [];

  // generate unique names and corresponding emails for each user
  for (let id = 1; id <= 25; id++) {
    const randomName = faker.person.fullName();

    // create a pseudo-random UUID
    const uuid = faker.string.uuid();

    // create random job title
    const jobTitle = faker.person.jobTitle();

    // create a country
    const country = faker.location.country();

    // create a city
    const city = faker.location.city();

    // create an address with apartment info
    const address = faker.location.streetAddress(true);

    // create a pseudo-random phone number
    const phoneNumber = faker.phone.number("+## ## ### ## ##");

    // create a pseudo-random email based on the name and a domain
    const randomEmail = `${randomName
      .replace(/\s/g, ".")
      .toLowerCase()}@example.com`;
    users.push({
      id,
      uuid,
      name: randomName,
      email: randomEmail,
      phone: phoneNumber,
      jobTitle,
      country,
      city,
      address,
    });
  }

  res.json(users);
});
