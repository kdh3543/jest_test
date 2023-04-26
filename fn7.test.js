const fn = require('./fn')

// 목(mock) 함수 - 모의의, 가짜의
// mock function - 테스트하기 위해 흉내만 낸 함수

// const mockFn = jest.fn()

// mockFn()
// mockFn(1)

// test('함수는 2번 호출됨', () => {
//   expect(mockFn.mock.calls.length).toBe(2)
// })
// test('2번째로 호출된 함수에 전달된 첫번째 인수는 1임', () => {
//   expect(mockFn.mock.calls[1][0]).toBe(1)
// })

// function forEachAdd1(arr) {
//   arr.forEach((num) => {
//     mockFn(num + 1)
//   })
// }

// forEachAdd1([10, 20, 30])

// test('함수 호출은 3번 됩니다', () => {
//   expect(mockFn.mock.calls.length).toBe(3)
// })

// test('전달된 값은 11, 21, 31', () => {
//   console.log(mockFn.mock)
//   expect(mockFn.mock.calls[0][0]).toBe(11)
//   expect(mockFn.mock.calls[1][0]).toBe(21)
//   expect(mockFn.mock.calls[2][0]).toBe(31)
// })

const mockFn = jest.fn((num) => num + 1)

mockFn(10)
mockFn(20)
mockFn(30)

// test('함수 호출은 3번 됩니다', () => {
//   console.log(mockFn.mock.results) // 1씩 증가된 값이 나옴
//   expect(mockFn.mock.calls.length).toBe(3)
// })

test('10에서 1 증가한 값이 반환됨', () => {
  expect(mockFn.mock.results[0].value).toBe(11)
})
test('20에서 1 증가한 값이 반환됨', () => {
  expect(mockFn.mock.results[1].value).toBe(21)
})
test('30에서 1 증가한 값이 반환됨', () => {
  expect(mockFn.mock.results[2].value).toBe(31)
})

const mockFn1 = jest.fn()

mockFn1
  .mockReturnValueOnce(10)
  .mockReturnValueOnce(20)
  .mockReturnValueOnce(30)
  .mockReturnValue(40)

mockFn1()
mockFn1()
mockFn1()
mockFn1()

test('dd', () => {
  console.log(mockFn1.mock.results)
  expect('dd').toBe('dd')
})

// 홀수만 리턴
const mockFn2 = jest.fn()

mockFn2
  .mockReturnValueOnce(true)
  .mockReturnValueOnce(false)
  .mockReturnValueOnce(true)
  .mockReturnValueOnce(false)
  .mockReturnValue(true)

const result = [1, 2, 3, 4, 5].filter((num) => mockFn2(num))

test('홀수는 1, 3, 5', () => {
  expect(result).toStrictEqual([1, 3, 5])
})

// 비동기 함수를 흉내

const mockFn3 = jest.fn()

mockFn3.mockResolvedValue({ name: 'Mike' })

test('받아온 이름은 Mike', () => {
  mockFn3().then((res) => {
    expect(res.name).toBe('Mike')
  })
})
