const socket = io('https://exquisite-custard-45c4ef.netlify.app/');
const messages = document.getElementById('messages');
const msgForm = document.getElementById('msgForm');



socket.on('message', data => {
    console.log(data)
    appendMessages(data[0],data[1])
})
socket.on('output-messages', data => {
    console.log(data)
    if (data.length) {
        data.forEach(message => {
            appendMessages(message.username,message.msg)
        });
    }
})
msgForm.addEventListener('submit', e => {
    e.preventDefault()
    var array=[msgForm.name.value,msgForm.msg.value]
    socket.emit('chatmessage', array)
    console.log('[CLIENT]Username: ', msgForm.name.value) 
    console.log('[CLIENT]Message: ', msgForm.msg.value)
    msgForm.msg.value = '';
    msgForm.name.value = '';


})

function appendMessages(name,message) {
    const html = `<div><li>${name}</li><br><li>${message}</li></div>`
    messages.innerHTML += html
}
