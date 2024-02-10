import React from 'react';
import './CodeEditor.css';

const GDBOnlineIDE = () => {
  return (
    <div>
      <iframe
        title="GDB Online IDE"
        src="https://www.onlinegdb.com/online_c++_compiler"
        width="100%"
        height="800px"
      ></iframe>
    </div>
  );
};

export default GDBOnlineIDE;
