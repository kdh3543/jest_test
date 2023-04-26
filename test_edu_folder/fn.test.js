const fn = require('./fn')

// test () 괄호에는 설명이 들어감 - 개발자들이 알아보게 설명
// Matcher
// toBe, toEqual, toStrictEqual(toEqual에 비해 더 엄격)

test('1은 1이야', () => {
  expect(1).toBe(1)
})

test('2더하기 3은 5야.', () => {
  expect(fn.add(2, 3)).toBe(5)
})

test('2더하기 3은 5야.', () => {
  expect(fn.add(2, 3)).toEqual(5)
})

test('3더하기 3은 5가 아니야', () => {
  expect(fn.add(3, 3)).not.toBe(5)
})

test('이름과 나이를 전달받아서 객체를 반환 toBe', () => {
  expect(fn.makeUser('Mike', 30)).toBe({
    name: 'Mike',
    age: 30,
  })
})

test('이름과 나이를 전달받아서 객체를 반환 toEqual', () => {
  expect(fn.makeUser('Mike', 30)).toEqual({
    name: 'Mike',
    age: 30,
  })
})

test('이름과 나이를 전달받아서 객체를 반환 toStrictEqual', () => {
  expect(fn.makeUser('Mike', 30)).toStrictEqual({
    name: 'Mike',
    age: 30,
  })
})

//에러
test('이거 에러 나나요?', () => {
  expect(() => fn.throwErr()).toThrow('xx')
})
