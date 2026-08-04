const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.product-card');
const addButtons = document.querySelectorAll('[data-add]');
const cartCount = document.getElementById('cartCount');
const resetCart = document.getElementById('resetCart');
const toggleTheme = document.getElementById('toggleTheme');

let count = 0;

const updateCartText = () => {
  cartCount.textContent = count <= 1 ? `${count} article ajouté` : `${count} articles ajoutés`;
};

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    const value = filter.dataset.filter;

    filters.forEach((btn) => btn.classList.remove('active'));
    filter.classList.add('active');

    cards.forEach((card) => {
      const visible = value === 'all' || card.dataset.category === value;
      card.style.display = visible ? 'block' : 'none';
    });
  });
});

addButtons.forEach((button) => {
  button.addEventListener('click', () => {
    count += 1;
    updateCartText();
    button.textContent = 'Ajouté';
    window.setTimeout(() => {
      button.textContent = 'Ajouter';
    }, 1000);
  });
});

resetCart.addEventListener('click', () => {
  count = 0;
  updateCartText();
  addButtons.forEach((button) => {
    button.textContent = 'Ajouter';
  });
});

toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

updateCartText();
