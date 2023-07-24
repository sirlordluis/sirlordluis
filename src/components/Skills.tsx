import Cuadrado from './Cuadrado';

const Skills = () => {
    const skills= [
        {title:"Languages",languges:["Java", "Python", "C++","Pascal", "C#"]},
        {title:"Databases",languges:["SQLite", "Oracle", "MySQL"]},
        {title:"Tools",languges:["VSCode","Neovim", "Qemu/KVM", "Git"]},
        {title:"Soft Skills",languges:["Communication","Collaboration", "Adaptability", "Time Management", "Problem Solving", "Creativity"]},
        {title:"Frameworks",languges:["React","Angular", "Laravel", "JavaScript"]},
    ]
    return(
        <>
        <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
          {/* top */}
          <div className="mb-10">
            <div className="text-white font-medium w-2/3 text-[32px] flex items-center gap-2">
                <div className="">
                    <span className="text-[#C778DD]">#</span>skills
                </div>
                <div className="line w-2/3 h-px bg-[#C778DD]"></div>
            </div>
          </div>
          {/*bottom*/}
          <div className="flex flex-wrap gap-5 justify-between items-center text-white">
            {/*left */}
            <div className="mx-auto">
                
                <div className="flex flex-wrap gap-3 my-12 ">
                    <div className="grid grid-cols-4 grid-rows-4 gap-x-3 gap-y-3 my-20 ">
                        {/*COLUMNA 1*/}
                        <Cuadrado texto="html5" />
                        <Cuadrado texto="laravel"/>
                        <Cuadrado texto="js" />
                        <Cuadrado texto="github"  />
                        {/*COLUMNA 2*/}
                        <div className="fa-solid fa-circle flex items-center justify-center"></div>
                        <Cuadrado texto="java" />
                        <Cuadrado texto="docker" />
                        <Cuadrado texto="python" />
                        {/*COLUMNA 3*/}
                        <div className="fa-solid fa-circle flex items-center justify-center"></div>
                        <div className="fa-solid fa-circle flex items-center justify-center"></div>
                        <Cuadrado texto="angular" />
                        <Cuadrado texto="php" />
                        {/*COLUMNA 4*/}
                        <div className="fa-solid fa-circle flex items-center justify-center"></div>
                        <div className="fa-solid fa-circle flex items-center justify-center"></div>
                        <div className="fa-solid fa-circle flex items-center justify-center"></div>
                        <Cuadrado texto="linux" />
                    </div>
                </div>
                
            </div>
            {/*right*/}
            <div className="mx-auto flex flex-wrap justify-around md:justify-end w-10/12 md:w-1/2 gap-4">
                {skills.map(({title, languges}) => {
                    return <>
                    <div className="w-[45%] lg:w-[30%] border border-[#ABB2BF]">
                        <div className="p-2"><h2 className='font-semibold'>{title}</h2></div>
                        <div className="flex flex-wrap border-t border-[#ABB2BF] gap-2 p-2 text-[#ABB2BF]">
                            {languges.map(e => {
                                return <span>{e}</span>
                            })}
                        </div>
                    </div> 
                    </>
                })}
                <img src="https://i.imgur.com/SlsB32n.png" alt="" />
            </div>

          </div>
        </div>
        </>
    );
    
}
export default Skills;