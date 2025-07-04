// kivaInteractive.js
const levelsData = [
  {
    id: 'kiva',
    name: 'KiVA (Easy)',
    imageSrc: 'https://storage.googleapis.com/kiva-challenge/images/k.jpg', // Replace with your k.jpg URL
    caption: 'KiVA examines generalization to novel objects (e.g., rule: 6 new objects decrease by 1 in number). This level primarily tests basic object recognition and simple rule application to new instances of familiar categories, focusing on the ability to apply a learned rule to objects not seen during training.'
  },
  {
    id: 'kiva-functions',
    name: 'KiVA-functions (Moderate)',
    imageSrc: 'https://storage.googleapis.com/kiva-challenge/images/kf.jpg', // Replace with your kf.jpg URL
    caption: 'KiVA-functions examines generalization to novel values of visual features through functional inference (e.g., rule: new number of new objects decrease by 1 in number). Here, the model must infer a function that applies to a range of feature values (like number or size), not just specific objects, demonstrating an understanding of the underlying relationship.'
  },
  {
    id: 'kiva-functions-compositionality',
    name: 'KiVA-functions-compositionality (Difficult)',
    imageSrc: 'https://storage.googleapis.com/kiva-challenge/images/kf', // Replace with your kfc.jpg URL
    caption: 'KiVA-functions-compositionality examines generalization to novel values and combinations of visual features, testing functional and compositional reasoning (e.g., rule: new number and new orientation of new objects decrease by 1 in number and rotate by 180 degrees in orientation). This is the most complex level, requiring the model to combine multiple inferred functions and apply them to unseen feature combinations.'
  }
];

function App() {
  const [selectedLevel, setSelectedLevel] = React.useState(levelsData[0]);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden my-8"> {/* Added margin for spacing */}
      {/* Header */}
      <div className="p-6 sm:p-8 bg-blue-600 text-white text-center rounded-t-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">KiVA </h1>
        <p className="text-blue-200 text-lg">Explore the different challenges in visual reasoning.</p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-col sm:flex-row justify-around p-4 sm:p-6 bg-gray-50 border-b border-gray-200">
        {levelsData.map((level) => (
          <button
            key={level.id}
            onClick={() => setSelectedLevel(level)}
            className={`flex-1 py-3 px-4 mx-1 sm:mx-2 text-center text-lg font-semibold rounded-lg transition-all duration-300 ease-in-out
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
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex-shrink-0">
              <img
                src={selectedLevel.imageSrc}
                alt={`${selectedLevel.name} Example`}
                className="w-full h-auto rounded-xl shadow-lg object-cover"
                onError={(e) => {
                  e.target.onerror = null; // Prevent looping
                  e.target.src = `https://placehold.co/400x300/FF0000/FFFFFF?text=Image+Error`; // Fallback image
                }}
              />
            </div>

            {/* Caption Section */}
            <div className="w-full md:w-1/2 text-gray-800">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-700">{selectedLevel.name}</h2>
              <p className="text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: selectedLevel.caption }}></p>
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
