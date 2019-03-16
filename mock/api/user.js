const faker = require("faker");
const data = [];
let User;
do {
    User = {
        id: faker.random.uuid(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        age: faker.random.number() % 100,
        website: faker.internet.url(),
        address:
            faker.address.streetAddress() +
            faker.address.city() +
            faker.address.country(),
        bio: faker.lorem.sentences(),
        image: faker.image.avatar()
    };
    data.push(User);
} while (data.length < 45);
module.exports = data;
