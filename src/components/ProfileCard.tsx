import { useState, useEffect } from 'react';

function ProfileCard() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time to 12-hour format with AM/PM
  const formatTime = (date: Date) => {
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

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/nidilalisya', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/alisyanidila', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-900 rounded-3xl overflow-hidden">
          {/* Main card content */}
          <div className="p-6 text-white">
            {/* Header with role and time */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <span className="text-gray-400 text-sm font-medium">Frontend Developer</span>
                <div className="text-xs text-gray-500 mt-1">React • TypeScript • JavaScript</div>
              </div>
              <div className="flex items-center text-white text-sm">
                <img src="/assets/icons/clock.svg" alt="Clock" className="w-4 h-4 mr-2" />
                {formatTime(currentTime)}
              </div>
            </div>

            {/* Profile section */}
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full mr-4 overflow-hidden">
                <img
                  src="/assets/img/alisya.jpg"
                  alt="Alisya Nidila"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-semibold mb-1">Alisya Nidila</h1>
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-gray-400 text-sm">Available for work</span>
                </div>
                <div className="text-xs text-gray-500">1+ years experience</div>
              </div>
            </div>

            {/* Skills/Tech stack */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-sky-400 text-xs px-2 py-1 rounded-full">React</span>
                <span className="bg-sky-400 text-xs px-2 py-1 rounded-full">React Native</span>
                <span className="bg-blue-700 text-xs px-2 py-1 rounded-full">TypeScript</span>
                <span className="bg-amber-700 text-xs px-2 py-1 rounded-full">JavaScript</span>
                <span className="bg-green-600 text-xs px-2 py-1 rounded-full">MySQL</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-700 text-xs px-2 py-1 rounded-full">Figma</span>
                <span className="bg-rose-800 text-xs px-2 py-1 rounded-full">Tailwind CSS</span>
                <span className="bg-teal-800 text-xs px-2 py-1 rounded-full">RESTful APIs</span>
                <span className="bg-gray-700 text-xs px-2 py-1 rounded-full">Git</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 mb-4">
              <button
                onClick={handleDownloadResume}
                className="flex-1 bg-gray-700 hover:bg-gray-600 rounded-2xl p-3 flex items-center justify-center font-medium transition-all duration-200 hover:scale-105"
              >
                <img
                  src="/assets/icons/arrow-down-on-square.svg"
                  alt="Download"
                  width={20}
                  height={20}
                  className="w-5 h-5 mr-2"
                />
                Resume
              </button>
              <button
                onClick={handleCopyEmail}
                className="flex-1 bg-gray-700 hover:bg-gray-600 rounded-2xl p-3 flex items-center justify-center font-medium transition-all duration-200 hover:scale-105"
              >
                <img
                  src="/assets/icons/clipboard-document-list.svg"
                  alt="Copy"
                  width={20}
                  height={20}
                  className="w-5 h-5 mr-2"
                />
                {emailCopied ? 'Copied!' : 'Email'}
              </button>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              <button
                onClick={handleLinkedInClick}
                className="flex-1 bg-blue-600 hover:bg-blue-500 rounded-2xl p-3 flex items-center justify-center font-medium transition-all duration-200 hover:scale-105"
              >
                <img
                  src="/assets/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  className="w-5 h-5 mr-2"
                />
                LinkedIn
              </button>
              <button
                onClick={handleGitHubClick}
                className="flex-1 bg-gray-700 hover:bg-gray-600 rounded-2xl p-3 flex items-center justify-center font-medium transition-all duration-200 hover:scale-105"
              >
                <img
                  src="/assets/icons/github.svg"
                  alt="GitHub"
                  width={20}
                  height={20}
                  className="w-5 h-5 mr-2"
                />
                GitHub
              </button>
            </div>
          </div>

          {/* Green bottom section */}
          <div
            className="p-4 text-gray-900"
            style={{ background: 'linear-gradient(to right, #87CEEB, #C8A2C8)' }}
          >
            <div className="flex items-center justify-center">
              <img
                src="/assets/icons/code.svg"
                alt="Code"
                width={20}
                height={20}
                className="w-5 h-5 mr-2"
              />
              <span className="font-medium">Built with React and TailwindCSS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
