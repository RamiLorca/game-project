import { useState, useCallback, ChangeEvent } from "react";
import { getSearchSuggestions } from "../utilities/accountUtils";
import { debounce } from "lodash";

const UsernameSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = useCallback(
    debounce((event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setInputValue(value);
      if (value) {
        setLoading(true);
        getSearchSuggestions(value)
          .then((response: string[]) => {
            setOptions(response);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching search suggestions: ", error);
            setLoading(false);
          });
      } else {
        setOptions([]);
      }
    }, 500),
    []
  );

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type to search"
      />

      <div className="suggest-container">
        <ul>
          {loading && <li>Loading...</li>}
          {options.map((value: string, index: number) => (
            <li key={`${value}-${index}`}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsernameSearch;
