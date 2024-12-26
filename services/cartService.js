const cartData = require('../data/cartData');

/**
 * Fetches all cart contents for a specific user.
 * @param {number} userId - ID of the user
 * @returns {Promise<Array>} - List of cart items with product details
 */
async function getCartContents(userId) {
  return await cartData.getCartContents(userId);
}

/**
 * Updates the cart with a new set of items.
 * This function performs a bulk update, replacing the cart contents with the provided items.
 * @param {number} userId - ID of the user
 * @param {Array} cartItems - Array of items to update in the cart
 */


async function updateCart(userId, cartItems) {
  if (!Array.isArray(cartItems)) {
    throw new Error('Cart items must be an array');
  }
  // Check if cartItems is empty
  // if (!cartItems || cartItems.length === 0) {
  //   throw new Error('Cart is empty. Cannot update the cart.');
  // }

  // Proceed with updating the cart
  try {

    // Your logic to update the cart goes here
    // console.log(`CartService.updateCart: Updating cart for userId: ${userId}`, cartItems);
    // Example API call or database logic
    // await someDatabaseCall(userId, cartItems);
  } catch (error) {
    console.error('Error updating cart:', error);
    throw new Error('Failed to update the cart');
  }
  await cartData.updateCart(userId, cartItems);
}



module.exports = {
  getCartContents,
  updateCart // Only bulk update is needed now
};
