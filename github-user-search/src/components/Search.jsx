
import { useState } from "react";
import fetchUserData from "../services/githubService";

function Search() {
  const [username, setUserName] = useState("")
  const [location, setLocation] = useState("");
  const [repoCount, setRepoCount] = useState("")
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError(false)
    
    try{  
    const data = await fetchUserData(username, location, repoCount);
    setUser([...user, ...data.items]);

    console.log(user)

    } catch(error) {
      setError(true)
    } finally {
      setIsLoading(false);
    }
   
  }

  return(
    <form onSubmit={handleSubmit} >
      <div className="flex flex-col gap-y-5 items-center w-50 my-0 mx-auto">
        <div>
          <label htmlFor="user-name">Username</label>
          <input type="text"
           placeholder="Enter github username here...."
           value={username}
           onChange={(e) => setUserName(e.target.value)} className="border w-100" id="user-name"/>
        </div>

         <div>
          <label htmlFor="location">Location</label>
          <input type="text"
           placeholder="Enter user location" 
           className="border w-100" 
           id="location"
           value={location}
           onChange={(e) => setLocation(e.target.value)}
           />
          </div>
  
         <div>
          <label htmlFor="repo-count">Repository Count</label>
          <input type="text"
           className="border w-100" 
           id="repo-count"
           value={repoCount}
           onChange={(e) => setRepoCount(e.target.value)}
           />
          </div>

          <button type="submit" className="m-auto border px-4 py-2 bg-black text-white cursor-pointer">Search</button>
      </div>
     


      {isLoading && <p>Loading....</p>}
      {error && <p>Looks like we cant find the user</p>}
      {user && (
        <div className="my-19 mx-auto w-50">
          <img src={user.avatar_url} alt="" className="w-50"/>
          <h2 className="">{user.login}</h2>
          <a href={user.html_url} className="text-blue-600">View profile</a>
        </div>
      )
      }
    </form>
  )
}

export default Search
