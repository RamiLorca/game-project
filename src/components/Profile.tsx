import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store';
import { fetchUserPreferences } from '../utilities/apiUtils';
import { setUserPreferences } from '../features/user';

const Profile = () => {

  const dispatch = useDispatch();

  const { user, theme } = useSelector((state: RootState) => ({
    user: state.user,
    theme: state.theme.color,
  }));

  const handleFetchPreferences = async () => {
    try {
      const preferences = await fetchUserPreferences(user.id);
      dispatch(setUserPreferences(preferences));
    } catch (error) {
      console.error(error);
      console.trace();
    }
  };

  return (
    <div style={{ color: theme }}>
        <h1>Profile Page</h1>
        <p>Name: {user.name} </p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
        <br />
        <button onClick={handleFetchPreferences}>Fetch Preferences</button>
        {user.preferences !== null && (
          <div>
            <h2>Preferences</h2>
            <p>Username: {user.preferences.username}</p>
            <p>Action?: {user.preferences.wants_action.toString()}</p>
          </div>
        )}
    </div>
  );
};

export default Profile;