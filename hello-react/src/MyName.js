//propTypes를 통한 props 검증하기 위해 가져 온 것
import PropTypes from 'prop-types';

//함수형 컴포넌트
//*비구조화 할당 문법을 통해 props 내부 값 추출.(구조 분해 문법)
const MyName = ({name, children})=>{
  return (
    <div>
      안녕! 내 이름은 {name} 이야.<br />
      children 값은 {children} 이야.
    </div>
  )
}


//실수로 props를 빠뜨릴 때, 혹은 특정 상황에 props를 일부러 비워둬야 할 때가 있음. 그러한 경우에 props의 기본값을 설정해 줄 수 있는데 그것이 바로 defaultProps임!
//아래처럼 써주면 <MyName /> 이런식으로 name 값을 생략해버리면 "기본이름" 이 나타남. 
MyName.defaultProps = {
  name : '기본이름' 
}

//컴포넌트의 필수 props를 지정하거나 props의 타입을 지정할 때는 propTypes를 사용. 지정 방법은 defaultProp을 설정하는 것과 비슷함

MyName.propTypes = {
  name : PropTypes.string
};
//이러면 app.js에서 name 입력할 때 문자열만 입력 가능. 숫자 쓰면 실행은 되는데 브라우저 개발자 도구 콘솔 탭에 오류 메시지가 뜸(F12에서 오류 뜸)

//클래스형 컴포넌트
// class MyName extends Component {
//   render() {
//     return (
//       <div>
//         안녕! 내 이름은 <b>{this.props.name}</b> 이야.
//       </div>
//     )
//   }
// }

export default MyName;