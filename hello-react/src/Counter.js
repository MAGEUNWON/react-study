import React, { Component } from "react";

class Counter extends Component{
  // state 초기값을 constructor 메서드로 선언 
  // constructor(props){
  //   super(props);

  //   //state의 초깃값 설정하기
  //   this.state = {
  //     number:0
  //   };
  // }

  // state를 constructor에서 꺼내기
  state = {
    number: 0,
    fixedNumber: 0
  }

  render(){
    const {number} = this.state; // state를 조회할 때 this.state로 조회함
    return (
      <div>
        <h1>{number}</h1>
        <button
          //onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
          onClick={()=>{
            //this.setState를 사용하여 state에 새로운 값을 넣을 수 있음. 
            this.setState(
              {
                number: number +1
              },
              //setState를 사용하여 값을 업테이트 하고 난 다음에 특정 작업을 하고 싶을 때는 setState의 두번째 파라미터로 콜백 함수를 등록하여 작업을 처리 할 수 있음.
              () => {
                console.log('방금 setState가 호출 되었습니다.');
                console.log(this.state);
              }
            );

            
            //객체 대신 함수 인자 전달하기
            // this.setState((prevState)=>{
            //   return{
            //     number: prevState.number +1
            //   }
            // });
            //위코드와 아래 코드는 완전히 똑같은 기능을 함
            //아래 코드는 함수에서 바로 객체를 반환한다는 의미
            // this.setState(prevState => ({
            //   number:prevState.number + 1
            // }))
            //이렇게 두 번 설정했기 때문에 이제 버튼 누르면 2씩 숫자가 올라감
          }}
        >
          +1

        </button>
      </div>
    )
  }
}



// const Counter = ()=>{
//   state = {
//     number:0
//   }
//   handleIncrease = ()=>{
//     this.setState({
//       number: this.state.number + 1
//     });
//   }
//   handleDecrease = () => {
//     this.setState({
//       number: this.state.number -1
//     });
//   }

//   return(
//     <div>
//       <h1>카운터</h1>
//       <div>값: {this.state.number}</div>
//       <button onClick = {this.handleIncrease}>+</button>
//       <button onClick = {this.handleDecrease}>-</button>
//     </div>
//   )
// }

export default Counter;