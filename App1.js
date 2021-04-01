import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <Header/>
            <Content/>
         </div>
      );
   }
}

function Header() {
   
      return (
         <div>
            <h1>Header</h1>
         </div>
      )
   
}
const Content =() =>{
   
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
         </div>
      );
}

export default App;