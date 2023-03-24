import Cards from '../../components/Cards/Cards';

import Sidebar from '../../components/Sidebar';
import MainDash from '../../components/MainDash/MainDash';
import RightSide from '../../components/RigtSide/RightSide';
import '../../App.css';
const Dashboard = () => {
  return (
    <div className="Appdach">
    <div className="AppGlassdach">
    
      <Sidebar/>
      <MainDash/>
      <RightSide/>
      </div>
      </div>
     
  );
};


export default Dashboard;