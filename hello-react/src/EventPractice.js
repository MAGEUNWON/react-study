import {useState} from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });
  const {username, message} = form;
  const onChange = e => {
    const nextForm = {
      ...form, //기존의 form 내용을 이 자리에 복사한 뒤
      [e.target.name]: e.target.value // 원하는 값으 덮어 씌우기
      //객체 안에서 key를 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 사용 됨
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ': ' + message);
    setForm({
      username: '',
      message: '',
    });
  };
  const onKeyPress = e => {
    if(e.key === 'Enter'){
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input 
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  )
}

// const EventPractice = () =>{
//   const [username, setUsername] = useState('');
//   const [message, setMessage] = useState('');
//   const onChangeUsername = e => setUsername(e.target.value);
//   const onChangeMessage = e => setMessage(e.target.value);
//   const onClick = () => {
//     alert(username + ': ' + message);
//     setUsername('');
//     setMessage('');
//   };
//   const onKeyPress = e => {
//     if (e.key === 'Enter') { 
//       onClick();
//     }
//   };
//   //두 번째 텍스트 인풋에서 텍스틀 입력하고 enter를 누르면 handleClick 메서드가 실행됨

//   return (
//     <div>
//       <h1>이벤트 연습</h1>
//       <input
//         type="text"
//         name="username"
//         placeholder="사용자명"
//         value={username}
//         onChange={onChangeUsername}
//       />
//       <input 
//         type = "text"
//         name = "message"
//         placeholder="아무거나 입력해 보세요"
//         value={message}
//         onChange={onChangeMessage}
//         onKeyPress={onKeyPress}
//       />
//     </div>
//   );
// };

export default EventPractice;

