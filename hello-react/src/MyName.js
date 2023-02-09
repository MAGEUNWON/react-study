//함수형 컴포넌트
const MyName = ({name})=>{
  return (
    <div>
      안녕! 내 이름은 {name} 이야.
    </div>
  )
}

//실수로 props를 빠뜨릴 때, 혹은 특정 상황에 props를 일부러 비워둬야 할 때가 있음. 그러한 경우에 props의 기본값을 설정해 줄 수 있는데 그것이 바로 defaultProps임!
//아래처럼 써주면 <MyName /> 이런식으로 name 값을 생략해버리면 "기본이름" 이 나타남. 
MyName.defaultProps = {
  name : '기본이름' 
}

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