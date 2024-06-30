import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Editor from './components/Editor';
import Output from './components/Output';
import LanguageDropdown from './components/LanguageDropdown';
import { compileCode } from './utils/codecorrectors';

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [code, setCode] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [output, setOutput] = useState('');
  const [showOutput, setShowOutput] = useState(false);

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setCode(files[lang]?.value || '');
    setShowOutput(false);
  };

  const handleCompilation = async () => {
    const result = await compileCode(selectedLanguage.toLowerCase(), code, inputValue);
    setOutput(result !== undefined ? result.toString() : 'No output');
    setShowOutput(true);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-4">
        <h1 className="text-2xl font-bold mb-4">Compiler Platform</h1>
        <LanguageDropdown
          languages={[
            { label: 'Python', value: 'python' },
            { label: 'C', value: 'c' },
            { label: 'C++', value: 'cpp' },
            { label: 'Ruby', value: 'ruby' },
            { label: 'JavaScript', value: 'javascript' },
            { label: 'Java', value: 'java' },
            { label: 'Go', value: 'go' },
            { label: 'Rust', value: 'rust' },
            { label: 'Swift', value: 'swift' },
          ]}
          onChange={handleLanguageChange}
        />
        <Editor value={code} onChange={setCode} />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2"
          onClick={handleCompilation}
        >
          Run Code
        </button>
        {showOutput && <Output output={output} />}
      </div>
    </div>
  );
};

export default App;
