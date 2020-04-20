const socket = io();

let userName = document.getElementById('user-name');
let message = document.getElementById("message");
let btnSend = document.getElementById("btn-send");
let action = document.getElementById("action");
let output = document.getElementById("output");

btnSend.addEventListener("click", () => {
    if (message.value) {
        const data = { 
            userName: userName.value ? userName.value: 'Anonymus',
            message: message.value
        };
        socket.emit('chat:message', data);
    }   
});

message.addEventListener('keypress', () => {
    socket.emit('chat:typping', userName.value);
});

socket.on('chat:message', (data) => {
    output.innerHTML += `<div>
      <p><strong>${data.userName}</strong></p>
      <p>${data.message}</p>
    </div>`

    action.innerText = '';
});

socket.on('chat:typping', userName => {
    action.innerText = `${userName} esta escriebiendo`;
});