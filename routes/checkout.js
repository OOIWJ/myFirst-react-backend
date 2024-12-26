const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const orderService = require('../services/orderService');
const checkoutService = require('../services/checkoutService');
const UserAuth = require('../middlewares/UserAuth');

router.post('/', UserAuth, async (req, res) => {
    try {
        const session = await checkoutService.checkout(req.user.userId);
        res.json(session);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Webhook for Stripe
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
    let event;
    try {
       // verify the webhook signature
        const sig = req.headers['stripe-signature'];
        event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (error) {
        console.error(`Webhook Error: ${error.message}`);
        return res.status(400).send(`Webhook Error: ${error.message}`);
    }

    // Handling the webhook event
    switch (event.type) {
        case 'checkout.session.completed':
            const session = event.data.object;
            console.log('Checkout session completed!', session);
            if (session.metadata && session.metadata.orderId) {
                await orderService.updateOrderStatus(session.metadata.orderId, 'processing');
            }
            break;
        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    res.json({ received: true });
});

module.exports = router;