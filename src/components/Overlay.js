import './Overlay.css';
import { useGlobalContext } from '../context';
const Overlay = () => {
  const {closeLoginForm} = useGlobalContext();
  return <div className="overlay" onClick= {closeLoginForm}></div>;
};
export default Overlay;
