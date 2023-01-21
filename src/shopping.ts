function calculateDiscount(cart: ShoppingCart): number {
  let discount = 0;
  if (cart.total > 75) {
    discount = 0.2;
  } else if (cart.n_items > 10) {
    discount = 0.1;
  }

  return discount;
}

export { calculateDiscount };
