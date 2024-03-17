import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Load = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    if (selectedFile) {
      // Redirect to /project/loadfile if a file is selected
      navigate('/project/loadfile');
    } else {
      // Go back to the previous page
      this.goBack();
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Load;
