import { forwardRef, useRef } from "react";

const FolderDisplay = forwardRef(function FolderDisplay({ props, containerRef }) {
  const startWidthRef = useRef(null);  // Ref to store the initial width
  const minWidthRef = useRef(null);    // Ref to store the minimum allowed width

  const handleMouseDown = (e) => {
    e.preventDefault();

    const container = containerRef.current;

    if (!startWidthRef.current) {
      startWidthRef.current = container.offsetWidth;
      minWidthRef.current = startWidthRef.current * 0.75;  // Set minimum width to 75% of the original width
    }

    const startX = e.clientX;
    const startWidth = startWidthRef.current;
    const minWidth = minWidthRef.current;

    const onMouseMove = (e) => {
      const newWidth = startWidth + (e.clientX - startX);

      // Only allow resizing if new width is greater than or equal to the minimum width
      if (newWidth >= minWidth) {
        container.style.width = `${newWidth}px`;
      }
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="flex-1 flex">
        <div className="h-auto w-full border-r-2 border-black"></div>
        <div className="h-full border-black w-10"></div>
      </div>
      <div className="h-10 flex">
        <div className="w-full border-t-2 border-r-2 border-black"></div>
        <div
          className="w-10 border-t-2 border-black cursor-ew-resize"
          onMouseDown={handleMouseDown}
        ></div>
      </div>
    </div>
  );
});

export default FolderDisplay;
