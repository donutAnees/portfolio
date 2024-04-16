import FolderIcon from "../ui/FolderIcon";
import FileIcon from "../ui/FileIcon";

const sections = [
  {icon: "FileIcon", title: "About Me"},
  {icon: "FileIcon", title: "Skills"},
  {icon: "FolderIcon", title: "Projects"},
  {icon: "FileIcon", title: "Experience"}
];

const iconComponents = {
  FileIcon,
  FolderIcon
};

export default function Sections({ setFileOpened , setCurrentOpened }) {
  return (
    <div className="pt-10">
      {sections.map((section, index) => {
        const IconComponent = iconComponents[section.icon];
        return (
          <div key={index}>
            <IconComponent fileName={section.title} folderName={section.title} setFileOpened={setFileOpened} setCurrentOpened={setCurrentOpened}/>
          </div>
        );
      })}
    </div>
  );
}
