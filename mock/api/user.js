const faker = require("faker");
const data = [];
let User;
do {
    User = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        website: faker.internet.url(),
        address:
            faker.address.streetAddress() +
            faker.address.city() +
            faker.address.country(),
        bio: faker.lorem.sentences(),
        image: faker.image.avatar()
    };
    data.push(User);
} while (data.length < 105);
module.exports = data;
