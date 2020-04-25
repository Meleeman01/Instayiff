//main 
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    console.log('ayyyyye');
    const firstName = 'bob';
    const lastName = 'dankman';

    return (<h1>Hello {`${firstName} ${lastName}`}!</h1>);
    
    
}

ReactDOM.render(<App />,document.getElementById('root'));