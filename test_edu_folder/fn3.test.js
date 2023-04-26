const fn = require('./fn')

//비동기 함수 호출

// callback을 사용할 땐 done을 사용해줘야 됨

// test('3초 후에 받아온 이름은 Mike', () => {
//   function callback(name) {
//     expect(name).toBe('Mike')
//   }
//   fn.getName(callback)
// })

// test('3초 후에 받아온 이름은 Mike', () => {
//   function callback(name) {
//     expect(name).toBe('Tom')
//   }
//   fn.getName(callback)
// })
// callback 함수의 비동기 함수를 기다리지 않고 먼저 끝나버림

// test('3초 후에 받아온 이름은 Mike', (done) => {
//   function callback(name) {
//     try {
//       expect(name).toBe('Mike')
//       done()
//     } catch (error) {
//       done()
//     }
//   }
//   fn.getName(callback)
// })

// promise를 사용할 땐 return 사용

// test('3초 후에 받아온 나이는 30 promise', () => {
//   // return fn.getAge().then((age) => {
//   //   expect(age).toBe(30)
//   // })
//   return expect(fn.getAge()).resolves.toBe(30)
// })

// async await
test('3초 후에 받아온 나이는 30 async', async () => {
  // const age = await fn.getAge()
  // expect(age).toBe(30)
  await expect(fn.getAge()).resolves.toBe(30)
})
