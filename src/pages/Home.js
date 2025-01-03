import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");

  const fetchuserData = async () => {
    try {
      const userResponse = await axios.get(
        `http://localhost:8001/api/users/search?query=${username}`
      );
      // const repoResponse = await axios.get(
      //   `http://localhost:8001/api/users/${username}/repos`
      // );
      console.log(userResponse);
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };
  return (
    <div>
      <h1>GitHub User App</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={fetchuserData}>Search</button>
    </div>
  );
}
