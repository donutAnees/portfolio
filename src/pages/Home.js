import { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import Sections from "../components/Sections";
import WindowModal from "../components/WindowModal";
import FileModal from "../components/FileModal";

export default function Home() {
  const [openModals, setOpenModals] = useState([]); // Array to manage multiple open modals

  // Function to open a new modal
  const openModal = (type, name) => {
    const newModal = {
      id: Date.now(),
      type,
      name,
    };
    setOpenModals((prev) => [...prev, newModal]);
  };

  // Function to close a modal by ID
  const closeModal = (id) => {
    setOpenModals((prev) => prev.filter((modal) => modal.id !== id));
  };

  return (
    <div>
      {openModals.map((modal) =>
        modal.type === "folder" ? (
          <WindowModal
            key={modal.id}
            id={modal.id}
            name={modal.name}
            onClose={() => closeModal(modal.id)}
          />
        ) : (
          <FileModal
            key={modal.id}
            id={modal.id}
            name={modal.name}
            onClose={() => closeModal(modal.id)}
          />
        )
      )}
      <Hero>
        <Sections
          openModal={openModal}
        />
      </Hero>
    </div>
  );
}
