import { forwardRef } from "react";

const WindowModel = forwardRef(function WindowModel(props, ref) {
  return (
    <dialog
      className="w-2/4 h-2/4 bg-white relative top-5"
      ref={ref}
      onClose={() => {
        props.setFileOpened(false);
      }}
    ></dialog>
  );
});

export default WindowModel;
