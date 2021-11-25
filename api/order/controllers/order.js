// "use strict";

// const mercadopago = require("mercadopago");



// const {mercadoPago} = require ("mercadopago") ('TEST-5591781347241019-092218-77a18e1944045035170aacf997410976-766805643');

// module.export = {
//     async create(ctx){
//         const {token, products, idUser, adressShipping } = ctx.request.body;

//         let totalPayment = 0;

//         products.forEach(product => {
//             totalPayment = totalPayment + product.price;
//         });


//         // PARA REALIZAR EL PAGO

//         const charge = await mercadoPago.charge.create({
//             amount: totalPayment * 100,
//             // currency: "arg",
//             source: token.id,
//             description: `ID usuario: ${idUser}`,
//         });

//         // DATOS PARA CARGAR EN BASE DE DATOS.
//         const createOrder = [];
//         for await (const product of products) 

//         const data = {
//             game: product.id,
//             user: idUser,
//             totalPayment,
//             idPayment: charge.id,
//             adressShipping,
//         };

//         // VALIDANDO DATA
//         const validData = await createStrapi.entityValidator.validateEntity(
//             strapi.models.order,
//             data
//         );

//         // PASANDOLO A LA COLECCION "ORDERS"
//         const entry = await strapi.query("order").create(validData);
//         createOrder.push(entry);
//     }
// }
// return createOrder;

module.exports = {
    
}
