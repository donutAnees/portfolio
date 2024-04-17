export default function FolderDisplay() {
  return (
    <div className="flex flex-col flex-1 h-full">
      <div className="flex-1 flex">
        <div className="h-auto w-full border-r-2 border-black"></div>
        <div className="h-full border-black w-10"></div>
      </div>
      <div className="h-10 flex">
        <div className="w-full border-t-2 border-r-2 border-black"></div>
        <div className="w-10 border-t-2 border-black"></div>
      </div>
    </div>
  );
}
