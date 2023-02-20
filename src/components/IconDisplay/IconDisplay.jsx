import perroIco from '../../assets/Primarios/filtros-animales-menus/animales/perro/perrop.png';
import gatoIco from '../../assets/Primarios/filtros-animales-menus/animales/gato/cat.png';
import conejoIco from '../../assets/Primarios/filtros-animales-menus/animales/conejo/conejo1x.png';
import cobayaIco from '../../assets/Primarios/filtros-animales-menus/animales/cobaya/cobaya.png';
import pMamIco from '../../assets/Primarios/filtros-animales-menus/animales/pequeños-mamiferos/pequeñoMamiferos.png';
import huronIco from '../../assets/Primarios/filtros-animales-menus/animales/huron/huron.png';
import pezIco from '../../assets/Primarios/filtros-animales-menus/animales/pez/Fish.png';
import reptilIco from '../../assets/Primarios/filtros-animales-menus/animales/reptiles/reptil.png';
import anfibioIco from '../../assets/Primarios/filtros-animales-menus/animales/anfibios/anfibio.png';
import aracIco from '../../assets/Primarios/filtros-animales-menus/animales/aracnidos-o-insectos/aracnidos-insectos.png';
import aveIco from '../../assets/Primarios/filtros-animales-menus/animales/ave/ave.png';
import Default from '../../assets/Primarios/filtros-animales-menus/animales/perro/perrop.png';
import { useSelector } from 'react-redux';

export default function IconDisplay({ type }) {

    const iconMap = {
        "Perro": perroIco,
        "Gato": gatoIco,
        "Conejo": conejoIco,
        "Cobaya": cobayaIco,
        "Pequeño Mamífero": pMamIco,
        "Hurón": huronIco,
        "Pez": pezIco,
        "Reptil": reptilIco,
        "Anfibio": anfibioIco,
        "Arácnido o Insecto": aracIco,
        "Ave": aveIco
    }

    const icon = iconMap[type];
    
    return (
        <img className="c-slider_img" src={icon || Default} alt={type} />
    );
}