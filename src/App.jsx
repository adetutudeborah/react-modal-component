/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';

const App = () => {

  const [profiles, updateProfiles] = useState([
            { id: 1, name: "Sophia Anderson", role: "Frontend Engineer", skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"], profilePic: "https://rb.gy/9jh39" },
            { id: 2, name: "Isabella Sullivan", role: "Senior Java Developer", skills: ["Java", "Spring Boot", "Spring Framework", "Maven"], profilePic: "https://rb.gy/gs5lt" },
            { id: 3, name: "Ava Reynolds", role: "Backend Developer", skills: ["Node.js", "Express", "MongoDB", "Nest.js"], profilePic: "https://rb.gy/rs32e" },
            { id: 4, name: "Olivia Thompson", role: "Blockchain Developer", skills: ["Web3", "JavaScript", "Solidity", "Rust", "Smart contracts"], profilePic: "https://rb.gy/xbjed"},
    
  ])

return (
  <div className='App'>

      <div className='profile-card'>

        {profiles.map(profile =>{
                return(< Card 
                  key={profile.id} 
                  id={profile.id} 
                  name={profile.name} 
                  skills={profile.skills} 
                  role={profile.role} 
                  profilePic={profile.profilePic} 
                  />)
                
              })}

    </div>

  </div>
)

}

export default App;
