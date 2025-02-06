'use client';

import { useState } from 'react';

export default function Calculator() {
    const [input, setInput] = useState('');
    const buttons = ['C', '<', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

    const handleClick = (value) => {
        if (value === '=') {
            try {
                setInput(eval(input).toString()); 
            } catch {
                setInput('Error');
            }
        } else if (value === 'C') {
            setInput('');
        } else if (value === '<') {
            setInput(input.slice(0, -1)); 
        } else {
            setInput(input + value);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <div className="mb-4 p-4 bg-gray-200 text-right text-2xl rounded">{input || '0'}</div>
                <div className="grid grid-cols-4 gap-2">
                    {buttons.map((btn) => (
                        <button
                            key={btn}
                            className={`${
                                btn === 'C'
                                    ? 'bg-red-500 text-white'
                                    : btn === '='
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-300 hover:bg-gray-400'
                            } p-4 rounded-lg border shadow-md`}
                            onClick={() => handleClick(btn)}
                        >
                            {btn}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}


