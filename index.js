const faker = require("faker");

const { v4: uuidv4 } = require("uuid");

// https://www.npmjs.com/package/faker

// https://www.npmjs.com/package/uuid

for (let i = 0; i < 100; i++) {
  const id = uuidv4().toString();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const city = faker.address.city();

  const person = {
    id: id,
    firstName: firstName,
    lastName: lastName,
    email: email,
    city: city,
  };
  console.log(person);
}
