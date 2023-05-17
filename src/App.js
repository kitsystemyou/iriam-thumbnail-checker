import './App.css';
import { React, useState } from 'react';

function App() {
  const imageWidth = 513; // IRIAM 推奨サイズ
  const [uploadImage, setUploadImage] = useState('default.png');
  const onFileInputChange = (e) => {
    if (!e.target.files) return;

    // ファイルを取得
    const fileObject = e.target.files[0];
    // オブジェクトURLを生成し、useState()を更新
    // ファイル選択でキャンセルを押下された場合はsrcを更新しない
    if (fileObject === undefined){
      return;
    }
    setUploadImage(window.URL.createObjectURL(fileObject));
  };

  return (
    <div className="App">
      <h1>IRIAIM サムネイルチェッカー</h1>
      <header className="App-header">
        <div className='Outer'>
        <img src={uploadImage} className="InputFile" alt="logo" width={imageWidth}/>
        <img src="live.png" className='Live' alt='live'></img>
        <img src="score.png" className='Score' alt='score'></img>
        </div>
        <input
          type='file'
          accept="image/*"
          onChange={onFileInputChange}
        />
        <p>※正方形の画像しか対応していませんので<br />ご了承くださいm(_ _)m</p>
      </header>
    </div>
  );
}

export default App;
