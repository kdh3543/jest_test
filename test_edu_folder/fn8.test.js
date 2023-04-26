const fn = require('./fn')

// mock 함수를 생성함으로써 실제로 생성시키진 않음
jest.mock('./fn')

fn.createUser.mockReturnValue({ name: 'Mike' })

// mock 함수를 사용하지 않고 실행하면 실제로 db에 유저가 생성됨
test('유저를 만든다', () => {
  const user = fn.createUser('Mike')
  expect(user.name).toBe('Mike')
})

const mockFn = jest.fn()

mockFn(10, 20)
mockFn()
mockFn(30, 40)

test('한번 이상 호출', () => {
  expect(mockFn).toBeCalled()
})
test('정확히 3번 호출', () => {
  expect(mockFn).toBeCalledTimes(3)
})
test('10이랑 20을 전달받은 함수가 있는지', () => {
  expect(mockFn).toBeCalledWith(10, 20)
})
test('마지막 함수는 30, 40을 전달 받았는지', () => {
  expect(mockFn).lastCalledWith(30, 40)
})
