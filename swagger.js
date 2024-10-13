const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Pokemon & Dinosaur Api',
        description: 'Pokemon & Dinosaur Api'
    },
    host: 'crudproject-gdpp.onrender.com',
    schemes: ['https', 'http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);