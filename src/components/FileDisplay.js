export default function FileDisplay({ filename }) {
    console.log(filename);
    const renderContent = () => {
      switch (filename) {
        case "About Me":
          return (
            <div className="font-chicago text-s flex flex-col gap-4 p-4">
            <p>
              Hi, this is Anees! Final year student pursing a Computer Science and Engineering degree at Easwari Engineering College. Over the years, I have built multiple projects, showcasing my proficiency in a variety of programming languages and technologies.
            </p>
            <p>
              My expertise lies in fullstack development and also extends to operating systems and low level programming. I am very passionate about open source and regularly contribute.
              I'm open to new opportunities, challenges and sharing experiences. Let's connect, explore and learn together!
            </p>
            <div className="flex gap-3 justify-center items-center p-5">
              <a href="https://www.linkedin.com/in/mohammed-anees-sde/" target="_blank" rel="noreferrer">
                  <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" alt="linkedin" width="50" height="50"/>
              </a>
              <a href="https://leetcode.com/u/donutaneeswastaken/" target="_blank" rel="noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/LeetCode_Logo_black_with_text.svg/500px-LeetCode_Logo_black_with_text.svg.png" alt="cplusplus" width="120" height="60"/>
              </a>
              <a href="https://github.com/donutAnees" target="_blank" rel="noreferrer">
                  <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="java" width="60" height="60"/>
              </a> 
            </div>
            </div>
          );
        case "Skills":
          return (
          <div className="font-chicago text-s flex flex-col gap-4 flex-1 pt-16">
          <p className="flex flex-col">
              <div className="text-center pb-4">Languages</div>
              <div className="flex gap-3 justify-center items-center">
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
              {/* <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/>
              </a> */}
              <a href="https://soliditylang.org/" target="_blank" rel="noreferrer">
                  <img src="https://forum.soliditylang.org/user_avatar/forum.soliditylang.org/system/288/802_2.png" alt="solidity" width="40" height="40"/>
              </a>
              <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Gnu-bash-logo.svg/240px-Gnu-bash-logo.svg.png" alt="bash" width="80" height="30"/>
              </a>
              </div>
            </p>
            <p className="flex flex-col">
              <div className="text-center pb-4">Frameworks</div>
              <div className="flex gap-3 justify-center items-center">
                <a href="https://angular.io" target="_blank" rel="noreferrer">
                    <img src="https://angular.dev/assets/images/press-kit/angular_wordmark_gradient.png" alt="angularjs" width="100" height="40"/>
                </a>
                <a href="https://developer.android.com" target="_blank" rel="noreferrer">
                    <img src="https://developer.android.com/static/images/brand/Android_Robot_200.png" alt="android" width="60" height="40"/>
                </a>
                <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer">
                    <img src="https://cdn.worldvectorlogo.com/logos/django.svg" alt="django" width="40" height="40"/>
                </a>
                <a href="https://expressjs.com" target="_blank" rel="noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/archive/6/64/20170429090804%21Expressjs.png" alt="express" width="80" height="30"/>
                </a>
                <a href="https://flask.palletsprojects.com/" target="_blank" rel="noreferrer">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRubRv-E-PFnEuyYITdMYPqMXrBLOIKUTW8ug&s" alt="flask" width="35" height="40"/>
                </a>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
                </a>
                <a href="https://spring.io/" target="_blank" rel="noreferrer">
                    <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="40" height="40"/>
                </a>
                <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
                    <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/>
                </a>
                <a href="https://www.qt.io/" target="_blank" rel="noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Qt_logo_2016.svg" alt="qt" width="40" height="40"/>
                </a>
                </div>
            </p >
            <p className="flex flex-col">
              <div className="text-center pb-4">Tools</div>
              <div className="flex gap-3 justify-center items-center">
              <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
                <img src="https://www.docker.com/wp-content/uploads/2024/01/icon-docker-square.svg" alt="docker" width="40" height="40"/>
              </a>
              <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
                  <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/>
              </a>
              <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                  <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/>
              </a>
              <a href="https://heroku.com" target="_blank" rel="noreferrer">
                  <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/>
              </a>
              <a href="https://www.linux.org/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/>
              </a>
              <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/>
              </a>
              <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/>
              </a>
              <a href="https://www.postgresql.org" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/>
              </a>
              <a href="https://postman.com" target="_blank" rel="noreferrer">
                  <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/>
              </a>
              <a href="https://www.vagrantup.com/" target="_blank" rel="noreferrer">
                  <img src="https://www.vectorlogo.zone/logos/vagrantup/vagrantup-icon.svg" alt="vagrant" width="40" height="40"/>
              </a>
              </div>
            </p>
          </div>
        )
        case "Experience":
        return (
            <div className="font-chicago text-xs flex flex-col flex-1 p-4 overflow-y-auto">
                <div className="flex items-start gap-6">
                    <img 
                    src="https://lfx.linuxfoundation.org/wp-content/uploads/2023/01/logo_lfx_nopad.svg" 
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
                        August 2024 - Present
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
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/280px-Emblem_of_India.svg.png" 
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
        default:
          return <p>No content available.</p>;
      }
    };
    return <div className="flex flex-1 p-3">{renderContent()}</div>;
  }
