import React, { useState, useEffect } from 'react'
import axios from 'axios';

/**
 * 
 * @param {String} tag 
 * @description This function is about Custom hook
 * @returns 
 */

const useGif = (tag) => {
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(true)

    async function fetchGif() {
        try {
            setLoading(true);
            const { data } = await axios.get(tag ? `https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_API_KEY}&tag=${tag}` : `https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_API_KEY}`);
            setGif(data.data.images.downsized_large.url)
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchGif(tag);
    }, [])

    return [gif,loading,fetchGif];

}

export default useGif;