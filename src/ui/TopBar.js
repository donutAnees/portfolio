export default function TopBar({ WindowName , onClose}) {
    return (
      <div className="h-8 border-2 border-black flex flex-col justify-center relative">
        <div className="h-6 bg-repeat-x bg-windowLines bg-contain relative"></div>
        <div className="absolute inset-0 flex justify-between items-center px-4">
          <div className="w-5 h-5 border-2 border-black bg-white" onClick={onClose}></div>
          <div className="h-6 bg-white font-chicago text-xs text-center flex items-center px-2">
            <div className="w-full">{WindowName}</div>
          </div>
          <div className="w-5 h-5 border-2 border-black bg-white"></div>
        </div>
      </div>
    );
  }
  