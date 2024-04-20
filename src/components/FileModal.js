import { forwardRef } from "react";
import TopBar from "../ui/TopBar";
import FileDisplay from "./FileDisplay";

const FileModal = forwardRef(function FileModal(props, ref) {
  const handleClose = () => {
    if (ref.current) {
      ref.current.close();
    }
    props.setFileOpened(false);
  };
  return (
    <dialog
      className="w-2/4 h-3/4 bg-white absolute top-20 border-2 border-black z-50"
      ref={ref}
      onClose={() => {
        props.setFileOpened(false);
      }}
    >
      <div className="flex flex-col h-full">
        <TopBar WindowName={props.name} onClose={handleClose} isFile={true} />
        <FileDisplay filename={props.name}/>
      </div>
    </dialog>
  );
});

export default FileModal;
