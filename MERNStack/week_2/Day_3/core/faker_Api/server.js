const express = require('express');
const faker = require('faker');
const app = express();
const port = 8001;

const createUser = () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();

    const newFake = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        firstName: firstName,
        lastName: lastName,
    };
    return newFake;
};

const newFakeUser = createUser();
console.log(newFakeUser);



const createCompany = () => {
    return {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        },
    };
};


// Express route to handle new user creation
app.get('/api/users/new', (req, res) => {
    const newUser = createUser();
    res.json({ user: newUser });
});

// Express route to handle new company creation
app.get('/api/companies/new', (req, res) => {
    const newCompany = createCompany();
    res.json({ company: newCompany });
});

// Express route to handle both new user and new company creation
app.get('/api/user/company', (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    res.json({ user: newUser, company: newCompany });
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});