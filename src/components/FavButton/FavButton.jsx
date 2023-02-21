import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import './FavButton.scss'
import { registerFav } from "../../redux/auth/auth.actions";
import { useNavigate } from "react-router-dom";

export default function FavButton({animal}) {

    const {user} = useSelector((state) => state.auth)

    //hacer un getUserById 
    //con este usuario actualizamos su array de favpets cuando click en addfav
    //comprobar si existía o no
    //a la hora de pintar activo o no comprobar si estaba ya en el array en un useEffect

    // const [isFav, setIsFav] = useState(false);

    const [fav, setFav] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // useEffect(() => {
    //     setIsFav(user.favPets.includes(animal._id));
    // }, []);

    const addFav = async (favData) => {
        //aquí es lo de comprobar si existía o no
        //luego si no destructurin favpets id y si existía quitarlo con filter a lo negativo (que traiga los que no coincidan con animal._id)
        //lanzar dispatch -> actualiza user

        // dispatch(registerFav(favData, navigate))
        console.log(favData);
        setFav(!fav);
    }

    return (
        <>
            <button className={`fav-button ${fav?"active":""}`} onClick={addFav} />
        </>
    );
}

