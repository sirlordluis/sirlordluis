import ProjectCard from "./ProjectCard";

const Projects = () => {

  const projects = [
    {
      img: "https://i.imgur.com/QKN0RVE.png",
      langs: ["html", "css", "javascript", "react", "tailwind css"],
      title: "Bobadent",
      disc: "Minecraft servers hosting ",
    },
    {
      img: "https://i.imgur.com/4f1r998.png",
      langs: ["html", "css", "javascript", "Node.js"],
      title: "ProtectX",
      disc: "Discord anti-crash bot ",
    },
    {
      img: "https://i.imgur.com/rJd70DS.jpeg",
      langs: ["html", "css", "javascript", "Node.js", "python"],
      title: "Yahoo respuestas",
      disc: "Get answers to your kahoot quiz ",
    },
    
    
  ];

    return (
      <>
        <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
          {/* top */}
          <div className="flex justify-between items-center gap-5">
            {/* left */}
            <div className="text-white font-medium w-2/3 text-[32px] flex items-center gap-2">
              <div className="">
                <span className="text-[#C778DD]">#</span>projects
              </div>
              <div className="line w-2/3 h-px bg-[#C778DD]"></div>
            </div>
            {/* right */}
            <div className="text-white font-medium">
              <a href="">
                <span>View all &gt;_</span>
              </a>
            </div>
          </div>
          {/* bottom */}
          <div className="flex flex-wrap justify-between gap-4 my-12">
            {projects.map(({img, langs, title, disc})=>{
              return (
                <>
                  <ProjectCard img = {img} langs = {langs} title = {title} disc = {disc}/>
                </>
              );
            })}
          </div>
        </div>
      </>
      
    );
  };
  
  export default Projects;