import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useState } from "react";

const DisplayUserInfo = () => {

  const { user } = useSelector((state: RootState) => ({
    user: state.user,
  }));

  const [showAction, setShowAction] = useState(false);
  const [showDrama, setShowDrama] = useState(false);
  const [showId, setShowId] = useState(false);

  const handleShowAction = () => {
    setShowAction(!showAction);
  };

  const handleShowDrama = () => {
    setShowDrama(!showDrama);
  };

  const handleShowId = () => {
    setShowId(!showId);
  };

  return (
    <div>
        <h1>DisplayUserInfo</h1>

        <button onClick={handleShowAction}>Show Action</button>
        {showAction && user.preferences !== null && (
            <p>Action: {user.preferences.wants_action.toString()} </p>
        )}

        <br />

        <button onClick={handleShowDrama}>Show Drama</button>
        {showDrama && user.preferences !== null && (
            <p>Action: {user.preferences.wants_drama.toString()} </p>
        )}

        <br />

        <button onClick={handleShowId}>Show ID Number</button>
        {showId && user.preferences !== null && (
            <p>Action: {user.preferences.user_id.toString()} </p>
        )}

        <br />
    </div>
  );
};

export default DisplayUserInfo;