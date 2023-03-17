import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { getRandomImage } from '@/api/random'
import {renderImageItems, MAX_IMAGES, LibraryProps} from '@/constants/render'

const LibraryHooks = () => {
    const [count, setCount] = useState<number>(0);
    const [countdown, setCountdown] = useState<number>(10);
    const [listImages, setListImages] = useState<Array<LibraryProps>>(renderImageItems);
    const [lastImage, setLastImage] = useState('');

    const handleLoad = useCallback(async () => {
        try {
            setCountdown(10)
            const response = await getRandomImage();
            let getItems = [...listImages];
            console.log('count', count)
            getItems[count].url = response.data.message
            setLastImage(response.data.message)
            setListImages(getItems);
            setCount(count + 1)
            console.log('finish add images')   
        } catch (error) {
            console.log('lib failed', error)
        }
    }, [count])

    const handleCountdown = useCallback(() => {
        let getItems = [...listImages];
        getItems[count].text = countdown
        setListImages(getItems);
        console.log('test')
    }, [countdown])

    useEffect(() => {
        if (count < MAX_IMAGES) {
            const interval = setInterval(() => {
                handleLoad()
            }, 10000)
            return () => clearInterval(interval)
        }
    }, [handleLoad])

    useEffect(() => {
        if (count < MAX_IMAGES || countdown < 0) {
            const intervalCountDown = setInterval(() => {
                setCountdown(seconds => seconds - 1)
                handleCountdown()
            }, 1000)
            return () => {
                clearInterval(intervalCountDown)
            }
        }
    }, [handleCountdown])
    return {
        listImages,
        lastImage
    }
}

export default LibraryHooks