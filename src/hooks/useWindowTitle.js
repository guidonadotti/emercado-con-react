import { useEffect } from "react";

function useWindowTitle({ windowTitle }) {
  useEffect(() => {
    document.title = windowTitle;
  }, [windowTitle]);
}

export default useWindowTitle;
