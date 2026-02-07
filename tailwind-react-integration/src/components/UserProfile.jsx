import mypic from "../assets/picture.jpg"

function UserProfile() {
  return (
    <div className="user-profile">user-profile bg-gray-100 p-8 max-w-xs mx-auto my-20 rounded-lg shadow-lg sm:p-4 md:max-w-sm md:p-8 hover:shadow-xl hover:translate-y-1 transition-shadow duration-300 ease-in-out">
      <img src={mypic} alt="User" className="rounded-full w-36 h-36 mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36 transform hover:scale-110 transition-transform duration-300 ease-in-out"/>
      <h1 className="text-xl text-blue-800 my-4 sm:text-lg md:text-xl hover:text-blue-500">John Doe</h1>
      <p className="text-gray-600 text-base sm:text-sm md:text-xl">Developer at Example Co. Loves to write code and explore new technologes.</p>
    </div>
  );
}

export default UserProfile;