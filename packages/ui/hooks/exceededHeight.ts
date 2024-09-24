import { RefObject, useEffect, useState } from "react";
import { debounce } from "lodash-es";
const useExceededHeight = (open: boolean, ref: RefObject<HTMLDivElement>) => {
  const [exceededHeight, setExceededHeight] = useState(false);

  useEffect(() => {
    const handleResize = debounce(() => {
      if (ref.current && open) {
        const parentElement = ref.current?.parentElement;
        const parentHeight = parentElement
          ? parentElement.clientHeight -
            parseFloat(window.getComputedStyle(parentElement).paddingTop)
          : 0;
        const childHeight = ref.current.clientHeight;
        setExceededHeight(childHeight > parentHeight);
      }
    }, 100);

    if (open) {
      const timer = setTimeout(() => {
        // 화면 랜더링 시간 버퍼
        handleResize();
      }, 100);
      window.addEventListener("resize", handleResize);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("resize", handleResize);
      };
    } else {
      return;
    }
  }, [open, ref]);

  return exceededHeight;
};

export default useExceededHeight;
