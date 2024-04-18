import { forwardRef, useRef } from "react";

const FolderDisplay = forwardRef(function FolderDisplay({ props, containerRef }) {
  const startWidthRef = useRef(null);  // Ref to store the initial width
  const startHeightRef = useRef(null); // Ref to store the initial height
  const minWidthRef = useRef(null);    // Ref to store the minimum allowed width
  const minHeightRef = useRef(null);   // Ref to store the minimum allowed height

  const handleMouseDown = (e, direction) => {
    e.preventDefault();

    const container = containerRef.current;

    if (!startWidthRef.current || !startHeightRef.current) {
      startWidthRef.current = container.offsetWidth;
      startHeightRef.current = container.offsetHeight;
      minWidthRef.current = startWidthRef.current * 0.75;  // Minimum width to 75% of the original width
      minHeightRef.current = startHeightRef.current * 0.75; // Minimum height to 75% of the original height
    }

    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = startWidthRef.current;
    const startHeight = startHeightRef.current;
    const minWidth = minWidthRef.current;
    const minHeight = minHeightRef.current;

    const onMouseMove = (e) => {
      let newWidth = startWidth;
      let newHeight = startHeight;

      if (direction.includes("horizontal")) {
        newWidth = startWidth + (e.clientX - startX);
      }

      if (direction.includes("vertical")) {
        newHeight = startHeight + (e.clientY - startY);
      }

      // Apply constraints
      if (newWidth >= minWidth) {
        container.style.width = `${newWidth}px`;
      }

      if (newHeight >= minHeight) {
        container.style.height = `${newHeight}px`;
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
    <div className="flex flex-col flex-1 relative">
      <div className="flex-1 flex">
        <div className="h-auto w-full border-black"></div>
        <div className="h-full border-black border-l-2 w-11"></div>
      </div>
      <div className="h-10 flex">
        <div className="w-full border-t-2 border-black"></div>
        <div
          className="w-10 h-10 cursor-nwse-resize absolute bottom-0 right-0 border-l-2 border-black"
          onMouseDown={(e) => handleMouseDown(e, "horizontal vertical")}
        ></div>
      </div>
    </div>
  );
});

export default FolderDisplay;
