import { useEffect } from "react";

function App() {

  useEffect(() => {
    fetch("http://localhost:8080/api/hello")
      .then((response) => {
        console.log("Status:", response.status);
        return response.text();
      })
      .then((data) => {
        console.log("Response from backend:", data);
      })
      .catch((error) => {
        console.error("Error occurred:", error);
      });
  }, []);

  return (
    <div>
      <h1>React Frontend Running</h1>
      <p>Open console (F12) to see backend response</p>
    </div>
  );
}

export default App;