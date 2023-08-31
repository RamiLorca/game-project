import {
  fetchAccountBalance,
  fetchLoginDetails,
} from "../utilities/accountUtils";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import {
  setAccountBalance,
  setActivated,
  setAuthorities,
  setId,
  setToken,
} from "../features/account";
import { useState } from "react";

const AccountBalance = () => {
  const accountId = useSelector((state: RootState) => state.account.account_id);
  const { token } = useSelector((state: RootState) => state.account);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { account } = useSelector((state: RootState) => ({
    account: state.account,
  }));

  const handleFetchAccountBalance = async () => {
    try {
      if (token) {
        const results = await fetchAccountBalance(accountId, token);
        dispatch(setAccountBalance(results.balance));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetchLoginDetails(username, password);

      dispatch(setId(response.user.password));
      dispatch(setActivated(response.user.activated));
      dispatch(setAuthorities(response.user.authorities.name));
      dispatch(setToken(response.token));

      setUsername("");
      setPassword("");

      console.log("Logged in as: " + username);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      <button onClick={handleFetchAccountBalance}>Fetch Account Balance</button>
      {/* {account.balance != null ? (
        <h1>Your account balance is: {account.balance}</h1>
      ) : (
        <h1>Loading account balance...</h1>
      )} */}
      {account.balance !== null && (
        <div>
          <h1>Your account balance is: {account.balance}</h1>
        </div>
      )}
    </div>
  );
};

// testing git rebase

export default AccountBalance;
