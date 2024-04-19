import { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import Sections from "../components/Sections";
import WindowModal from "../components/WindowModal";
import FileModal from "../components/FileModal"

export default function Home() {
  const folderModalRef = useRef(null);
  const fileModalRef = useRef(null);
  const [folderOpened, setFolderOpened] = useState(false);
  const [currentFolderOpened, setCurrentFolderOpened] = useState("");
  const [fileOpened, setFileOpened] = useState(false);
  const [currentFileOpened, setCurrentFileOpened] = useState("");

  useEffect(() => {
    if (folderOpened) {
      folderModalRef.current.show();
    }
  }, [folderOpened]);

  useEffect(() => {
    if (fileOpened) {
      fileModalRef.current.show();
    }
  }, [fileOpened]);

  return (
    <div>
      <FileModal
        ref={fileModalRef}
        setFileOpened={setFileOpened}
        name={currentFileOpened}
      />
      <WindowModal
        ref={folderModalRef}
        setFolderOpened={setFolderOpened}
        name={currentFolderOpened}
      />
      <Hero>
        <Sections
          setFolderOpened={setFolderOpened}
          setCurrentFolderOpened={setCurrentFolderOpened}
          setFileOpened={setFileOpened}
          setCurrentFileOpened={setCurrentFileOpened}
        />
      </Hero>
    </div>
  );
}
