import React from 'react';
import './Graph.css';

const Graph = () => {
  const data = [
    { month: 'Jan', value: [0, 10] },
    { month: 'Feb', value: [40, 30] }, // Assuming two values for Feb
    { month: 'Mar', value: [20, 15] },
    { month: 'Apr', value: [30, 20] },
    { month: 'May', value: [40, 25] },
    { month: 'Jun', value: [0, 5] },
    { month: 'Jul', value: [0, 0] },
  ];

  return (
    <div id="graph-main" style={{ color: 'black' }}>
      <div id="customer-text">
        <div id="customer-left">
          <h4>Customer Habit</h4>
          <p>Track Your customer habit</p>
        </div>
        <div id="customer-right">
          <h5>This Year</h5>
        </div>
      </div>
      <div id="user-habit">
        <div id="user-left">
          <div id="solved-colour"></div>
          <p>Solved Question</p>
        </div>
        <div id="user-right">
        <div id="unsolved-colour"></div>
          <p>Unsolved Question</p>
        </div>
      </div>
      <div id="graph">
        <div id="graph-left">
          {[...Array(5)].map((_, index) => (
            <p key={index}>{index * 10}</p>
          ))}
        </div>
        <div id="graph-bottom">
          {data.map((item) => (
            <p key={item.month}>{item.month}</p>
          ))}
        </div>
        <div id="bars">
          {data.map((item) => (
            <div key={item.month} className="bar-wrapper">
              {item.value.map((val, index) => (
                <div
                  key={index}
                  style={{
                    height: `${(val / 40) * 100}px`,
                    backgroundColor: index === 0 ? 'gray' : 'green',
                    width: '30px',
                    margin: '0 2px',
                  }}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Graph;
