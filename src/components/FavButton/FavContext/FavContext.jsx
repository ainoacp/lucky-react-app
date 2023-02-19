import { useEffect, useState } from "react";
import React from "react";

export const FavContext = React.createContext();

export default function FavoriteProvider({ children }) {

    
    
    const [favorites, setFavorites] = useState([]);
    
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    return (
        <FavContext.Provider value={{ favorites, setFavorites }}>
            {children}
        </FavContext.Provider>
    );
}