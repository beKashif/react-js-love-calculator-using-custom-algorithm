import React, { useState } from 'react'

const LoveCalculator = () => {
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const [loveScore, setloveScore] = useState(null)

    const isInputValid = () => {
        return name1.trim() !== '' && name2.trim() !== '';
    }

    const calculateLoveScoreFunction = () => {
        if (isInputValid()) {
            const randomScore = Math.floor(Math.random() * 101);
            setloveScore(randomScore);
        }
    }

    const calculateLoveScoreAlgorithm = () => {
        if (isInputValid()) {
            const name1Lower = name1.toLocaleLowerCase();
        const name2Lower = name2.toLocaleLowerCase();

        let Score = 0;

        // calculate the sum of values of all characters in name1
        for (let i = 0; i < name1Lower.length; i++) {
            const charCode = name1Lower.charCodeAt(i) - 96 //'a is1, 'b' is 2, and so on
            Score += charCode;
        }
        // calculate the sum of values of all characters in name2
        for (let i = 0; i < name2Lower.length; i++) {
            const charCode = name2Lower.charCodeAt(i) - 96 //'a is1, 'b' is 2, and so on
            Score += charCode;
        }

        //calculate the love score (between 0 and 100)
        Score = Score % 101;

        setloveScore(Score);
        }
    };

    return (
        <div className='love-calculator-container'>
            <h1>
                ReactJs Love Calculator
            </h1>
            <div className='input-row'>
                <input
                    type='text'
                    placeholder='❤'
                    value={name1}
                    onChange={(e) => setName1(e.target.value)}
                />
                <p>💕</p>
                <input
                    type='text'
                    placeholder='❤'
                    value={name2}
                    onChange={(e) => setName2(e.target.value)}
                />
            </div>
            <div className='button-row'>
                <button
                    onClick={calculateLoveScoreAlgorithm}
                >
                    Calculate by Algorithm
                </button>
                <button
                    onClick={calculateLoveScoreFunction}
                >
                    Calculate by Function
                </button>
            </div>
            {
                loveScore !== null && (
                    <div className='result'><p>Love Score is {loveScore}</p></div>
                )
            }
        </div>
    )
}

export default LoveCalculator