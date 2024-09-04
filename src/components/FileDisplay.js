import ProjectDetails from "./ProjectDetails";
import { useEffect } from "react";

// About Me
import linkedinIcon from "../img/linkedin.svg"
import githubIcon from "../img/github.png"
import leetcodeIcon from "../img/leetcode.png"

// Skills
// Languages
import cIcon from '../img/c.svg';
import cppIcon from '../img/cplusplus.png';
import javaIcon from '../img/java.svg';
import html5Icon from '../img/html5.svg';
import css3Icon from '../img/css3.svg';
import javascriptIcon from '../img/javascript.svg';
import solidityIcon from '../img/solidity.png';
import bashIcon from "../img/bash.png"

// Frameworks
import angularIcon from '../img/angular.png';
import androidIcon from '../img/android.png';
import djangoIcon from '../img/django.svg';
import expressIcon from '../img/express.png';
import flaskIcon from '../img/flask.png';
import reactIcon from '../img/react.svg';
import springIcon from '../img/spring.svg';
import tailwindIcon from '../img/tailwind.svg';
import qtIcon from '../img/qt.webp'

// Tools
import dockerIcon from '../img/docker.svg';
import firebaseIcon from '../img/firebase.svg';
import gitIcon from '../img/git.svg';
import herokuIcon from '../img/heroku.svg';
import linuxIcon from '../img/linux.svg';
import mongodbIcon from '../img/mongodb.svg';
import mysqlIcon from '../img/mysql.svg';
import postgresqlIcon from '../img/postgresql.svg';
import vagrantIcon from '../img/vagrant.svg';

// Experience
import LFXLogo from "../img/lfx.svg"
import governmentLogo from "../img/india.png"

const preloadImages = (imageUrls) => {
    const promises = imageUrls.map((url) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
      });
    });
    return Promise.all(promises);
  };

export default function FileDisplay({ filename }) {
      useEffect(() => {
        const imageUrls = [
            linkedinIcon, githubIcon, leetcodeIcon,
            cIcon, cppIcon, javaIcon, html5Icon, css3Icon, javascriptIcon, solidityIcon, bashIcon,
            angularIcon, androidIcon, djangoIcon, expressIcon, flaskIcon, reactIcon, springIcon, tailwindIcon, qtIcon,
            dockerIcon, firebaseIcon, gitIcon, herokuIcon, linuxIcon, mongodbIcon, mysqlIcon, postgresqlIcon, vagrantIcon,
            LFXLogo, governmentLogo
          ];
        preloadImages(imageUrls).then(() => {
          console.log('All images preloaded');
        },[]);
      });

    const projects = [
        {
          title: "Bitcoin Investigation Tool",
          description: "A Bitcoin Investigation Tool providing an Interactive Blockchain Transaction Visualizer; a Bitcoin PCAP Decoder; and an Online Wallet Search feature. Very proud of this!",
          technologies: ["ReactJS", "Python", "Flask", "PostgreSQL"],
          github: "https://github.com/donutAnees/Bitcoin-Investigation-Tool",
        },
        {
          title: "Image Stitching",
          description: "Designed and implemented an image stitching system in C++ using the ORB algorithm, achieving seamless stitching and processing images in under a second, making it 100 times faster than SIFT. This project introduced me to computer vision.",
          technologies: ["C++", "OpenCV"],
          github: "https://github.com/donutAnees/image_stitching",
        },
        {
            title: "FAST",
            description: "Implemented the FAST (Feature from Accelerated Segment Test) Algorithm in Image Processing from scratch using C++. The FAST Algorithm is commonly used to identify key features in an image, using a corner detection method and developing it from stratch helped me polish my C++ skills.",
            technologies: ["C++"],
            github: "https://github.com/donutAnees/FAST_implementation",
          },
        {
          title: "Blockchain Voting System",
          description: "Implemented a secure voting system using smart contracts. Build within 24 hours.",
          technologies: ["ReactJS", "ExpressJS", "Solidity"],
          github: "https://github.com/donutAnees/blockchain_voting",
        },
        {
          title: "E-Commerce",
          description: "Yeah, it's an e-commerce site-mostly—everyone's first web dev project.",
          technologies: ["ReactJS", "Firebase"],
          github: "https://github.com/donutAnees/eCommerceProject",
          links: [
            { label: "Live Demo", url: "https://react-d4c0e.web.app" }
          ]
        },
      ];
    const renderContent = () => {
      switch (filename) {
        case "About Me":
          return (
            <div className="font-chicago text-s flex flex-col gap-4 p-4 overflow-y-scroll">
            <p>
              Hi, this is Anees! Final year student pursing a Computer Science and Engineering degree at Easwari Engineering College. Over the years, I have built multiple projects, showcasing my proficiency in a variety of programming languages and technologies.
            </p>
            <p>
              My expertise lies in fullstack development and also extends to operating systems and low level programming. I am very passionate about open source and regularly contribute.
              I'm open to new opportunities, challenges and sharing experiences. Let's connect, explore and learn together!
            </p>
            <div className="flex gap-3 justify-center items-center p-5">
              <a href="https://www.linkedin.com/in/mohammed-anees-sde/" target="_blank" rel="noreferrer">
                  <img src={linkedinIcon} alt="linkedin" width="50" height="50"/>
              </a>
              <a href="https://leetcode.com/u/donutaneeswastaken/" target="_blank" rel="noreferrer">
                  <img src={leetcodeIcon} alt="leetcode" width="120" height="60"/>
              </a>
              <a href="https://github.com/donutAnees" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="github" width="60" height="60"/>
              </a> 
            </div>
            </div>
          );
          case "Skills":
            return (
                <div className="font-chicago text-s flex flex-col gap-4 p-4 overflow-y-scroll flex-grow">
                <div className="flex flex-col">
                  <div className="text-center pb-4">Languages</div>
                  <div className="flex gap-3 justify-center items-center min-h-10">
                    <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer">
                      <img src={cIcon} alt="c" width="40" height="40"/>
                    </a>
                    <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer">
                      <img src={cppIcon} alt="cplusplus" width="35" height="40"/>
                    </a>
                    <a href="https://www.java.com" target="_blank" rel="noreferrer">
                      <img src={javaIcon} alt="java" width="40" height="40"/>
                    </a>
                    <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
                      <img src={html5Icon} alt="html5" width="40" height="40"/>
                    </a>
                    <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
                      <img src={css3Icon} alt="css3" width="40" height="40"/>
                    </a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                      <img src={javascriptIcon} alt="javascript" width="40" height="40"/>
                    </a>
                    {/* <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
                      <img src={typescriptIcon} alt="typescript" width="40" height="40"/>
                    </a> */}
                    <a href="https://soliditylang.org/" target="_blank" rel="noreferrer">
                      <img src={solidityIcon} alt="solidity" width="40" height="40"/>
                    </a>
                    <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noreferrer">
                      <img src={bashIcon} alt="bash" width="80" height="30"/>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-center pb-4">Frameworks</div>
                  <div className="flex gap-3 justify-center items-center">
                    <a href="https://angular.io" target="_blank" rel="noreferrer">
                      <img src={angularIcon} alt="angularjs" width="100" height="40"/>
                    </a>
                    <a href="https://developer.android.com" target="_blank" rel="noreferrer">
                      <img src={androidIcon} alt="android" width="60" height="40"/>
                    </a>
                    <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer">
                      <img src={djangoIcon} alt="django" width="40" height="40"/>
                    </a>
                    <a href="https://expressjs.com" target="_blank" rel="noreferrer">
                      <img src={expressIcon} alt="express" width="80" height="30"/>
                    </a>
                    <a href="https://flask.palletsprojects.com/" target="_blank" rel="noreferrer">
                      <img src={flaskIcon} alt="flask" width="35" height="40"/>
                    </a>
                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                      <img src={reactIcon} alt="react" width="40" height="40"/>
                    </a>
                    <a href="https://spring.io/" target="_blank" rel="noreferrer">
                      <img src={springIcon} alt="spring" width="40" height="40"/>
                    </a>
                    <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
                      <img src={tailwindIcon} alt="tailwind" width="40" height="40"/>
                    </a>
                    <a href="https://www.qt.io/" target="_blank" rel="noreferrer">
                      <img src={qtIcon} alt="qt" width="40" height="40"/>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-center pb-4">Tools</div>
                  <div className="flex gap-3 justify-center items-center">
                    <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
                      <img src={dockerIcon} alt="docker" width="40" height="40"/>
                    </a>
                    <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
                      <img src={firebaseIcon} alt="firebase" width="40" height="40"/>
                    </a>
                    <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                      <img src={gitIcon} alt="git" width="40" height="40"/>
                    </a>
                    <a href="https://heroku.com" target="_blank" rel="noreferrer">
                      <img src={herokuIcon} alt="heroku" width="40" height="40"/>
                    </a>
                    <a href="https://www.linux.org/" target="_blank" rel="noreferrer">
                      <img src={linuxIcon} alt="linux" width="40" height="40"/>
                    </a>
                    <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
                      <img src={mongodbIcon} alt="mongodb" width="40" height="40"/>
                    </a>
                    <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
                      <img src={mysqlIcon} alt="mysql" width="40" height="40"/>
                    </a>
                    <a href="https://www.postgresql.org" target="_blank" rel="noreferrer">
                      <img src={postgresqlIcon} alt="postgresql" width="40" height="40"/>
                    </a>
                    <a href="https://www.vagrantup.com/" target="_blank" rel="noreferrer">
                      <img src={vagrantIcon} alt="vagrant" width="40" height="40"/>
                    </a>
                  </div>
                </div>
              </div>
            );
        case "Experience":
        return (
            <div className="font-chicago text-s flex flex-col gap-4 p-4 overflow-y-scroll">
                <div className="flex items-start gap-6">
                    <img 
                    src={LFXLogo}
                    alt="LFX Logo" 
                    width="80" 
                    height="80" 
                    className="object-cover"
                    />
                    <div className="flex flex-col gap-2">
                    <p className="font-bold text-sm mb-2">
                        LFX - Mentee
                    </p>
                    
                    <p className="text-s text-gray-500 mb-2">
                        September - Present
                    </p>
                    <ul className="list-disc list-inside text-xs leading-relaxed space-y-2">
                        <li>
                            Participating in a mentorship program focused on Linux kernel bug fixing, gaining hands-on experience with kernel development and contributing to the linux project.
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="flex items-start gap-6 my-4">
                    <img 
                    src={governmentLogo} 
                    alt="Government of India Logo" 
                    width="80" 
                    height="80" 
                    className="object-cover"
                    />
                    <div className="flex flex-col gap-2">
                    <p className="font-bold text-sm mb-2">
                        Government of India - Software Engineer Intern
                    </p>
                    
                    <p className="text-s text-gray-500 mb-2">
                        June to July 2024
                    </p>
                    <ul className="list-disc list-inside text-xs leading-relaxed space-y-2">
                        <li>
                            Developed a C++ system for clustering wallets using 5 heuristic techniques and multithreading, enhancing system efficiency by over 20%, and facilitated connectivity to MongoDB via the Mongocxx driver, managing over 1000 transactions per minute.
                        </li>
                        <li>
                            Created a system to detect suspicious cryptocurrency wallet addresses using unsupervised machine learning and OSINT techniques, flagging highly traded addresses.
                        </li>
                        <li>
                            Performed network analysis in Python to capture IP addresses of nodes involved in suspicious activities, processing up to 1TB of data daily.
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        );
        case "BIT":
           return ( <ProjectDetails project={projects[0]}/> )
        case "Image Stitching":
            return ( <ProjectDetails project={projects[1]}/> )
        case "FAST":
           return ( <ProjectDetails project={projects[2]}/> )
        case "Blockchain Voting":
           return ( <ProjectDetails project={projects[3]}/> )
        case "ECommerce":
           return ( <ProjectDetails project={projects[4]}/> )
        default:
          return <p>No content available.</p>;
      }
    };
    return <div className="flex flex-1 p-3 overflow-hidden">{renderContent()}</div>;
  }
