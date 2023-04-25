const fn = {
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
}

module.exports = fn
