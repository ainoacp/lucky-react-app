import { useSelector } from "react-redux";

export default function FavPetsPage() {

    const {user} = useSelector((state) => state.auth)

    return (
        <div key={user._id}>
            <img src={user.favPets[0].imagenes[0] || user.favPets[0].image} />
        </div>
    )
}