document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const chatMessages = document.getElementById("chat-messages");

    sendButton.addEventListener("click", function () {
        const message = messageInput.value;
        if (message.trim() !== "") {
            const messageElement = document.createElement("div");
            messageElement.className = "message";
            messageElement.innerText = message;
            chatMessages.appendChild(messageElement);
            messageInput.value = "";
        }
    });

    messageInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            sendButton.click();
        }
    });
});
