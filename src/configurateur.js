import React from 'react';
import { useSelector } from 'react-redux';
import Bleu from './configurateur/couleurs/selection/bleu.jpg';
import Blanc from './configurateur/couleurs/selection/blanc.jpg';
import Noir from './configurateur/couleurs/selection/noir.jpg';
import './config.css';
import { useDispatch } from 'react-redux';
import { changeColor } from './features/alpineSlice';
import { changeJantes } from './features/alpineSlice';
import paintBleu from '../src/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (1).jpg'
import paintBlanc from '../src/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (1).jpg'
import paintNoir from '../src/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (1).jpg'
import janteStandard from '../src/configurateur/jantes/vues/couleur-blanc_jante-standard (2).jpg'
import janteSerac from '../src/configurateur/jantes/vues/couleur-blanc_jante-serac (2).jpg'
import selectStandard from '../src/configurateur/jantes/selection/jante-standard.jpg'
import selectSerac from '../src/configurateur/jantes/selection/jante-serac.jpg'




function Configurateur() {
    const alpine = useSelector(state => state.alpine);
    console.log(alpine);

    const dispatch = useDispatch();

    const setColor = (colorName, colorPrice, colorImage) => {
       
        dispatch(changeColor({
            name: colorName,
            price: colorPrice,
            image: colorImage
        }));

        const changeJantes = (janteName, jantePrice, janteImage) => {
       
            dispatch(changeJantes({
                name: janteName,
                price: jantePrice,
                image: janteImage
            }));
    }
    
        }

    return (
        <div>
            <h1>Configurateur Alpine</h1>
            <p>
                Bienvenue dans notre configurateur Alpine ! Ici, vous pouvez personnaliser votre Alpine selon vos préférences.
                Commencez par choisir les options et les accessoires disponibles pour votre modèle.
                Une fois que vous avez terminé, vous pourrez voir le prix total de votre Alpine configurée.
            </p>
            {/* <p>Prix de base : {prixBase} €</p> */}

           

            <h2>Couleur</h2>
            <p>Choisissez la couleur de votre Alpine : {alpine.color.name}</p>
            <img src={alpine.color.image} alt={alpine.color.name} />
            <p>Prix : {alpine.color.price} €</p>
            <img src={Bleu} alt="Bleu" onClick={() => setColor('Bleu', 1800, paintBleu)} />
            <img src={Blanc} alt="Blanc" onClick={() => setColor('Blanc', 0, paintBlanc)} />
            <img src={Noir} alt="Noir" onClick={() => setColor('Noire', 840, paintNoir)} />



            <h2>Jantes</h2>
            <p>Choisissez la couleur de vos jantes : {alpine.jantes.name}</p>
            <img src={alpine.jantes.image} alt={alpine.jantes.name} />
            <p>Prix : {alpine.jantes.price} €</p>
            <img src={selectStandard} onClick={() => changeJantes('Standard', 0, janteStandard )}/>
            <img src={selectSerac} onClick={() => changeJantes('Serac', 1000, janteSerac)}/>

            


            
            
        </div>
    );
}



export default Configurateur;
