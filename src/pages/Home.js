import { useState } from "react";
import Hero from "../components/Hero";
import Sections from "../components/Sections";
import FileModal from "../components/FileModal";
import FolderModal from "../components/FolderModal";

export default function Home() {
  const [openModals, setOpenModals] = useState([]); // Array to manage multiple open modals

  // Function to open a new modal
  const openModal = (type, name) => {
    const newModal = {
      id: Date.now(), // Unique identifier for each modal
      type,
      name,
    };
    setOpenModals((prev) => [...prev, newModal]); // Add new modal to the end
  };

  // Function to close a modal by ID
  const closeModal = (id) => {
    setOpenModals((prev) => prev.filter((modal) => modal.id !== id));
  };

  // Function to bring modal to the front by moving it to the end of the array
  const bringToFront = (id) => {
    setOpenModals((prev) => {
      const modalIndex = prev.findIndex((modal) => modal.id === id);
      if (modalIndex === -1) return prev; // Modal not found

      const updatedModals = [...prev];
      const [modalToMove] = updatedModals.splice(modalIndex, 1); // Remove the modal
      updatedModals.push(modalToMove); // Add it to the end

      return updatedModals;
    });
  };

  const projectFolder = [
    {title:"BIT"}, 
    {title:"Image Stitching"},
    {title:"FAST"},
    {title:"Blockchain Voting"},
    {title:"ECommerce"}
  ]
  return (
    <div>
      {openModals.map((modal) =>
        modal.type === "folder" ? (
          <FolderModal
            key={modal.id}
            id={modal.id}
            name={modal.name}
            onClose={() => closeModal(modal.id)}
            onClick={() => bringToFront(modal.id)} 
            openModal={openModal}
            files={projectFolder}
          />
        ) : (
          <FileModal
            key={modal.id}
            id={modal.id}
            name={modal.name}
            onClose={() => closeModal(modal.id)}
            onClick={() => bringToFront(modal.id)} 
          />
        )
      )}
      <Hero>
        <Sections openModal={openModal} />
      </Hero>
    </div>
  );
}
