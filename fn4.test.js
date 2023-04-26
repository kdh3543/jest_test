const fn = require('./fn')

// 테스트 전 후 작업
// let num = 0
// 그대로 실행하면 num에 새로운 값이 할당되서 첫번째만 성공하고 나머지는 다 실패!
// beforeEach() - test를 실행하기 이전에 변수 값을 초기화
// afterEach() - test를 실행한 이후에 변수 값을 초기화

let num = 10
beforeEach(() => {
  num = 0
})

test('0 + 1은 1이야', () => {
  num = fn.add(num, 1)
  expect(num).toBe(1)
})

test('0 + 2는 2야', () => {
  num = fn.add(num, 2)
  expect(num).toBe(2)
})

test('0 + 3은 3이야', () => {
  num = fn.add(num, 3)
  expect(num).toBe(3)
})

test('0 + 4는 4야', () => {
  num = fn.add(num, 4)
  expect(num).toBe(4)
})

// db는 처음에 연결하고 마지막에 끊기만 하면 됨
// beforeEach(), afterEach()는 테스트 전 후에 실행시키기 때문에 비효율
// beforeAll()
// afterAll()
let user

beforeAll(async () => {
  user = await fn.connectUserDb()
})
afterAll(() => {
  return fn.connectUserDb()
})

test('이름은 Mike', () => {
  expect(user.name).toBe('Mike')
})

test('나이는 30', () => {
  expect(user.age).toBe(30)
})

test('성별은 남성', () => {
  expect(user.gender).toBe('male')
})

// 테스트 db가 많아졌을 때
// describe - 비슷한 작업을 수행할 때
describe('Car 관련 작업', () => {
  let car

  beforeAll(async () => {
    car = await fn.connectCarDb()
  })
  afterAll(() => {
    return fn.disconnectCarDb()
  })

  test('이름은 z4', () => {
    expect(car.name).toBe('z4')
  })

  test('브랜드는 bmw', () => {
    expect(car.brand).toBe('bmw')
  })

  test('색상은 red', () => {
    expect(car.color).toBe('red')
  })
})
