import { render, screen } from '@testing-library/react'
import Hello from './Hello'

const user = {
  name: 'Tom',
  age: 31,
}

const user2 = {
  age: 20,
}

// snapshot을 통해서 테스트를 하면 스냅샷 폴더 생성후 결과가 나옴
// ex) 다른 이름을 작성한 후 실행하면 에러 발생 -> u 버튼 누르면 업데이트 되서 다시 정상화
test('snapshot: name 있음', () => {
  const el = () => {
    return render(<Hello user={user} />)
  }
  expect(el()).toMatchSnapshot()
})
test('snapshot: name 없음', () => {
  const el = () => {
    return render(<Hello user={user2} />)
  }
  expect(el()).toMatchSnapshot()
})

test('이름 없음', () => {
  const el = () => {
    return render(<Hello />)
  }
  expect(el()).toMatchSnapshot()
})

test('Hello라는 글자가 포함되는지', () => {
  render(<Hello user={user} />)
  const helloEl = screen.getByText(/Hello/i)
  expect(helloEl).toBeInTheDocument()
})
