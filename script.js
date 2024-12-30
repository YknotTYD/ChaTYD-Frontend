//api.js

//remove legacy code

const input = document.querySelector('input');
const ftch = document.getElementById("fetch");
const btn = document.getElementById("button");
const box = document.getElementById("box");

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

function add_message_bottom(message) {

    var newp = document.createElement("p");
    var newt = document.createTextNode(message);

    newp.appendChild(newt);
    newp.className = "msg";
    box.append(newp);
}

function add_message_top(message) {

    var newp = document.createElement("p");
    var newt = document.createTextNode(message);

    newp.appendChild(newt);
    newp.className = "msg";
    box.prepend(newp);
}

add_message_top("Hello top from JS.")
add_message_bottom("Hello bottom from JS.")
