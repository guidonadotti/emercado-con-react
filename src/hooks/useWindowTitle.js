import { useEffect } from "react";
const titulo_base = "e-mercado";

function useWindowTitle({ windowTitle }) {
  useEffect(() => {
    document.title = windowTitle || titulo_base;

    return () => {
      document.title = titulo_base;
    };
  }, [windowTitle]);
}

export default useWindowTitle;
