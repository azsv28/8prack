import Carta from './componentes/cartas';
import './App.css';


function App() {
  return (
    <div className="App">
     
     <div className='contenedor-principal'>
        <Carta
        informasion='Nightwing, Este artículo trata sobre el primer Robin. Para sus sucesores, véase Jason Todd, Timonthy Drake, Stephanie Brown, Carrie Kelly y Damian Wayne. Fue un miembro fundador de JUSTICIA JOVEN, y el protegido de Batman. Dick es un artista marcial muy calificado, un detective de alto nivel y un experto en tecnología. Es ahora conocido como un héroe aparte, Nightwing, y como uno de los mejores detectives del mundo en la Segunda Temporada. Se descubre que lleva un año como líder del equipo.'
        imagen="Nightwing"
        />
        <Carta
        informasion='Kaldur ahm (en Atlante Kαλδυρ αμ), antiguamente conocido como Aqualad, es un Atlante y antiguo Líder de El Equipo y compañero de Aquaman. Era el chico de mayor edad del grupo y habitualmente era el más paciente y sensato. Culpa al equipo por la muerte de Tula y en la segunda temporada es el compañero Black Manta y se descubre que este es su padre. Eventualmente, el rey Orin se retiró su vida heroica y Kaldur asumió el manto de Aquaman, se unió a la Liga de la Justicia y se convirtió en su líder en julio de 2018.'
        
        imagen="aqualad"
        />
        <Carta
        informasion='Superboy(también conocido como Conner Kent y Kon-El, "nacido" el 21 de marzo de 2010) es un genomorfo, un clon binario de Superman y Lex Luthor, y miembro fundador del Equipo. El 25 de febrero de 2019, Superboy se reveló al mundo y dejó el Equipo para convertirse en miembro de los Outsiders, y seguiría inspirando a la futura Legión de Superhéroes. Después de comprometerse con Señorita Marciana, la pareja viajó a Marte para prepararse para su próxima boda, pero él se sacrificó heroicamente para proteger a los marcianos de la bomba genética de Ma alefaak. Chica Fantasma lo salvó, pero los atrapó a ambos en la Zona Fantasma en el proceso Superboy cayó bajo la esclavitud del general Dru-Zod y lo siguió lealmente hasta que su mente fue restaurada y trabajó junto a Superman para derrotarlo'
        imagen="coner"
        />
         <Carta
        informasion='Wally West, Alias Chico Flash, Kid Flash en E.U.A., Fue un miembro fundador del Equipo. Él fue el Compañero y el Sobrino politico de Barry Allen, El Flash actual. Él ha sido un Superhéroe por 2 años. Él vivía en Ciudad Central con su novia Artemisa desde hace 3 años. Desaparece por un tornado de tiempo debido a que se le considera muerto pero en realidad eso es una incógnita.'
        imagen="chicoflahs"
        />
      </div>
    </div>
  );
}

export default App;
