import React, { useEffect, useState } from 'react';
import './App.css';
import { getDetails } from './services/services';
import { Stories } from './type/type';
import StoryBlock from './component/StoryBlock';
function App() {
  const [data, setData] = useState<Stories[]>([]);
  const [page, setPage] = useState<number>(1);

  //loading the first page
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDetails("")
      .then((data)=>{
          setData(data.data);
// console.log(data.data);
// console.log(data.last_page);
        }
      );
    }
    fetchData();
  },[])

  //function to add more data 
  async function pageChangeHandler() {
    setPage(page+1)
    await getDetails(`?page=${page}`)
    .then((newData)=>{
        setData(prevData => [...prevData, ...newData.data]);
      }
    );
  }

  return (
    <div className="App">
        {
          data && data!.map((story : Stories, index :number) => (
            <StoryBlock
              title={story.title}
              dek={story.dek}
              hero_image={story.hero_image}
            ></StoryBlock>
          ))
        }

    <div className='h-32 flex flex-row justify-center '>
      <button 
        className='rounded-2xl outline w-fit h-fit p-2 bg-slate-400 text-white font-semibold' 
        onClick={pageChangeHandler}> 
        load more pages 
      </button>
    </div>

    </div>
  );
}

export default App;
