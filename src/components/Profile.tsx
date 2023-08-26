import { useSelector } from 'react-redux';
import type { RootState } from '../store';


const Profile = () => {

  const { user, theme } = useSelector((state: RootState) => ({
    user: state.user,
    theme: state.theme.color,
  }));

  return (
    <div style={{ color: theme }}>
        <h1>Profile Page</h1>
        <p>Name: {user.name} </p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
    </div>
  )
}

export default Profile;