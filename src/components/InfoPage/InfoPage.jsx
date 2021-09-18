import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <h1> Technologies used in this Application</h1>
     <ul>
       <li>Postgres</li>
       <li> JavaScript</li>
       <li>React.Js</li>
       <li>CSS</li>
       <li>Redux</li>
       <li>Node.Js</li>
       <li>Saga </li>
       <li> Heroku</li>
       <li> Firebase</li>
       <li>Google Authentication</li>
     </ul>
    </div>
  );
}

export default InfoPage;
