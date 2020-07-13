// const Person = require('./person')

// // 인스턴스화 instantiate
// const person1 = new Person('minji', 20);
// const person2 = new Person('minsu', 25);

// // greeting
// person1.greeting();
// person1.goodbye();

// const fs = require('fs');
// const path = require('path');
// const {
//     dirname
// } = require('path');

// fs.mkdir(path.join(__dirname, 'test'), {}, function (err) {
//     if (err) throw err;
//     console.log('폴더가 생성이 되었습니다');
// })
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World', (err) => {
//     if (err) throw err;
//     console.log('파일이 생성되었습니다');
// });
// fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'nodejs.txt'), (err) => {
//     if (err) throw err;
//     console.log('파일명이 변경되었습니다')
// })


const http = require('http');

const PORT = 3000;

// 서버 생성
http.createServer((req, res) => {
    if (req.url === '/api/users') {
        const users = [{
                name: 'minji',
                age: 20
            },
            {
                name: 'minju',
                age: 36
            },
            {
                name: 'minsu',
                age: 17
            },
            {
                name: 'minje',
                age: 20
            },
            {
                name: 'miju',
                age: 31
            },
        ]
        res.write(JSON.stringify(users));

    } else if (req.url === "/api/todos") {
        const todos = [{
            todo: '숙제'
        }, {
            todo: '공부'
        }, {
            todo: '청소'
        }]
        res.write(JSON.stringify(todos))

    } else {
        res.write('<h1>Hello Node Js</h1>');
    }
    res.end();
}).listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})