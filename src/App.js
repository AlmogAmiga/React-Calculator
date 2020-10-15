import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'fontsource-roboto';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';




class Calculator extends React.Component {

  constructor(props) {
      super(props);
      
      this.state = {
        input: '0'
      };

    this.calc = this.calc.bind(this);
  }

  calc() {
    let res = 0;
    let expr = this.state.input.split(' ');
    // Split the expression to parts by splitting by whitespace
    

    // Calculate multiplication and division first
    for (let i = 0; i < expr.length; i++) {
        
        if (expr[i] === 'x') {
            expr[i-1] = parseFloat(expr[i-1]) * parseFloat(expr[i+1]);
            expr.splice(i, 2);
            i--;
        }

        else if (expr[i] === '/') {
            expr[i-1] = parseFloat(expr[i-1]) / parseFloat(expr[i+1]);
            expr.splice(i, 2);
            i--;
        }

      }

    /* 15 - 15 */
    // Next calculate addition and subtraction
    for (let i = 0; i < expr.length; i++) {
        
      if (expr[i] === '+') {
          expr[i-1] = parseFloat(expr[i-1]) + parseFloat(expr[i+1]);
          expr.splice(i, 2);
          i--;
      }

      else if (expr[i] === '-') {
          expr[i-1] = parseFloat(expr[i-1]) - parseFloat(expr[i+1]);
          expr.splice(i, 2);
          i--;
      }

    }

    res = expr[0]; // Getting the result of the expression

    this.setState({
      input: res
    });
  }

  render() {
      return (<div id='main-theme'>
          <h1 id='screen'>{this.state.input}</h1>
          <Grid container id='first-line' spacing={1}>
            <Grid item xs={3}>
              <Button variant="contained" color="primary" onClick={() => {this.setState({input: this.state.input === '0' ? '7' : this.state.input + '7'})}}>7</Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" color="primary" onClick={() => {this.setState({input: this.state.input === '0' ? '8' :  this.state.input + '8'})}}>8</Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" color="primary" onClick={() => {this.setState({input: this.state.input === '0' ? '9' : this.state.input + '9'})}}>9</Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" color="primary" onClick={() => {this.setState({input: this.state.input + ' - '})}}>-</Button>
            </Grid>
          </Grid>
          <Grid container id='second-line' spacing={1}>
            <Grid item xs={3}>
              <Button variant="contained" color="primary" onClick={() => {this.setState({input: this.state.input === '0' ? '4' : this.state.input + '4'})}}>4</Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" color="primary" onClick={() => {this.setState({input: this.state.input === '0' ? '5' :  this.state.input + '5'})}}>5</Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" color="primary" onClick={() => {this.setState({input: this.state.input === '0' ? '6' : this.state.input + '6'})}}>6</Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" color="primary" onClick={() => {this.setState({input: this.state.input + ' + '})}}>+</Button>
            </Grid>
          </Grid>
          <Grid container id='third-line' spacing={1}>
            <Grid item xs={3}>
              <Button variant="contained" color="primary" onClick={() => {this.setState({input: this.state.input === '0' ? '1' : this.state.input + '1'})}}>1</Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" color="primary" onClick={() => {this.setState({input: this.state.input === '0' ? '2' :  this.state.input + '2'})}}>2</Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" color="primary" onClick={() => {this.setState({input: this.state.input === '0' ? '3' :  this.state.input + '3'})}}>3</Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" color="primary" onClick={this.calc}>=</Button>
            </Grid>
          </Grid>
          
          <Grid container id='fourth-line' spacing={1}>
            <Grid item xs={3}>
              <Button variant="contained" color="primary" onClick={() => {this.setState({input: this.state.input === '0' ? '0' :  this.state.input + '0'})}}>0</Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" color="primary" onClick={() => {this.setState({input: this.state.input + '.'})}}>.</Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" color="primary" onClick={() => {this.setState({input: this.state.input + ' x '})}}>X</Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" color="primary" onClick={() => {this.setState({input: this.state.input + ' / '})}}>/</Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" color="primary" onClick={() => {this.setState({input: '0'})}}>AC</Button>
            </Grid>
          </Grid>
      </div>);
  }

};

function App() {
  return (
    <div className='dark-theme'>
      <h1 id='main-title'>React Calculator</h1>
      <Calculator />
    </div>
  );
}

export default App;
/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */