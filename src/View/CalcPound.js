import React from 'react';


export default class CalcPounds extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      height: '',
      weight: ''
    }
  }
  handleChange= ({target}) => {
    this.setState({[target.name] : [target.value]});

  };
  handleVerify= () => {
  let height = this.state.height;
  let weight = this.state.weight;
  let result = (parseFloat(weight) / parseFloat(height) / parseFloat(height) * 730 ).toString();
  alert(`Your BMI is ${result}`)
    }
  componentDidMount(){
    window.scrollTo(0, window.innerHeight ,'smooth')
  }
  handleScroll=() => {
    window.scrollTo(0, 0 ,'smooth')
  }


  render() {
    const { height, weight }= this.state;
    const { handleVerify, handleScroll} = this;
  return(
    <div className="App">
      <header className="App-header">
      <h3> Please fill this form to calculate yout BMI </h3>
        <form>
          <label> Your Height (Inches) </label>
          <input type='text' name="height" value={height} onChange={this.handleChange}/>
          <label> Your Weight (Pounds) </label>
          <input type='text' name="weight" value={weight} onChange={this.handleChange}/><br />
          <button type="button" onClick={handleVerify}>Verify</button>
          <button type='button' onClick={handleScroll}> Scroll to Top </button>
          </form>
      </header>
    </div>

  )
}
}
