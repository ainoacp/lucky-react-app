import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { saveUserFavPets } from '../../redux/auth/auth.actions';
import './FavButton.scss'

export default function FavButton({animal}) {
    const {user} = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const { token, favPets } = useSelector((state) => state.auth);
 
    // const [isFav, setIsFav] = useState(false);

    const [fav, setFav] = useState(false);
    const [active, setActive] = useState(false);

    // useEffect(() => {
    //     setIsFav(fav.includes(animal._id));
    // }, [fav, animal]);


    //     const newFavs = isFav
    //     ? fav.filter((fav) => fav !== animal._id)
    //     : [...fav, animal._id];
    // setFav(newFavs);             Todo esto va en la funcion de abajo.

    function handleFavClick() {
    const newData = 'hola ainoa'; // replace with your new data
    dispatch(saveUserFavPets(newData, token));
    setFav(!fav);
    setActive(!active);
    }
    return (
        <>
            <button className={`fav-button ${active?"active":""}`} onClick={handleFavClick} />
        </>
    );
}

