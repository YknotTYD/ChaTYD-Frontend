//api.js

const input = document.querySelector('input');
const ftch = document.getElementById("fetch");
const btn = document.getElementById("button");

async function tell_backend_button_click() {

    fetch('https://yknottyd.duckdns.org/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({request: "button_click"}),
    }).then((response) => {
        return response.text()
    }).then(data => {
        ftch.textContent = data;
    })
}

async function ask_backend_button_clicks() {

    fetch('https://yknottyd.duckdns.org/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({request: "ask"}),
    }).then((response) => {
        return response.text()
    }).then(data => {
        ftch.textContent = data;
    })
}

async function ask_backend_clicks_loop() {
    while (1) {
        ask_backend_button_clicks();
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        input.value = '';
    }
});

//ask_backend_clicks_loop();
