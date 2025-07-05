// kivaInteractive.js
const levelsData = [
 {
    id: 'kiva',
    name: 'KiVA (Easy)',
    imageSrc: 'https://storage.googleapis.com/kiva-challenge/images/k.jpg',
    caption: '<strong>KiVA:</strong> changing object identity only<br/><br/>Rule: Make five of any object.<br/><br/>Answer: (A)'
  },
  {
    id: 'kiva-functions',
    name: 'KiVA-functions (Moderate)',
    imageSrc: 'https://storage.googleapis.com/kiva-challenge/images/kf.jpg',
    caption: '<strong>KiVA-functions:</strong> changing object identity & 1 visual feature (e.g., number)<br/><br/>Rule: Subtract one from any number of any object.<br/><br/>Answer: (C)'
  },
  {
    id: 'kiva-functions-compositionality',
    name: 'KiVA-functions-compositionality (Difficult)',
    imageSrc: 'https://storage.googleapis.com/kiva-challenge/images/kfc.jpg',
    caption: '<strong>KiVA-functions-compositionality:</strong> changing object identity and 2 visual features (e.g., number and orientation)<br/><br/>Rule: Subtract one AND rotate 180° to any number and orientation of any object.<br/><br/>Answer: (A)'
  }
];

function App() {
  const [selectedLevel, setSelectedLevel] = React.useState(levelsData[0]);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden my-8"> {/* Added margin for spacing */}

      {/* Navigation Tabs */}
      <div className="flex flex-col sm:flex-row justify-around p-4 sm:p-6 bg-gray-50 border-b border-gray-200">
        {levelsData.map((level) => (
          <button
            key={level.id}
            onClick={() => setSelectedLevel(level)}
            // Changed text-lg to text-base for smaller font size
            className={`flex-1 py-3 px-4 mx-1 sm:mx-2 text-center text-sm font-semibold rounded-lg transition-all duration-300 ease-in-out
              ${selectedLevel.id === level.id
                ? 'bg-blue-500 text-white shadow-md transform scale-105'
                : 'bg-transparent text-gray-700 hover:bg-blue-100 hover:text-blue-700'
              }`}
          >
            {level.name}
          </button>
        ))}
      </div>

      {/* Content Display */}
      <div className="p-6 sm:p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
        {selectedLevel && (
          <>
            {/* Image Section - Made container larger (md:w-3/5) and image clickable */}
            <div className="w-full md:w-3/5 flex-shrink-0">
              <a href={selectedLevel.imageSrc} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                <img
                  src={selectedLevel.imageSrc}
                  alt={`${selectedLevel.name} Example`}
                  className="w-full h-auto rounded-xl shadow-lg object-cover transform transition-transform duration-200 hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null; // Prevent looping
                    e.target.src = `https://placehold.co/400x300/FF0000/FFFFFF?text=Image+Error`; // Fallback image
                  }}
                />
              </a>
            </div>

            {/* Caption Section */}
            <div className="w-full md:w-2/5 text-gray-800"> {/* Adjusted width for caption section */}
              <p className="text-sm sm:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: selectedLevel.caption }}></p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// Render the React App component into the root HTML element
const domContainer = document.querySelector('#kiva-interactive-root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);
