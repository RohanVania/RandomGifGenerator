import React from 'react'
import useGif from '../hooks/useGif';


const Random = () => {

    //** Without Using Custom hook */

    // const [gif, setGif] = useState("");
    // const [loading, setLoading] = useState(true)

    // async function fetchGif() {
    //     setLoading(true);
    //     const { data } = await axios.get(url);
    //     setGif(data.data.images.downsized_large.url)
    //     setLoading(false)
    // }

    // useEffect(() => {
    //     fetchGif();
    // }, [])

    //** With Using Custom hook */
    const [gif,loading,fetchGif]=useGif()

    const handleClick = () => {
        fetchGif()
    }

    return (
        <div className='tw-bg-green-300  tw-w-full  tw-rounded-3xl tw-flex tw-flex-col tw-items-center tw-gap-5'>
            <h1 className='tw-text-center tw-uppercase tw-text-2xl tw-mt-5 tw-font-semibold tw-text-white'>
                Random Gif
            </h1>
            {!loading ? (<div className='tw-w-[99%] sm:tw-w-[60%] tw-h-[410px]  ' >
                <img className='tw-w-full tw-h-full tw-object-contain' src={gif} alt='decoration'/>
            </div>) : (<div class="spinner"></div>)
            }

            <button className='tw-text-center tw-bg-blue-50 tw-w-full tw-w-[100%] tw-p-4 tw-rounded-3xl ' onClick={handleClick}>Generate</button>
        </div>
    )
}

export default Random