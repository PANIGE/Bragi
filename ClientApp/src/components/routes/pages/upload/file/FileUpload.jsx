import React, { useState } from 'react';

function UploadButton() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleFileRemove = (fileName) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <input type="file" multiple onChange={handleFileUpload} />
      <ul>
        {selectedFiles.map((file, index) => (
          <li key={index} onClick={() => handleFileRemove(file.name)}>
            {file.name}
          </li>
        ))}
      </ul>
      <button onClick={() => console.log(selectedFiles)}>Upload</button>
    </div>
  );
}

export default UploadButton;