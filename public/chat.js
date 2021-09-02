const socket = io.connect('http://localhost:3000')

const sender = document.getElementById('sender')
const message = document.getElementById('message')
const submitBtn = document.getElementById('submitBtn')
const output = document.getElementById('output')
const feedback = document.getElementById('feedback')

submitBtn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        sender: sender.value
    })
})

document.getElementById('message').onkeydown = function(e){
    sender: sender.value
    console.log(sender.value)
    socket.emit('typing', sender.value)
    if(e.keyCode == 13){
        socket.emit('chat', {
            message: message.value,
            sender: sender.value
        })
    }
}


socket.on('chat', data => {
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.sender + ': </strong>' + data.message + '</p>'
    message.value = '';
})


socket.on('typingListen', data => {

    feedback.innerHTML = '<p>' + data + ' is typing...</p>'
})
