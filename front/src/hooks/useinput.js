import { useCallback, useState } from "react";

/**
 * 입력창에서 공통으로 사용되기 때문에 커스텀하여 따로 설정하였습니다.
 */
function useInput(text) {
  const [value, setValue] = useState(text);
  const onChangeValue = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, onChangeValue, setValue];
}

export default useInput;
