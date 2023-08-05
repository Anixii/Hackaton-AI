import React, { useState } from 'react';

const AudioRecorder = () => {
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [audioSrc, setAudioSrc] = useState('');

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          setRecordedChunks((prev) => [...prev, e.data]);
        }
      };
      setMediaRecorder(recorder);
      recorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && isRecording) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  const saveAndPlayAudio = async () => {
    if (recordedChunks.length === 0) {
      console.warn("No recorded audio available.");
      return;
    }

    const blob = new Blob(recordedChunks, { type: 'audio/wav' });
    const dataURL = URL.createObjectURL(blob);
    setAudioSrc(dataURL);

    // Adding a small delay before playing the audio to ensure the src is set correctly.
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Play the audio programmatically.
    const audioElement = new Audio(dataURL);
    audioElement.play();
  };

  return (
    <div>
      <button onClick={startRecording} disabled={isRecording}>
        Start Recording
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        Stop Recording
      </button>
      <button onClick={saveAndPlayAudio} disabled={recordedChunks.length === 0}>
        Save and Play Audio
      </button>
      {audioSrc && <audio controls src={audioSrc} />}
    </div>
  );
};

export default AudioRecorder;

// import React, { useState } from 'react';

// const AudioRecorder = () => {
//   const [mediaRecorder, setMediaRecorder] = useState(null);
//   const [recordedChunks, setRecordedChunks] = useState([]);
//   const [isRecording, setIsRecording] = useState(false);
//   const [audioSrc, setAudioSrc] = useState('');

//   const startRecording = () => {
//     const constraints = { audio: true };
//     navigator.mediaDevices.getUserMedia(constraints)
//       .then((stream) => {
//         const recorder = new MediaRecorder(stream);
//         recorder.ondataavailable = (e) => {
//           if (e.data.size > 0) {
//             setRecordedChunks((prev) => [...prev, e.data]);
//           }
//         };
//         setMediaRecorder(recorder);
//         recorder.start();
//         setIsRecording(true);
//       })
//       .catch((err) => console.error("Error accessing microphone:", err));
//   };

//   const stopRecording = () => {
//     if (mediaRecorder && isRecording) {
//       mediaRecorder.stop();
//       setIsRecording(false);
//       const blob = new Blob(recordedChunks, { type: 'audio/wav' });
//       const dataURL = URL.createObjectURL(blob);
//       setAudioSrc(dataURL); // Use dataURL directly instead of Blob URL.
//     }

//   };

// //   const saveAndSendAudio = () => {
// //     if (recordedChunks.length === 0) {
// //       console.warn("No recorded audio available.");
// //       return;
// //     }

// //     const blob = new Blob(recordedChunks, { type: 'audio/wav' });
// //     const formData = new FormData();
// //     formData.append('audio', blob, 'recorded_audio.wav');

// //     // Replace 'YOUR_UPLOAD_ENDPOINT' with the actual API endpoint to upload the audio to the server.
// //     fetch('YOUR_UPLOAD_ENDPOINT', {
// //       method: 'POST',
// //       body: formData,
// //     })
// //       .then((response) => response.json())
// //       .then((data) => {
// //         console.log('Audio uploaded successfully:', data);
// //         // Perform any additional actions after successful upload.
// //         const objectURL = URL.createObjectURL(blob);
// //         setAudioSrc(objectURL);
// //       })
// //       .catch((error) => {
// //         console.error('Error uploading audio:', error);
// //         // Handle error scenarios if needed.
// //       });
// //   };
//   console.log(audioSrc,recordedChunks,mediaRecorder);
//   return (
//     <div>
//       <button onClick={startRecording} disabled={isRecording}>
//         Start Recording
//       </button>
//       <button onClick={stopRecording} disabled={!isRecording}>
//         Stop Recording
//       </button>
//       {/* <button onClick={saveAndSendAudio} disabled={recordedChunks.length === 0}>
//         Save and Send Audio
//       </button> */}
//       <audio controls src={audioSrc} />
//     </div>
//   );
// };

// export default AudioRecorder;
