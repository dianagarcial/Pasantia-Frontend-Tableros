import '../styles/breadcrumbs.css'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';

export const Breadcrumbs = () => {

  const pathArray = []
  pathArray.push(window.location.pathname.split('/').filter(Boolean).map(segment => segment.replace(' ', 'Inicio')));
 

  if (pathArray[0].length === 3) {
    return (
      <div className="bread">
       <a href="/"><HomeIcon/></a><div className='linea'><NavigateNextIcon fontSize="small" /></div><a href={`/${pathArray[0][0]}`}>{pathArray[0][0]}</a><div className='linea'><NavigateNextIcon fontSize="small" /></div><a href={`/${pathArray[0][0]}/${pathArray[0][1]}`}>{pathArray[0][1]}</a><div className='linea'><NavigateNextIcon fontSize="small" /></div><h4 h4="true" className='sel'>{pathArray[0][2]}</h4>

      </div>

    );  
    }else if (pathArray[0].length === 2) {
      return (
        <div className="bread">
         <a href="/"><HomeIcon/></a><div className='linea'><NavigateNextIcon fontSize="small" /></div><a href={`/${pathArray[0][0]}`}>{pathArray[0][0]}</a><div className='linea'><NavigateNextIcon fontSize="small" /></div><h4 h4="true" className='sel'>{pathArray[0][1]}</h4>

        </div>

      );


    } else if (pathArray[0].length === 1) {
      return (
        <div className="bread">
          <a href="/"><HomeIcon/></a><div className='linea'><NavigateNextIcon fontSize="small" /></div><h4 h4 className='sel'>{pathArray[0][0]}</h4>

        </div>

      );


    } else if (pathArray[0].length === 0) {
      return (
        <div className="bread">
          <a href="/"><HomeIcon/> Inicio</a>
        </div>

      );
    }else{
      return (
        <div>
          
        </div>

      );

    }


}

