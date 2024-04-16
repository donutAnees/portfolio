import { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import Sections from "../components/Sections";
import WindowModel from "../components/WindowModal";

export default function Home() {

  const modalRef = useRef(null);
  const [folderOpened, setFolderOpened] = useState(false);
  const [currentOpened, setCurrentOpened] = useState("")

  useEffect(() => {
    if(folderOpened){
      modalRef.current.show();
    }
  } , [folderOpened])

  return (
    <div>
      <WindowModel ref={modalRef} setFolderOpened={setFolderOpened} name={currentOpened}/>
      <Hero>
        <Sections folderOpened={folderOpened} setFolderOpened={setFolderOpened} setCurrentOpened={setCurrentOpened}/>
      </Hero>
    </div>
  );
}
