import React, { useState } from "react";
import axios from "axios";

function App() {
  const [profile, setProfile] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Replace with your backend URL from Cloud Run
  //
  // 
  // const BACKEND_URL = "https://career-api-765236535362.us-central1.run.app";
  const BACKEND_URL = "https://career-api-765236535362.us-central1.run.app";
                      


  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${BACKEND_URL}/api/recommend`, {
        profile,
      });
      setResult(response.data);
    } catch (err) {
      console.error(err);
      alert("Error: " + err.message);
    }
    setLoading(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Career Compass AI</h1>
      <textarea
        className="border w-full p-2"
        rows="4"
        placeholder="Enter your background, skills, or interests..."
        value={profile}
        onChange={(e) => setProfile(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Loading..." : "Get Career Advice"}
      </button>

      {result && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Recommendations:</h2>
          <pre className="bg-gray-100 p-4 rounded mt-2">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;
