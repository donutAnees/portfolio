import FolderIcon from "../ui/FolderIcon";
import FileIcon from "../ui/FileIcon";

// Define the sections array with the icon type and title
const sections = [
  { icon: "FileIcon", title: "About Me" },
  { icon: "FileIcon", title: "Skills" },
  { icon: "FolderIcon", title: "Projects" },
  { icon: "FileIcon", title: "Experience" }
];

// Mapping icon strings to actual components
const iconComponents = {
  FileIcon,
  FolderIcon
};

export default function Sections({ openModal }) {
  return (
    <div className="pt-10">
      {sections.map((section, index) => {
        // Determine the component to render based on the icon type
        const IconComponent = iconComponents[section.icon];

        return (
          <div key={index}>
            <IconComponent
              fileName={section.title}
              folderName={section.title}
              onClick={() => {
                if (section.icon === "FolderIcon") {
                  // Open folder modal
                  openModal("folder", section.title);
                } else {
                  // Open file modal
                  openModal("file", section.title);
                }
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
