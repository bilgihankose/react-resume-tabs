import { useState, useEffect } from "react";
import Loading from "./Components/Loading";
import Jobs from "./Components/Jobs";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
        <Jobs jobs={jobs} value={value} />
      </div>
    </section>
  );
}

export default App;
