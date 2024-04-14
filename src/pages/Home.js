import { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import Sections from "../components/Sections";
import WindowModel from "../components/WindowModal";

export default function Home() {

  const modalRef = useRef(null);
  const [fileOpened, setFileOpened] = useState(false);

  useEffect(() => {
    if(fileOpened){
      modalRef.current.showModal();
    }
  } , [fileOpened])

  return (
    <div>
      <WindowModel ref={modalRef} setFileOpened={setFileOpened}/>
      <Hero>
        <Sections setFileOpened={setFileOpened}/>
      </Hero>
    </div>
  );
}
