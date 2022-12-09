import './App.css';
import LeftsideBar from './component/pages/LeftsideBar';
import RightsideBar from './component/pages/RightsideBar';


function App() {

  return (
    <div className='flex flex-col md:flex-row justify-center items-center'>
      <div className='w-[27rem] md:block hidden'>
        <LeftsideBar></LeftsideBar>
      </div>
      <div className='w-full md:w-4/5'>
        <RightsideBar></RightsideBar>
      </div>
    </div>
  );
}

export default App;
