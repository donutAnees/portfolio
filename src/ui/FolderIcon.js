import folderIcon from "../img/folder.png";

export default function FolderIcon({
  folderName,
  folderOpened,
  setFolderOpened,
  setCurrentOpened,
}) {
  const handleClick = () => {
    setFolderOpened(true);
    setCurrentOpened(folderName);
  };
  return (
    <div
      className="flex-col w-44 px-8 py-4 cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={folderIcon}
        className="w-14 mx-auto"
        alt="FolderIconWasSupposedToBeHere"
      ></img>
      <h3 className="text-center text-xs font-extralight py-1 font-chicago bg-gray-300 px-1 w-fit mx-auto">
        {folderName}
      </h3>
    </div>
  );
}
