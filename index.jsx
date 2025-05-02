import { render } from '@czechitas/render'
import { Header } from './Header'
import { Intro } from './Intro'
import { Pose } from './Pose'
import './style.css'

document.querySelector('#root').innerHTML = render(
    <div>
        <Header title="Jogíni"/>
        <Intro 
            heading="Vítejte mezi Jogíny"
            text="Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit
           něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
           Postupně se seznámíte se základními principy jógy, jak přístupovat k
           sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
           svoje tělo, pocity a emoce."
        />
        <Pose img='img/yoga-pose.jpg'/>
    </div>
  );

  