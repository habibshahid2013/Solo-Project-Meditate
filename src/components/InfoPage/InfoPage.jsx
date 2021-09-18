import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
     <ul>

       <li>Postgres</li>
       <li>React.js</li>
       <li>CSS</li>
       <li>Redux</li>
       <li></li>
     </ul>
    </div>
  );
}

export default InfoPage;
