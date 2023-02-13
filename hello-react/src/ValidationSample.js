import { Component } from "react";
import './ValidationSample.css';

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false
  }

  handleChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }
  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000'
    });
    this.input.focus();
  }
  render(){
    return(
      <div>
        <input
          ref={(ref)=>{this.input=ref}}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={this.state.clicked ? (this.state.validated ? 'success' : 'failure'): ''}
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    )
  }
}
//input에서는 onChange 이벤트가 발새하면 handleChange를 호출하여 state의 password 값을 업데이트하게 함. button 에서는 onClick 이벤트가 발생하면 handleButtonClick을 호출하여 clicked 값을 참으로 설정했고, validated 값을 검증 결과로 설정. 
//input의 className 값은 버튼을 누르기 전에는 비어 있는 문자열을 전달하며, 버튼을 누른 후에는 검증 결과에 따라 success 값 또는 failure 값을 설정함. 이 값에 따라 input 색상이 초록색 또는 빨간색으로 나타남

export default ValidationSample;