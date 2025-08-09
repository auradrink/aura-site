// Replace both Buy buttons with your Square Checkout URL once you have it
// Example: const CHECKOUT = 'https://square.link/u/xxxxxx';
const CHECKOUT = '{{SQUARE_CHECKOUT_URL}}';

function updateBuyLinks(){
  const links = [document.getElementById('buyBtn'), document.getElementById('buyBtn2')];
  links.forEach(a => { if(a && CHECKOUT && CHECKOUT.includes('http')) a.href = CHECKOUT; });
}
document.addEventListener('DOMContentLoaded', updateBuyLinks);
