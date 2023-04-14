import React from 'react';
// import './App.css';
import './styles.css';
import AceEditor from "react-ace";
import Nav from './components/navbar'
import LButton from './components/loadingButton'


import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/ext-language_tools";

function onChange(newValue) {
  console.log("change", newValue);
}

function App() {
  return (
    <>
      <Nav />
      <LButton/>
      <AceEditor
        placeholder="Start coding!"
        mode="c_cpp"
        theme="solarized_dark"
        onChange={onChange}
        name="blah2"
        className='code-editor'
        editorProps={{ $blockScrolling: true }}
        showGutter={true}
        fontSize={20}
        highlightActiveLine={true}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true
        }}
        width={`${(window.innerWidth / 2)}px`}
        height={`${window.innerHeight}px`}
      />
    </>
  );
}

export default App;
