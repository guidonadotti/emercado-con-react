import { useEffect } from "react";

function useWindowTitle({ windowTitle }) {
  useEffect(() => {
    document.title = windowTitle;
  }, []);
}

export default useWindowTitle;
