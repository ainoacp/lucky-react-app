import { useState } from "react";

import './FavButton.scss'

export default function FavButton({animal}) {

    // const {f} = useContext(FavContext);
    
    // const [fav, setFav] = useContext(FavContext);
    // const [isFav, setIsFav] = useState(false);

    const [fav, setFav] = useState(false);
    const [active, setActive] = useState(false);

    // useEffect(() => {
    //     setIsFav(fav.includes(animal._id));
    // }, [fav, animal]);

    function handleFavClick() {
    //     const newFavs = isFav
    //     ? fav.filter((fav) => fav !== animal._id)
    //     : [...fav, animal._id];
    // setFav(newFavs);
    setFav(!fav);
    setActive(!active);
    }

    return (
        <div>
            <button className={`fav-button ${active?"active":""}`} onClick={handleFavClick}/>
        </div>
    );
}

