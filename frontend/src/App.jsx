import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Editor from './components/Editor';
import Output from './components/Output';
import LanguageDropdown from './components/LanguageDropdown'; // Import LanguageDropdown component

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    console.log('Selected language:', lang);
  };

  // Define your list of languages
  const languages = [
    { label: 'Python', value: 'python' },
    { label: 'C', value: 'c' },
    { label: 'C++', value: 'cpp' },
    { label: 'Ruby', value: 'ruby' },
    { label: 'JavaScript', value: 'javascript' },
    { label: 'Java', value: 'java' },
    { label: 'Go', value: 'go' },
    { label: 'Rust', value: 'rust' },
    { label: 'Swift', value: 'swift' },
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-4">
        <h1 className="text-2xl font-bold mb-4">Compiler Platform</h1>
        <LanguageDropdown languages={languages} onChange={handleLanguageChange} />
        <Editor /> 
        <Output />
      </div>
    </div>
  );
};

export default App;
