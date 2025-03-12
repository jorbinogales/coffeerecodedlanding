import { CSSTransition } from 'react-transition-group';
import logo from '../assets/logo.png';

const LoaderComponent = () => {
    return (
      <div className="loader-container">
        <CSSTransition
          in={true}
          appear={true}
          timeout={3000}
          classNames="logo-animation"
        >
          <img src={logo} alt="Logo" className="loader-logo" />
        </CSSTransition>
      </div>
    );
  };
  
  export default LoaderComponent;