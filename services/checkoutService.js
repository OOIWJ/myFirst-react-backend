// make use of orderService and stripeService to check out a shopping cart
const cartService = require('./cartService');
const orderService = require('./orderService');
const stripeService = require('./stripeService');

async function checkout(userId)  {    
    const orderItems = await cartService.getCartContents(userId);
    const orderId = await orderService.createOrder(userId, orderItems);
    const session = await stripeService.createCheckoutSession(userId, orderItems, orderId);
    await orderService.updateOrderSessionId(orderId, session.id);
        
    return session;
}

module.exports = {
    checkout
};