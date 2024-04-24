import fileIcon from "../img/file.png";

export default function FileIcon({
  fileName,
  onClick,
  inFolder
}) {

  const handleIconClick = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    onClick();
  };

  return (
    <div
      className={`flex-col py-4 ${inFolder !== true ? 'w-44' : 'px-2'}`}
    >
      <img
        src={fileIcon}
        className="w-10 mx-auto cursor-pointer"
        alt="FileIconWasSupposedToBeHere"
        onClick={handleIconClick}
      ></img>
      <h3 className={`text-center text-xs font-extralight py-1 font-chicago px-1 w-fit mx-auto ${inFolder !== true ? 'bg-gray-300' : ''} cursor-pointer`} onClick={handleIconClick}>
        {fileName}
      </h3>
    </div>
  );
}
