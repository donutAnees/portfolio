export default function FileDisplay({ filename }) {
    console.log(filename);
    const renderContent = () => {
      switch (filename) {
        case "About Me":
          return (
            <div className="font-chicago text-s flex flex-col gap-4">
            <p>
              Hi, this is Anees! I am a developer with extensive experience in software development. Over the years, I have built multiple projects, showcasing my proficiency in a variety of programming languages.
            </p>
            <p>
              My expertise lies in fullstack development and also extends to operating systems and kernels. I am very passionate about open source and regularly contribute, including to the Linux kernel.
            </p>
            <p className="flex items-center gap-1">
              <span>Languages:</span>
              <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40"/>
              </a>
              <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/240px-ISO_C%2B%2B_Logo.svg.png" alt="cplusplus" width="35" height="40"/>
              </a>
              <a href="https://www.java.com" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/>
              </a>
              <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
              </a>
              <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
              </a>
              <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/>
              </a>
              <a href="https://soliditylang.org/" target="_blank" rel="noreferrer">
                  <img src="https://forum.soliditylang.org/user_avatar/forum.soliditylang.org/system/288/802_2.png" alt="solidity" width="40" height="40"/>
              </a>
            </p>
            <p className="flex items-center gap-1">
              <span>Frameworks:</span>  
              
            </p>
            </div>
          );
        case "Skills":
          return <p>This is the SKILLS content.</p>;
        case "Experience":
          return <p>This is the EXPERIENCE content.</p>;
        default:
          return <p>No content available.</p>;
      }
    };
    return <div className="flex flex-1 p-3">{renderContent()}</div>;
  }
  