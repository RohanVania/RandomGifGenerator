import './App.css';
import Random from './component/Random';
import Tag from './component/Tag';

// REACT_APP_API_KEY='jEIPyQhfEckDPw75YWEFjT5VIvkbUVe3'

function App() {
  return (
    <div className="">
      <div className=' tw-text-white tw-uppercase  tw-font-bold tw-text-3xl  tw-text-center tw-w-[95%] sm:tw-w-[80%] tw-mx-auto tw-rounded-lg tw-p-2 tw-mt-[10px] '>
        Random Gif Generator
      </div>

      <div className='tw-flex tw-flex-col tw-gap-[30px] tw-mt-[40px] tw-w-[95%] sm:tw-w-[80%] tw-mx-auto'>
        <Random />
        <Tag />
      </div>

    </div>
  );
}

export default App;
