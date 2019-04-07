import React from 'react';

import CalcButton from '../components/CalcButton';

// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onScreen: 0, // 0 for prefix, 1 for suffix, 2 for switching
      result: "0", // 1 + 2 = "3"
      selectedOperator: null, // 1 "+" 2
      prefix: "0", // "1" + 2
      suffix: "0", // 1 + "2"
      canReset: false
    };

    this.resetState = this.resetState.bind(this);
    this.calculate = this.calculate.bind(this);
    this.selectOperator = this.selectOperator.bind(this);
    this.toggleNegative = this.toggleNegative.bind(this);
    this.handlePrecentage = this.handlePrecentage.bind(this);
    this.decimalSeperator = this.decimalSeperator.bind(this);
  }

  resetState() {
    this.setState({
      onScreen: 0,
      result: "0",
      selectedOperator: null,
      prefix: "0",
      suffix: "0",
      canReset: false
    });
  }

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  }

  selectOperator( operator ) {
    if(this.state.onScreen === 1) this.calculate();
    this.setState({
      selectedOperator: operator,
      onScreen: 2,
      suffix: "0",
      canReset: false
    });
  }

  selectNumber( number ){
    if(this.state.canReset){
      this.setState({ prefix: number, canReset: false });
    }else if(this.state.onScreen === 0){
      if(this.state.prefix != "0")
        this.setState({ prefix: this.state.prefix.concat(number.toString()) });
      else
        this.setState({ prefix: number.toString() });
    }else{
      if(this.state.suffix != "0")
        this.setState({ suffix: this.state.suffix.concat(number.toString()) });
      else
        this.setState({ suffix: number.toString() });
    }
    if(this.state.onScreen === 2) this.setState({ onScreen: 1 });
  }

  calculate(){
    let res = null;
    if(this.state.selectedOperator === '+'){
      res = parseFloat(this.state.prefix) + parseFloat(this.state.suffix);
    }else if(this.state.selectedOperator === '-'){
      res = parseFloat(this.state.prefix) - parseFloat(this.state.suffix);
    }else if(this.state.selectedOperator === '*'){
      res = parseFloat(this.state.prefix) * parseFloat(this.state.suffix);
    }else if(this.state.selectedOperator === '/'){
      res = parseFloat(this.state.prefix) / parseFloat(this.state.suffix);
    }
    res = Math.round(res * 10000000) / 10000000;
    this.setState({
      onScreen: 0,
      result: res.toString(),
      prefix: res.toString(),
      canReset: true
    });
  }

  toggleNegative(){
    if(this.state.onScreen === 0) this.setState({ prefix: "-" + this.state.prefix });
    else this.setState({ suffix:  "-" + this.state.suffix });
  }

  handlePrecentage(){
    if(this.state.onScreen === 0) this.setState({ prefix: (0.01 * parseFloat(this.state.prefix)).toString() });
    else this.setState({ suffix: (0.01 * parseFloat(this.state.suffix)).toString() });
  }

  decimalSeperator(){
    if(this.state.canReset){
      this.setState({ prefix: "0.", canReset: false });
    }else if(this.state.onScreen === 0 && this.state.prefix.indexOf(".") == -1){
      this.setState({ prefix: this.state.prefix + "." });
    }else if(this.state.onScreen !== 0 && this.state.suffix.indexOf(".") == -1){
      this.setState({ suffix:  this.state.suffix + "." });
    }
  }

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{ ((this.state.onScreen !== 1) ? this.state.prefix : this.state.suffix) }</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState}>AC</CalcButton>
            <CalcButton onClick={this.toggleNegative}>+/-</CalcButton>
            <CalcButton onClick={this.handlePrecentage}>%</CalcButton>
            <CalcButton onClick={ () => this.selectOperator("/") } className="calc-operator">÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton onClick={ () => this.selectNumber(7) } className="calc-number">7</CalcButton>
            <CalcButton onClick={ () => this.selectNumber(8) } className="calc-number">8</CalcButton>
            <CalcButton onClick={ () => this.selectNumber(9) } className="calc-number">9</CalcButton>
            <CalcButton onClick={ () => this.selectOperator("*") } className="calc-operator">x</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton onClick={ () => this.selectNumber(4) } className="calc-number">4</CalcButton>
            <CalcButton onClick={ () => this.selectNumber(5) } className="calc-number">5</CalcButton>
            <CalcButton onClick={ () => this.selectNumber(6) } className="calc-number">6</CalcButton>
            <CalcButton onClick={ () => this.selectOperator("-") } className="calc-operator">-</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton onClick={ () => this.selectNumber(1) } className="calc-number">1</CalcButton>
            <CalcButton onClick={ () => this.selectNumber(2) } className="calc-number">2</CalcButton>
            <CalcButton onClick={ () => this.selectNumber(3) } className="calc-number">3</CalcButton>
            <CalcButton onClick={ () => this.selectOperator("+") } className="calc-operator">+</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton onClick={ () => this.selectNumber(0) } className="calc-number bigger-btn">0</CalcButton>
            <CalcButton onClick={this.decimalSeperator} className="calc-number">.</CalcButton>
            <CalcButton onClick={this.calculate} className="calc-operator">=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
