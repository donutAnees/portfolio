import { forwardRef, useRef } from "react";
import resizeIcon from "../img/resizeIcon.png"
import FileIcon from "../ui/FileIcon";

const FolderDisplay = forwardRef(function FolderDisplay({ openModal, content, containerRef }) {
  const startWidthRef = useRef(null); // Ref to store the initial width
  const startHeightRef = useRef(null); // Ref to store the initial height
  const minWidthRef = useRef(550); // Minimum allowed width to 550px
  const minHeightRef = useRef(440); // Minimum allowed height to 440px

  const handleMouseDown = (e, direction) => {
    e.preventDefault();

    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect(); // Get the container's position relative to the viewport
    startWidthRef.current = container.offsetWidth;
    startHeightRef.current = container.offsetHeight;
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = startWidthRef.current;
    const startHeight = startHeightRef.current;
    const minWidth = minWidthRef.current;
    const minHeight = minHeightRef.current;

    const onMouseMove = (e) => {
      let newWidth = startWidth;
      let newHeight = startHeight;

      if (direction.includes("scale")) {
        newWidth = startWidth + (e.clientX - startX);
        newHeight = startHeight + (e.clientY - startY);
      }

      // Get the window size
      const maxWidth = window.innerWidth;
      const maxHeight = window.innerHeight;

      // Calculate maximum height considering the container's offset from the top
      const maxAllowedHeight = maxHeight - containerRect.top;

      // Apply minimum and maximum constraints for width
      if (newWidth >= minWidth) {
        if (newWidth > maxWidth) newWidth = maxWidth;
        container.style.width = `${newWidth}px`;
      }

      // Apply minimum and maximum constraints for height considering the container's top offset
      if (newHeight >= minHeight) {
        if (newHeight > maxAllowedHeight) newHeight = maxAllowedHeight;
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
      <div className="h-auto w-full border-black flex flex-wrap p-4">
          {content.map((item, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 box-border">
              <FileIcon 
                fileName={item.title} 
                inFolder={true} 
                onClick={() => {
                  openModal("file", item.title);
                }} 
              />
            </div>
          ))}
        </div>
        <div className="h-full border-black border-l-2 w-11"></div>
      </div>
      <div className="h-10 flex">
        <div className="w-full border-t-2 border-black"></div>
        <div className="w-11 border-l-2 border-black border-t-2">
          <div
            className="w-10 h-10 absolute bottom-0 right-0 cursor-pointer flex items-center justify-center"
            onMouseDown={(e) => handleMouseDown(e, "scale")}
          ><img src={resizeIcon} alt="" className="w-3/4 h-3/4"/></div>
        </div>
      </div>
    </div>
  );
});

export default FolderDisplay;