// app.js - main file of the application / fake person data API

// import faker.js
import { faker } from "@faker-js/faker";

// import express.js
import express from "express";

// declare express.js
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

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
