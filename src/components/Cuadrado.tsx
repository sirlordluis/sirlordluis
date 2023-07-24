import '../styles/Circulo.css'

const Cuadrado = ({ texto }: { texto: string }) => {
  const iconClass = `fa-${texto}`; // Concatenate 'fa-' with 'texto' to get the class name

  return ( <>
      <div
        className="relative text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150"
        style={{ minWidth: "90px", minHeight: "90px", display: 'flex', overflow: 'hidden' }}
      >
        <p
          className={`fa-brands ${iconClass} text-6xl text-white mx-auto flex justify-center items-center icon-container`}
        ></p>

        
      </div>
      
    </>
  );
};

export default Cuadrado;