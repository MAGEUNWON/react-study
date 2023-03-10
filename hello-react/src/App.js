import { Component } from 'react';
import './App.css'
// import MyName from './MyName';
// import classCounter from './classCounter';
// import Say from './useState';
// import EventPractice from './EventPractice';
// import ValidationSample from './ValidationSample';
// import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';

// const App = () =>{
  
//   return(
//     // <MyName name={"Geun won"}>리액트</MyName>
//     // <MyName name = "Geun Won" />
//     // <classCounter />
//     <ValidationSample />
//   )
// }

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ScrollBox ref={(ref) => this.scrollBox=ref} />
//         <button onClick={()=> this.scrollBox.scrollToBottom()}>
//           맨 밑으로
//         </button>
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <IterationSample />
    )
  }
}

export default App;


//*css 스타일 적용 예시
// const App = ()=>{
  //css 직접 지정
// 	const style = {
// 		backgroundColor: 'black',
// 		padding: '16px',
// 		color: 'white',
// 		fontSize: '12px'
// 	};

//   return (
//     <div style = {style}>
// 			안녕??!
// 		</div>
//   )

  //클래스 스타일 적용 방식
//   return (
//     <div className="App">
//       안녕??!
//     </div>
//   )
// }

//*props 클래스형 컴포넌트 적용 예시
  // class App extends Component {
  //   render() {
  //     return (
  //       <MyName name = "Geun Won" />
  //     )
  //   }
  // }
