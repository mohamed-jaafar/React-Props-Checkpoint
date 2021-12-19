
import './App.css';
import Profile from './profile/profile';
import photo from './profile/Photomed.jfif'

function App() {
  const alertMyProfile = name => alert('Profile : '+name);
  const stylePhoto = {
    border: '5px solid white',
    borderRadius: '300px',
    marginTop: '50px',
    marginBottom: '20px',
  }
  return (
    <div className = "App">
      <Profile 
      fullName = 'mohamed ben jaafar' 
      bio = 'Im  FullStack  JS  intern  at  Gomycode' 
      profession = 'student' 
      handleName = {alertMyProfile}>
        <img src={photo} alt = "Picmed" style = {stylePhoto}/>
      </Profile>
    </div>
  );
}

export default App;