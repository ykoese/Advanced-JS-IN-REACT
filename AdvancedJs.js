/* 
In previous challenges, you learned how to inject JavaScript code into JSX code using curly braces, { }, for tasks like accessing props, passing props, accessing state, inserting comments into your code, and most recently, styling your components. These are all common use cases to put JavaScript in JSX, but they aren't the only way that you can utilize JavaScript code in your React components.

You can also write JavaScript directly in your render methods, 
before the return statement, without inserting it inside of curly braces.
 This is because it is not yet within the JSX code.
  When you want to use a variable later in the JSX code 
  inside the return statement, 
you place the variable name inside curly braces.
*/

const inputStyle = {
    width: 235,
    margin: 5
  }
  
  class MagicEightBall extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userInput: '',
        randomIndex: ''
      }
      this.ask = this.ask.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    ask() {
      if (this.state.userInput) {
        this.setState({
          randomIndex: Math.floor(Math.random() * 20),
          userInput: ''
        });
      }
    }
    handleChange(event) {
      this.setState({
        userInput: event.target.value
      });
    }
    render() {
      const possibleAnswers = [
        'It is certain',
        'It is decidedly so',
        'Without a doubt', 
        'Yes, definitely',
        'You may rely on it',
        'As I see it, yes',
        'Outlook good',
        'Yes',
        'Signs point to yes',
        'Reply hazy try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        'Don\'t count on it', 
        'My reply is no',
        'My sources say no',
        'Most likely',
        'Outlook not so good',
        'Very doubtful'
      ];
      const answer = possibleAnswers[this.state.randomIndex] //arrayle random indexi eslestir
      return (
        <div>
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.handleChange}
            style={inputStyle} /><br />
          <button onClick={this.ask}>
            Ask the Magic Eight Ball!
          </button><br />
          <h3>Answer:</h3>
          <p>
            {answer}
          </p>
        </div>
      );
    }
  };


  /* React: Render with an If/Else Condition

Another application of using JavaScript to control your rendered view is to tie the elements that are rendered to a condition. When the condition is true, one view renders. When it's false, it's a different view. You can do this with a standard if/else statement in the render() method of a React component. */

/* 
MyComponent contains a boolean in its state which tracks whether 
you want to display some element in the UI or not. 
The button toggles the state of this value. Currently, it renders the same UI every time. Rewrite the render() method with an if/else statement so that if display is true, you return the current markup.
 Otherwise, return the markup without the h1 element.
*/

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: true
      }
      this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
      this.setState({
        display: !this.state.display
      });
    }
    render() {
      // change code below this line
   if(this.state.display==true) {
      return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
           <h1>Displayed!</h1>
         </div>
      );
   } else {
     return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
           
         </div>
      );
   }
    }
  };

  /* 
  React: Use && for a More Concise Conditional

The if/else statements worked in the last challenge, but there's a more concise way to achieve the same result. Imagine that you are tracking several conditions in a component and you want different elements to render depending on each of these conditions. If you write a lot of else if statements to return slightly different UIs, you may repeat code which leaves room for error. Instead, you can use the && logical operator to perform conditional logic in a more concise way. This is possible because you want to check if a condition is true, and if it is, return some markup. Here's an example:

{condition && <p>markup</p>}
  */

 class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: true
      }
      this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
      this.setState({
        display: !this.state.display
      });
    }
    render() {
      // change code below this line
      return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display &&  <h1>Displayed!</h1>}
         </div>
      );
    }
  };

  /* 
  
  React: Use a Ternary Expression for Conditional Rendering
inside return
Before moving on to dynamic rendering techniques, there's one last way 
to use built-in JavaScript conditionals to render what you want: 
the ternary operator. The ternary operator is often utilized 
as a shortcut for if/else statements in JavaScript. They're not quite as robust as traditional if/else statements, but they are very popular among React developers. One reason for this is because of how JSX is compiled, if/else statements can't be inserted directly into JSX code. You might have noticed this a couple challenges ago — when an if/else statement was required, it was always outside the return statement. Ternary expressions can be an excellent alternative if you want to implement conditional logic within your JSX. Recall that a ternary operator has three parts, but you can combine 
seve

condition ? expressionIfTrue : expressionIfFalseral ternary expressions together. Here's the basic syntax:


  */


const inputStyle = {
    width: 235,
    margin: 5
  }
  
  class CheckUserAge extends React.Component {
    constructor(props) {
      super(props);
      // change code below this line
     this.state ={
       input:'',
       userAge:''
     }
      // change code above this line
      this.submit = this.submit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
      this.setState({
        input: e.target.value,
        userAge: ''
      });
    }
    submit() {
      this.setState({
        userAge: this.state.input
      });
    }
    render() {
      const buttonOne = <button onClick={this.submit}>Submit</button>;
      const buttonTwo = <button>You May Enter</button>;
      const buttonThree = <button>You Shall Not Pass</button>;
      return (
        <div>
          <h3>Enter Your Age to Continue</h3>
          <input
            style={inputStyle}
            type="number"
            value={this.state.input}
            onChange={this.handleChange} /><br />
          {
            (this.state.userAge >= 18) ? buttonTwo : (this.state.userAge== '')? buttonOne: buttonThree
          }
        </div>
      );
    }
  };

  /* 
  Render Conditionally from Props
  */
 
 class Results extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <h1>
        {
          (this.props.fiftyFifty > .5) ? 'You Win!' : 'You lose!'
        }
        </h1>
      )
    };
  };
  
  class GameOfChance extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 1
      }
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({
        counter: this.state.counter+1
      });
    }
    render() {
      let expression = Math.random()*1
      return (
        <div>
          <button onClick={this.handleClick}>Play Again</button>
          <Results fiftyFifty={expression} />
          { /* change code below this line */ }
  
          { /* change code above this line */ }
          <p>{'Turn: ' + this.state.counter}</p>
        </div>
      );
    }
  };