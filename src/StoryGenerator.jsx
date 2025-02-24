import { useState } from 'react';

export default function StoryGenerator() {
  const [story, setStory] = useState('');
  const [theme, setTheme] = useState('Survival');
  console.log('StoryGenerator component is rendering');
  return <h1>Hello, world!</h1>;


  const fetchStory = async () => {
    const response = await fetch(`https://your-backend-url.onrender.com/get-story?theme=${theme}`);
    const data = await response.json();
    setStory(data.story);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Tell Me a Story</h1>
      <div className="mb-4">
        <label className="mr-2">Choose a theme:</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="p-2 rounded border border-gray-300"
        >
          <option value="Survival">Survival</option>
          <option value="Forbidden Knowledge">Forbidden Knowledge</option>
          <option value="Revenge">Revenge</option>
          <option value="Exploration">Exploration</option>
          <option value="Love & Loss">Love & Loss</option>
        </select>
      </div>
      <button onClick={fetchStory} className="bg-blue-500 text-white px-4 py-2 rounded-2xl shadow-md">
        Generate Story
      </button>
      {story && (
        <div className="mt-6 w-3/4 bg-white shadow-lg rounded-2xl p-4">
          <p className="text-lg leading-relaxed">{story}</p>
        </div>
      )}
    </div>
  );
}
