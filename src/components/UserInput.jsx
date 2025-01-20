import React from 'react';

const UserInput = ({userInput, handleChange}) => {
  console.log('UserInput component rendered');

  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label>Initial investment</label>
          <input
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            value={userInput.initialInvestment}
            type="number" name='initialInvestment' required/>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            value={userInput.annualInvestment}
            type="number" name='annualInvestment' required/>
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label>Expected return</label>
          <input
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            value={userInput.expectedReturn}
            type="number" name='expectedReturn' required/>
        </p>
        <p>
          <label>Duration</label>
          <input
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            value={userInput.duration}
            type="number" name='duration' required/>
        </p>
      </div>
    </section>
  );
};

export default UserInput;