import {
  fetchAccountBalance,
  fetchLoginDetails,
  register,
} from "../utilities/accountUtils";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import {
  setAccountBalance,
  setActivated,
  setAuthorities,
  setAccountId,
  setToken,
} from "../features/account";
import { useState } from "react";

const AccountBalance = () => {
  const accountId = useSelector((state: RootState) => state.account.account_id);
  const { token } = useSelector((state: RootState) => state.account);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

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

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await register(newUsername, newPassword);
      console.log(response);
      console.log("Account Balance: registered as " + newUsername);

      setNewUsername("");
      setNewPassword("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetchLoginDetails(username, password);

      dispatch(setAccountId(response.account.account_id));
      dispatch(setActivated(response.account.activated));
      dispatch(setAuthorities(response.account.authorities.name));
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
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Create New Username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />

        <input
          type="text"
          placeholder="Create Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>

      <br />
      <br />

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      <button onClick={handleFetchAccountBalance}>Fetch Account Balance</button>

      {account.balance !== null && (
        <div>
          <h1>Your account balance is: {account.balance}</h1>
        </div>
      )}
    </div>
  );
};

export default AccountBalance;
