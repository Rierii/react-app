import React from 'react';


export default class CalcKilos extends React.Component {
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
  let result = (parseFloat(weight) / parseFloat(height) / parseFloat(height) ).toString();
  alert(`Your BMI is ${result}`)
    }
  componentDidMount(){
      window.scrollTo(0, window.innerHeight ,'smooth')
    }


  render() {
    const { height, weight }= this.state;
  return(
    <div className="App">
      <header className="App-header">
      <h3> Please fill this form to calculate yout BMI </h3>
        <form>
          <label> Your Height (M) </label>
          <input type='text' name="height" value={height} onChange={this.handleChange}/>
          <label> Your Weight (Kgs) </label>
          <input type='text' name="weight" value={weight} onChange={this.handleChange}/><br />
          <button type="button" onClick={this.handleVerify}>Verify</button>
          </form>
      </header>
    </div>

  )
}
}
