import { useEffect, useRef } from 'react';
import './css/App.css';

function App() {
  const appRef = useRef<HTMLDivElement>(null);
/*COLOCAR EL GRADIENTE AL INICIO*/
  useEffect(() => {
    const setGradiantBackground = () => {
      const winWidth = window.innerWidth;
      const winHeight = window.innerHeight;

      const mouseX = Math.round((winWidth / 2) * 100);
      const mouseY = Math.round((winHeight / 2) * 100);

      if (appRef.current) {
        appRef.current.style.setProperty('--mouse-x', mouseX.toString() + '%');
        appRef.current.style.setProperty('--mouse-y', mouseY.toString() + '%');
      }
    };
/*USAR GRADIENTE AL MOVER EL MOUSE*/
    setGradiantBackground();

    const moveGradiant = (event:MouseEvent) => {
      const winWidth = window.innerWidth;
      const winHeight = window.innerHeight;

      const mouseX = Math.round((event.pageX / winWidth) * 100);
      const mouseY = Math.round((event.pageY / winHeight) * 100);

      if (appRef.current) {
        appRef.current.style.setProperty('--mouse-x', mouseX.toString() + '%');
        appRef.current.style.setProperty('--mouse-y', mouseY.toString() + '%');
      }
    };
    document.addEventListener('mousemove', moveGradiant);
    return () => {
      document.removeEventListener('mousemove', moveGradiant);
    };
  });

  return (
    <>
      
      <div className="app" id="app" ref={appRef} data-scroll-container>
        <div className="blink justify-center flex align-center">
          
        </div>
      </div>
      
      <h1 className='custom-font'>Welcome!</h1>
      
    </>
  );
}

export default App;

