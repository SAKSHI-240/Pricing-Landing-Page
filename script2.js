document.addEventListener('DOMContentLoaded', function () {
    const pricingCards = document.querySelectorAll('.pricing-card');

    pricingCards.forEach(card => {
        card.addEventListener('click', function () {
            // Remove the 'selected' class from all cards
            pricingCards.forEach(c => c.classList.remove('selected'));

            // Add the 'selected' class to the clicked card
            this.classList.add('selected');
        });
    });
});
