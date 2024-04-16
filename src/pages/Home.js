import { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import Sections from "../components/Sections";
import WindowModel from "../components/WindowModal";

export default function Home() {

  const modalRef = useRef(null);
  const [fileOpened, setFileOpened] = useState(false);
  const [currentOpened, setCurrentOpened] = useState("")

  useEffect(() => {
    if(fileOpened){
      modalRef.current.show();
    }
  } , [fileOpened])

  return (
    <div>
      <WindowModel ref={modalRef} setFileOpened={setFileOpened} name={currentOpened}/>
      <Hero>
        <Sections setFileOpened={setFileOpened} setCurrentOpened={setCurrentOpened}/>
      </Hero>
    </div>
  );
}
