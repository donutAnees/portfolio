import { forwardRef, useRef, useEffect } from "react";
import TopBar from "../ui/TopBar";
import FileDisplay from "./FileDisplay";

const FileModal = forwardRef(function FileModal(props, ref) {
  const modalRef = useRef();

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.show();
    }
  }, []);

  const handleClose = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
    props.onClose();
  };

  return (
    <dialog
      className="w-2/4 h-3/4 bg-white absolute top-20 border-2 border-black"
      ref={modalRef}
      onClose={handleClose}
      onClick={props.onClick}
    >
      <div className="flex flex-col h-full">
        <TopBar WindowName={props.name} onClose={handleClose} isFile={true} />
        <FileDisplay filename={props.name} />
      </div>
    </dialog>
  );
});

export default FileModal;
