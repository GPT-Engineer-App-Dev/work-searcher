import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import PostJob from "./pages/PostJob.jsx"; // Import the new PostJob component
import JobApplication from "./pages/JobApplication.jsx"; // Import the new JobApplication component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/post-job" element={<PostJob />} /> {/* Add the new route */}
      <Route path="/apply" element={<JobApplication />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;
