import React, { createContext } from 'react';

interface LibraryProps {
    url: string,
    text?: string
}

interface LibraryContextProps {
    listImages: Array<LibraryProps>,
}

export const defaultValue: LibraryContextProps = {
    listImages: []
};

const LibraryContext = createContext<LibraryContextProps>({
    ...defaultValue
})

export default LibraryContext;