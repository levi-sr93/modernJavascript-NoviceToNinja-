const clock = document.querySelector('.clock');

const tick = () => {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const html = `
        <span>${("0" + hours).slice(-2)}</span> :
        <span>${("0" + minutes).slice(-2)}</span> :
        <span>${("0" + seconds).slice(-2)}</span>
    `;

    clock.innerHTML = html;
}

setInterval(tick, 1000)