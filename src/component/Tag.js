import React, { useState } from 'react'
import useGif from '../hooks/useGif';


const Tag = () => {
    const [tag, setTag] = useState("");

    //** Without Custom hook */
    // const url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_API_KEY}`
    // const tagUrl=`https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_API_KEY}&tag=${tag}`

    // const [gif, setGif] = useState("");
    // const [loading, setLoading] = useState(true)

    // async function fetchGif() {
    //     setLoading(true);
    //     const { data } = await axios.get(tagUrl);
    //     setGif(data.data.images.downsized_large.url)
    //     setLoading(false)
    // }

    // useEffect(() => {
    //     fetchGif();
    // }, [])

    //** With Custom hook */

    const [gif,loading,fetchGif]=useGif(tag);

    const handleClick = () => {
        fetchGif()
    }

    return (
        <div className='tw-bg-purple-500  tw-w-full  tw-rounded-3xl tw-flex tw-flex-col tw-items-center tw-gap-5'>
            <h1 className='tw-text-center tw-uppercase tw-text-2xl tw-mt-5 tw-font-semibold tw-text-white'>
                Random {tag} Gif
            </h1>
            {!loading ? (<div className='tw-w-[99%] sm:tw-w-[60%] tw-h-[410px]  ' >
                <img className='tw-w-full tw-h-full tw-object-contain' src={gif} />
            </div>) : (<div className="spinner"></div>)
            }
            <div className='tw-w-full tw-space-y-2'>
                <input type='text' className='tw-p-3 tw-w-[100%] tw-rounded-3xl tw-text-center' placeholder='Enter what type of gif you want !!' value={tag} onChange={(event)=>setTag(event.target.value)} />
                <button className='tw-text-center tw-bg-blue-50 tw-w-full  tw-p-4 tw-rounded-3xl ' onClick={handleClick}>Generate</button>
            </div>
        </div>
    )
}

export default Tag