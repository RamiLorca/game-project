import { useDispatch, useSelector } from "react-redux";
import { setUserId } from '../features/user';
import { RootState } from "../store";

const IdSlider = () => {

  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.user.preferences?.user_id);


  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    dispatch(setUserId(value));
  };

  return (
    <div>

        <h1>Id Slider</h1>
        <input 
            type="range"
            min={1}
            max={100}
            value={userId}
            onChange={handleSliderChange} 
        />
        <p>User ID: {userId}</p>
    </div>
  );
};

export default IdSlider;