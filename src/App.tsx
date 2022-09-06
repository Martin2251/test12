import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  function sum (a:number, b:number):number{
    return a + b
  }

  describe ("Sum" , () => {
    describe("Given two number",  () => {
      describe("When both numbers are postive integers", () => {
        //arrange 
        const firstNumber = 5;
        const secondNumber = 10;
        it("Then it returns the correct addition of both", () => {
          //ACT
          const result =sum(firstNumber, secondNumber);
          //ASSERT
          expect(result).toEqual(15);
        })
      })
    })
  })
  return (
    <div className="App">

    </div>
  );
}

export default App;
