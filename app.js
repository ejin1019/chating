// 노드모듈안에 있어서 경로를 안 넣어줌
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.set('views', `${__dirname}/public`);
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public', {
    extensions: ['html']
}))

io.on('connection', (socket) => {
    console.log('User connected...');
    socket.on('chatting', (data) => {
        io.sockets.emit('chatting', data);
    })
})



app.get('/', (req, res) => {
    res.render('index')
})
app.get('/api/users', (req, res) => {
    const users = [{
        name: 'aaa',
        age: 10
    }]
    res.send(users)
})
// app.listen(PORT, () => {
//     console.log(`server is running on ${PORT}`);
// })
http.listen(PORT, () => console.log(`server is running on ${PORT}`));