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
    <div>
      <h3>Things to expand on the application in the future</h3>
      <ol>
        <li>Build profile pages for individual users.</li>
        <li>Provide more styling for the appeal.</li>
        <li> make the dashboard more interactive.</li>
        <li> Create a matching feature through the interest provided in the registration.</li>
      </ol>

    </div>
    
    </div>
    
    
    
  );
}

export default InfoPage;
