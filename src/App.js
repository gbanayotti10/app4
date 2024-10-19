import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import Child1 from './Child1';
import Child2 from './Child2';

const App = () => {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    d3.csv('/tips.csv', d => ({
      total_bill: +d.total_bill, 
      tip: +d.tip,             
      day: d.day,                
    })).then(parsedData => {
      setData(parsedData);
    });
  }, []);

  return (
    <div>
      <Child1 data={data} />
      <Child2 data={data} />
    </div>
  );
};

export default App;
