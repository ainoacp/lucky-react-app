import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import './FavButton.scss'
import { registerFav } from "../../redux/auth/auth.actions";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function FavButton({animal, myUser}) {

    const {user} = useSelector((state) => state.auth)
    //hacer un getUserById 
    //con este usuario actualizamos su array de favpets cuando click en addfav
    //comprobar si existía o no el id de la pet
    //a la hora de pintar activo o no comprobar si estaba ya en el array en un useEffect

    const [fav, setFav] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        console.log("esto es el user", user)
        console.log("esto", animal)
        if(user?.favPets.find((pet) => pet._id === animal._id)) {
            setFav(true);
        }
    }, []);

    const addFav = async () => {
        console.log("esto es el myuser", myUser)
        if(myUser.favPets.includes(animal._id)) {
            console.log("entrandoooo", animal._id)
            const newFavPets = myUser.favPets.filter((pet) => pet !== animal._id)
            console.log("new fav pets", newFavPets)
            myUser.favPets = [...newFavPets]
        } else {
            myUser.favPets = [...myUser.favPets, animal._id]
        }
        console.log("hola", myUser)
        dispatch(registerFav(myUser))
        setFav(!fav);

    }
        //aquí es lo de comprobar si existía o no
        //luego si no destructurin favpets id y si existía quitarlo con filter a lo negativo (que traiga los que no coincidan con animal._id)
        //lanzar dispatch -> actualiza user

    return (
        <>
            <button className={`fav-button ${fav?"active":""}`} onClick={addFav} />
        </>
    );
}

