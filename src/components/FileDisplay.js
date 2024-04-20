export default function FileDisplay(filename) {
  console.log(filename)
  const renderContent = () => {
    switch (filename.filename) {
      case "About Me":
        return <p>This is the ABOUT ME content.</p>;
      case "Skills":
        return <p>This is the SKILLS content.</p>;
      case "Experience":
        return <p>This is the EXPERIENCE content.</p>;
      default:
        return <p>No content available.</p>;
    }
  };
  return <div className="flex flex-1">{renderContent()}</div>;
}
