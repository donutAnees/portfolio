import fileIcon from "../img/file.png";

export default function FileIcon({
  fileName,
  folderOpened,
  setFolderOpened,
  setCurrentOpened,
}) {
  const handleClick = () => {
    setFolderOpened(true);
    setCurrentOpened(fileName);
  };

  return (
    <div
      className="flex-col w-44 px-8 py-4 cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={fileIcon}
        className="w-10 mx-auto"
        alt="FileIconWasSupposedToBeHere"
      ></img>
      <h3 className="text-center text-xs font-extralight py-1 font-chicago bg-gray-300 px-1 w-fit mx-auto">
        {fileName}
      </h3>
    </div>
  );
}
