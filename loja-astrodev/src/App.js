
import { GlobalStyle } from './GlobalStyle';
import Home from './paginas2/Home/HomePage';
import {results} from './data/data'
import { useState } from 'react';

function App() {

  const [satelites, setSatelites] = useState(results)
  // console.log(results);
  const addSatelite = () =>{
    const newSatelite = {
        "id": 6,
        "name": "Sputnik",
        "preco":2.799, 
        "image":"https://assets.b9.com.br/wp-content/uploads/2018/02/Google-Imagens.png"
    }

const newSateliteList = [...satelites, newSatelite]
    setSatelites(newSateliteList)

  }

  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <button onClick={addSatelite}>adicionar</button>
      <Home satelites={satelites}></Home>

    </div>
  );
}

export default App;
