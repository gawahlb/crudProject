const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Pokemon & Dinosaur Api',
        description: 'Pokemon & Dinosaur Api'
    },
    host: 'localhost:3030',
    schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);