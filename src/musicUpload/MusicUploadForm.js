import React, { useState } from 'react';
import './musicUploadForm.css'
// import axios from 'axios';

const MusicUploadForm = () => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isButtonEnabled, setButtonEnabled] = useState(false);


  const handleFileChange = (e) => {
    setButtonEnabled(true)
    const selectedFile = e.target.files[0];
    setFile(selectedFile); 

    if (file) {
      const fileName = file.name;
      const fileExtension = fileName.split('.').pop().toLowerCase();
      if (fileExtension === 'mp3'|| fileExtension === 'wav') {
        console.log(`File is a ${fileExtension.toUpperCase()}`);
      } else {
        console.log('Please upload an MP3 or WAV file');
        e.target.value = null;
      }
    }

    setTimeout(() => {
      uploadFile(selectedFile);
    }, 1000);
  };


  const uploadFile = (selectedFile) => {
    const totalSize = selectedFile.size;
    let uploadedSize = 0;

    const uploadInterval = setInterval(() => {
      uploadedSize += 1024 * 1024; // Increase by 1 MB in each interval
      const progress = (uploadedSize / totalSize) * 100;

      setUploadProgress(progress);

      if (uploadedSize >= totalSize) {
        clearInterval(uploadInterval);
        setUploadProgress(100);
        console.log('File chosen!');
      }
    }, 1000);
  };

  const handleUpload = async () => {
    console.log(file)
    try {
      const formData = new FormData();
      formData.append('file', file);
      console.log('File uploaded successfully!');
      
      // await axios.post('http://localhost:3001/upload', formData, {
      //   onUploadProgress: (progressEvent)=> {setProgress(prevState=>{
      //     return {...prevState, pc: progressEvent.progress*100}
      //   })},
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // });
    
      // Update UI or state after successful upload
      
    } catch (error) {
      console.error('Error uploading file:', error.message);
      // setMsg("Upload failed")
    }
  };

  return (
    <div  className='mucisUploadStyle'>
      <div>Upload Your Music Here</div>
      <div>
        {/* accept=".mp3, .wav" */}
        <input type="file"  onChange={handleFileChange} />
        {isButtonEnabled && <button onClick={handleUpload}>Upload</button>}
        {/* {progress.started && <progress max="100" value={progress.pc}></progress>}
        {msg && <span>{msg}</span>} */}
        {file && (
        <div>
          <progress value={uploadProgress} max="100"></progress>
        </div>
      )}

      </div>
      
    </div>
  );
};

export default MusicUploadForm;