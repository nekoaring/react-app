import React from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

const baseURL = "http://localhost:8000"
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

function App() {
  const [result, setResult] = React.useState(null);

  /**
   * おみくじAPIを呼び出します
   */
  function choice_mikuji() {
    // API呼び出し
    axios.get(baseURL).then((response) => {
      // レスポンスをresultにセット
      setResult(response.data);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* おみくじボタン */}
        <button onClick={choice_mikuji}>CHOICE!</button>
        {/* 結果表示エリア */}
        <p className='Result'>{result}</p>
      </header>
    </div>
  );
}

export default App;
