import io from 'socket.io-client';
const socket = io('http://localhost:3000/');

socket.on('message', (data) => {
    // Handle incoming messages here
  });

  socket.emit('chatMessage', 'Hello, WebSocket Server!');

  export default {
    data() {
      return {
        socket: null,
      };
    },
    created() {
      this.socket = io('http://localhost:3000/');
      this.socket.on('message', (data) => {
        // Handle incoming messages here
      });
    },
    methods: {
      sendMessage() {
        // Emit messages to the server
        this.socket.emit('chatMessage', 'Hello, WebSocket Server!');
      },
    },
  };
  