// chatbot

document.getElementById('chatbot-icon').addEventListener('click', function () {
    document.getElementById('chatbot-container').style.display = 'block';
});

document.getElementById('close-chatbot').addEventListener('click', function () {
    document.getElementById('chatbot-container').style.display = 'none';
});

document.getElementById('send-message').addEventListener('click', function () {
    const userQuestion = document.getElementById('user-input').value;
    const chatMessages = document.getElementById('chat-messages');

    appendMessage('You', userQuestion);

    // Sample predefined responses based on specific questions
    let response = 'I do not have an answer to that question.';

    if (userQuestion.toLowerCase().includes('hello') || userQuestion.toLowerCase().includes('hi')) {
        response = 'Hello! How can I assist you today?';
    } else if (userQuestion.toLowerCase().includes('how are you')) {
        response = 'I am just a chatbot, but thanks for asking!';
    }

    appendMessage('Chatbot', response);
    document.getElementById('user-input').value = '';
});

function appendMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.innerText = `${sender}: ${message}`;
    document.getElementById('chat-messages').appendChild(messageDiv);
}



// testimonials 

