import { useState } from "react";
import fetchUserData from "../services/githubService";

function Search() {
  const [username, setUserName] = useState("")
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError(false)
    
    try{  
    const data = await fetchUserData(username);
    setUser(data);

    console.log(user)

    } catch(error) {
      setError(true)
    } finally {
      setIsLoading(false);
    }
   
  }

  return(
    <form onSubmit={handleSubmit} >
      <input type="text"
       placeholder="Enter github username here...." 
       value={username}
       onChange={(e) => setUserName(e.target.value)}/>
      <button type="submit">Search</button>


      {isLoading && <p>Loading....</p>}
      {error && <p>Looks like we cant find the user</p>}
      {user && (
        <div>
          <img src={user.avatar_url} alt="" />
          <h2>{user.login}</h2>
          <a href={user.html_url}>View profile</a>
        </div>
      )
      }
    </form>
  )
}

export default Search