const fn = require('./fn')

// test.only / test.skip

let num = 0

test('0 더하기 1 은 1', () => {
  expect(fn.add(num, 1)).toBe(1)
})
test('0 더하기 2은 2', () => {
  expect(fn.add(num, 2)).toBe(2)
})

// test.skip은 테스트를 넘겨야 될 때 사용
test.skip('0 더하기 2은 2', () => {
  expect(fn.add(num, 2)).toBe(2)
  num = 10
})

// test.only는 그 테스트만 별도로 테스트 나머진 다 skip --> 외부 요인 때문에 에러가 떴는지에 대한 판단
test.only('0 더하기 5 은 5', () => {
  expect(fn.add(num, 5)).toBe(5)
})
