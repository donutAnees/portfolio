export default function FolderContent({ contents }) {
    return (
      <>
        <div className="h-7 border-b-2 border-black flex font-chicago text-xs items-center p-3">
          <span className="relativ flex-1">6 items</span>
          <span className="relative mx-auto">245K in disk</span>
          <span className="relative flex-1 text-right">154K available</span>
        </div>
        <div className="h-1 border-b-2 border-black"></div>
      </>
    );
  }
  