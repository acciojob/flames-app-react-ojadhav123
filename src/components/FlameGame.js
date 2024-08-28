import React, { useState } from 'react';

const FlamesGame = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState('');

  const calculateRelationship = () => {
    if (!name1 || !name2) {
      setResult('Please Enter valid input');
      return;
    }

    const getRemainingLetters = (str1, str2) => {
      const count = {};
      let remaining = '';

      for (const char of str1) {
        count[char] = (count[char] || 0) + 1;
      }

      for (const char of str2) {
        if (count[char]) {
          count[char]--;
        } else {
          remaining += char;
        }
      }

      for (const char in count) {
        remaining += char.repeat(count[char]);
      }

      return remaining;
    };

    const remaining1 = getRemainingLetters(name1, name2);
    const remaining2 = getRemainingLetters(name2, name1);
    const totalRemainingLength = remaining1.length + remaining2.length;
    const index = totalRemainingLength % 6;

    const relationship = [
      'Siblings',
      'Friends',
      'Love',
      'Affection',
      'Marriage',
      'Enemy'
    ];

    setResult(relationship[index]);
  };

  const clearFields = () => {
    setName1('');
    setName2('');
    setResult('');
  };

  return (
    <div>
      <input
        type="text"
        data-testid="input1"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        placeholder="Enter first name"
      />
      <input
        type="text"
        data-testid="input2"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        placeholder="Enter second name"
      />
      <button
        data-testid="calculate_relationship"
        onClick={calculateRelationship}
      >
        Calculate Relationship
      </button>
      <button
        data-testid="clear"
        onClick={clearFields}
      >
        Clear
      </button>
      <h3 data-testid="answer">{result}</h3>
    </div>
  );
};

export default FlamesGame;
