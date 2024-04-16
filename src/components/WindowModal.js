import { forwardRef } from "react";
import TopBar from "../ui/TopBar";

const WindowModel = forwardRef(function WindowModel(props, ref) {
  const handleClose = () => {
    if (ref.current) {
      ref.current.close();
    }
    props.setFolderOpened(false);
  };
  return (
    <dialog
      className="w-2/4 h-3/4 bg-white absolute top-20 border-2 border-black"
      ref={ref}
      onClose={() => {
        props.setFolderOpened(false);
      }}
    >
      <TopBar WindowName={props.name} onClose={handleClose}/>
    </dialog>
  );
});

export default WindowModel;
