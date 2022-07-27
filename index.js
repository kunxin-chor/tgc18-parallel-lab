const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');

const app = express();

// ROUTES
// immediatey invoked function
(async function(){
    // use const when we want a variable that cannot be reassigned to
    const landingRoutes = require('./routes/landing');
    const productRoutes = require('./routes/products');

    app.use('/', landingRoutes);
    app.use('/products', productRoutes)
})();

app.listen(3000, function(){
    console.log("Server has started")
});