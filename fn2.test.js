const fn = require('./fn')

//toBeNull
//toBeUndefined
//toBeDefined

test('null은 null', () => {
  expect(null).toBeNull()
})

//toBeTruthy
//toBeFalsy

test('0은 false입니다.', () => {
  expect(fn.add(1, -1)).toBeFalsy()
})

test('비어있지 않음', () => {
  expect(fn.add('hello', 'world')).toBeTruthy()
})

//toBeGreaterThan 크다
//toBeGreaterThanOrEqual 크거나 같다
//toBeLessThan 작다
//toBeLessThanOrEqual 작거나 같다

test('iD는 10자 이하여야 됨', () => {
  const id = 'THE_BLACK_EYED_PEACE'
  expect(id.length).toBeGreaterThan(10)
})

// 정확히 맞는지
test('비밀번호는 4자리', () => {
  const pw = '1234'
  expect(pw.length).toBe(4)
})

// js는 언어 특성상 이진법을 써서 0.3이 안나옴
test('0.1 + 0.2 = 0.3', () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3)
})

// 정규표현식
test('Hello World에 a글자가 있어?', () => {
  expect('Hello World').toMatch(/H/)
})

// 배열
test('유저 리스트에 Mike가 있니?', () => {
  const user = 'Mike'
  const userList = ['Tom', 'Jane', 'Kei', 'Mike']
  expect(userList).toContain('Mike')
})
