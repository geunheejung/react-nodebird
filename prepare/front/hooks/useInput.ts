import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from "react";

const useInput = (
  initialValue: string
): [
  string,
  (e: ChangeEvent<HTMLInputElement>) => void,
  Dispatch<SetStateAction<string>>
] => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return [value, onChange, setValue];
};

export default useInput;
