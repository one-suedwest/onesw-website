const elements = document.querySelectorAll('[data-hidden-field]');
let counter = 10;

if (elements.length > 0) {
    const interval = setInterval(() => {
        counter--;
        elements.forEach((el) => {
            el.innerHTML = `Wird angezeigt in ${counter} Sekunden.`;
            if (counter === 0) {
                el.innerHTML = `${el.dataset.prefix}${el.dataset.suffix}`.split('').map(x => '<span>' + x + '</span>').join('');
                el.style.color = 'var(--font-color)';
                clearInterval(interval);
            }
        })
    }, 1000);
}
