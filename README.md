REST API with landing page, using Express and Faker.js to generate fake user data including ID, UUID, Full name, email, phone number, location, address and job title for each user. Rate limited configurable API.

- Features API rate limit of 100 requests per 15 minutes (configurable in app.js).

## Features

See it live: https://fake-person-data-api.onrender.com/

- REST API
- landing page with link to API
- Express server
- Using Faker.js for generating fake data
- ID, UUID, Full name, email, phone number, location, address and job title for each user
- 25 unique users generated per request (easily configurable in app.js)
- API rate limit of 100 requests per 15 minutes (configurable in app.js)

## Installation

- run `npm install` to install dependencies
- run `node app.js` to start the server on port 3000

## Usage

- launch the server with `node app.js`
- the server will be running on port 3000, navigate to http://localhost:3000
- the API has a landing page with a link to the users generation API
- navigate to /api/users to get a list of 25 users with randomly generated data
- (optional) configure the rate limit in app.js for local and testing usage
- (optional) configure the number of users generated per request in app.js
- (optional) configure the data using faker.js in app.js

## Screenshots
![apidata](https://github.com/blomma-dev/fake-person-data-api/assets/64746667/996fd1e2-fd2a-42d9-9ff8-fe974fa3edeb)

![fakeapi](https://github.com/blomma-dev/fake-person-data-api/assets/64746667/bfd0eb77-8907-4898-8220-c9a44219b82e)

## License

- MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Faker.js license

Faker - Copyright (c) 2022-2023

This software consists of voluntary contributions made by many individuals.
For exact contribution history, see the revision history
available at https://github.com/faker-js/faker

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
