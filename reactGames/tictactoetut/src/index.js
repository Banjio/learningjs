import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/* Writting suqare as class and not function component
class Square extends React.Component {
  render() {
    return (
      <button 
        className="square" 
        onClick={()=> this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}
*/
function Square(props){
  return(
    <button className="square" 
    onClick={props.onClick}>
      {props.value}
    </button>
  )
}

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }
  // This is not working currently because we cannot setState in board but why?
  resetBoard(){
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
    })
  }

  handleClick(i){
    // Ignore click if field is already filled or winner is found
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    /* slice(start=0, end=len(arr)) gives a subset of an array*/
    // Shorthand if-else syntax
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares, 
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return <Square 
    value={this.state.squares[i]}
    onClick={() => this.handleClick(i)}

    />;
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner){
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    /* 
            <!-- <div>
          <button onClick={this.resetBoard()}>Restart</button>
        </div> -->
        */
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
/*
When a Square is clicked, the onClick function provided by the Board is called. Here’s a review of how this is achieved:

The onClick prop on the built-in DOM <button> component tells React to set up a click event listener.
When the button is clicked, React will call the onClick event handler that is defined in Square’s render() method.
This event handler calls this.props.onClick(). The Square’s onClick prop was specified by the Board.
Since the Board passed onClick={() => this.handleClick(i)} to Square, the Square calls the Board’s handleClick(i) when clicked.
We have not defined the handleClick() method yet, so our code crashes. If you click a square now, you should see a red error screen saying something like “this.handleClick is not a function”.
*/

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      history: [{
      squares: Array(9).fill(null),
    }],
    xIsNext: true,
  };
  
  }
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
// TODO: Can this be written more efficient?
function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if(squares[a] && squares[a] == squares[b] & squares[a] == squares[c]) {
      return squares[a];
    }
  }
  return null;
}
// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
