import Hero from "@/components/Hero"
import { SimpleLayout } from "@portaljs/core"
export default function About (){
    return(
    <SimpleLayout showSidebar="true" showToc="true">
        <div className="font-mono">
            <h2 className="mt-4 text-3xl font-bold mb-4">Che cos'è un digital garden</h2>
            <p className="font-mono mb-4">
            Un giardino digitale è un approccio alla pubblicazione di conoscenze personali sul web. 
            Diverso da un blog che contiene articoli rifiniti in ordine cronologico inverso. 
            I giardini digitali sono più simili a wiki work-in-progress. Una raccolta di idee 
            grezze e incomplete che crescono e si evolvono nel tempo attraverso una costante 
            cura (editing, riscrittura e revisione).    
            </p>
            <div className="w-full border-b-2 border-secondary"></div>

            <h3 className="mt-4 text-xl font-bold mb-4">Caratteristiche di un digital garden</h3>
            <p className="font-mono mb-4">
            <ul className=" list-disc list-inside">
                <li>
                    Organizzato da relazioni contestuali 
                </li>
                <li>
                    Apprendimento in pubblico
                </li>
                <li>
                    Imperfezioni e sbavature
                </li>
                <li>
                    Divertente, personale e sperimentale
                </li>
                <li>
                    Diversi mezzi di contenuto (video, documenti, note, schizzi)
                </li>
                <li>
                    Pubblicazione personale e indipendente
                </li>
            </ul>   
            </p>
            <div className="w-full border-b-2 border-secondary"></div>

            <h3 className="mt-4 text-3xl font-bold mb-4">About Mario's garden</h3>
            <p className="font-mono mb-4">
            Lo scopo di questo giardino è quello di essere un modello per la creazione sul web. In esso sono contenute note che abbracciano il ramo dell'informazione, dell'ingegneria e della biologia. Vuole essere semplice e diretto. Il contenuto è pensato come poesia, ogni parola costa.  
            <br/><br/>
            <blockquote>
                <i>The most valuable of all talents is that of never using two words when one will do.</i><br/>
                <i className=" float-right"> Thomas Jefferson - United States Founding Father</i>
            </blockquote>
            <br/>
            </p>
            
            <div className="w-full border-b-2 border-secondary"></div>

        </div>
    </SimpleLayout>
    )
}