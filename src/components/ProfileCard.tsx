import React, { useState, useEffect } from 'react';

function ProfileCard() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, []);

  // Format time to 12-hour format with AM/PM
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('alisyaalidin@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume/Alisya_Nidila_Resume.pdf';
    link.download = 'Alisya_Nidila_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-900 rounded-3xl p-6 text-white relative overflow-hidden">
          <div className="flex justify-between items-center mb-8">
            <span className="text-gray-400 text-sm font-medium">Frontend Developer</span>
            <div className="flex items-center text-white text-sm">
              <img
                src="/src/assets/icons/clock.svg"
                alt="Clock"
                className="w-4 h-4 mr-2"
              />
              {formatTime(currentTime)}
            </div>
          </div>

          <div className="flex items-center mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center mr-4 overflow-hidden">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-300 to-pink-300 flex items-center justify-center">
                <span className="text-white font-bold text-lg">AN</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold mb-1">Alisya Nidila</h1>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span className="text-gray-400 text-sm">Available for work</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleDownloadResume}
              className="flex-1 bg-gray-700 hover:bg-gray-600 rounded-2xl py-4 px-6 flex items-center justify-center font-medium transition-all duration-200 hover:scale-105"
            >
              <img
                src="/src/assets/icons/arrow-down-on-square.svg"
                alt="Download"
                width={20}
                height={20}
                className="w-5 h-5 mr-2"
              />
              Resume
            </button>
            <button
              onClick={handleCopyEmail}
              className="flex-1 bg-gray-700 hover:bg-gray-600 rounded-2xl py-4 px-6 flex items-center justify-center font-medium transition-all duration-200 hover:scale-105"
            >
              <img
                src="/src/assets/icons/clipboard-document-list.svg"
                alt="Copy"
                width={20}
                height={20}
                className="w-5 h-5 mr-2"
              />
              {emailCopied ? 'Copied!' : 'Copy Email'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
