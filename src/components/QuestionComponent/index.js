import React, { useState } from 'react';

function QuestionComponent({ question, options, onAnswer }) {
	  const [selectedOption, setSelectedOption] = useState(null);

	  const handleOptionClick = (index) => {
		      setSelectedOption(index);
		      const isCorrect = index === options.findIndex(option => option === question.correctAnswer);
		      onAnswer(isCorrect); 
		    };

	  return (
		      <div>
		        <h3>{question}</h3>
		        <ul>
		          {options.map((option, index) => (
				            <li key={index}>
				              <button 
				                onClick={() => handleOptionClick(index)} 
				                disabled={selectedOption !== null} 
				              >
				                {option}
				              </button>
				            </li>
				          ))}
		        </ul>
		        {/* Optionally display feedback here */}
		      </div>
		    );
}

export default QuestionComponent;
