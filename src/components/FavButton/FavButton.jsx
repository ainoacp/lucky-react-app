import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import './FavButton.scss'
import { registerFav } from "../../redux/auth/auth.actions";
import { useNavigate } from "react-router-dom";

export default function FavButton({animal}) {
    const {user} = useSelector((state) => state.auth)
 
    // const [isFav, setIsFav] = useState(false);

    const [fav, setFav] = useState(false);
    const [active, setActive] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // useEffect(() => {
    //     setIsFav(fav.includes(user.favPets._id));
    // }, [fav, animal]);

    const addFav = async (favData) => {
        dispatch(registerFav(favData, navigate))
        // console.log(JSON.stringify(favData));
        setFav(!fav);
        setActive(!active);
    }

    // function handleFavClick() {
    // //     const newFavs = isFav
    // //     ? fav.filter((fav) => fav !== animal._id)
    // //     : [...fav, animal._id];
    // // setFav(newFavs);
    // setFav(!fav);
    // setActive(!active);
    // }
    return (
        <>
            <button className={`fav-button ${active?"active":""}`} onClick={addFav} />
        </>
    );
}

