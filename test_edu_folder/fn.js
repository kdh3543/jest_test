const fn = {
  createUser: (name) => {
    console.log('사용자가 생성됨')
    return { name }
  },
  add: (num1, num2) => num1 + num2,
  makeUser: (name, age) => ({ name, age, gender: undefined }),
  throwErr: () => {
    throw new Error('xx')
  },
  // callback
  getName: (callback) => {
    const name = 'Mike'
    setTimeout(() => {
      callback(name)
      // throw new Error('서버 에러....')
    }, 2000)
  },

  // promise
  getAge: () => {
    const age = 30
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(age)
      }, 3000)
    })
  },
  connectUserDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          name: 'Mike',
          age: 30,
          gender: 'male',
        })
      }, 500)
    })
  },
  disconnectUserDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res()
      }, 500)
    })
  },
  connectCarDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          brand: 'bmw',
          name: 'z4',
          color: 'red',
        })
      }, 500)
    })
  },
  disconnectCarDb: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res()
      }, 500)
    })
  },
}

module.exports = fn
