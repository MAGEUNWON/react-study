// 리액트 16.8 이전 버전에서는 함수 컴포넌트에서 state를 사용할 수 없었음. 하지만 16.8 이후부터는 useState라는 함수를 하용하여 함수 컴포넌트에서도 state를 사용할 수 있게 됨
import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  //useState는 한 컴포넌트에서 여러번 사용해도 상관 없음. 또 다른 상태를 useState로 관리 해봄
  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{color}}>{message}</h1>
      <button style={{color: 'red'}} onClick={()=>setColor('red')}>빨간색</button>
      <button style={{color: 'green'}} onClick={()=>setColor('green')}>초록색</button>
      <button style={{color:'blue'}} onClick={()=>setColor('blue')}>파란색</button>

    </div>
  )
}

export default Say;
