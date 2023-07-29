import { useState } from "react";
import { useRouter } from 'next/router'
export default function Projects() {
  const [buttonText, setButtonText] = useState(`inviami un'email`);
  const router = useRouter()

  function handleClick() {
    if (buttonText != `focacciomario@gmail.com`){
    setButtonText('focacciomario@gmail.com');
    }
    else {
      router.push('mailto:focacciomario@gmail.com')
    }
  }

  return (
    <div className="py-10 sm:px-2 lg:relative lg:px-0" id="overview">
      <div className="prose dark:prose-invert mx-auto max-w-6xl px-4 lg:max-w-6xl lg:px-8 xl:px-12">
        <h2 className="text-center font-mono">Progetti</h2>
        <p>
        Spero che questa sezione possa non solo 
        essere una testimonianza delle mie esperienze presenti e passate, ma anche 
        ispirarti per nuove idee e possibili collaborazioni future. 
        Se hai qualche domanda o suggerimento &nbsp;
        <button onClick={handleClick} 
        className=" font-mono
        px-3 py-1 no-underline bg-secondary text-white rounded-full shadow-lg
        transition hover:transition-all ease-in-out delay-150 hover:bg-primary hover:text-secondary">
          {buttonText}
        </button>
        </p>
        <div className="not-prose my-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="group relative rounded-xl border border-slate-200 dark:border-slate-800">
            <a href="https://drive.google.com/file/d/1PG2itVoDzSJIvwxlmHyDgeTCEtYHyIDU/view?usp=drive_link" target="_blank">
            <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
            <div className="relative overflow-hidden rounded-xl p-6">
              <img
                src="/sitk.svg"
                alt="SimpleITK"
                className="h-12 w-auto"
              />
              <h2 className="mt-4 font-display text-base text-primary dark:text-primary-dark">
                Registrazione di immagini cliniche (CT) e visualizzazione del displacement field in Python
              </h2>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">
              Il progetto si focalizza sulla registrazione free-form di immagini toraciche e sulla visualizzazione dei campi vettoriali del displacement field. Utilizzando Python e la libreria di SimpleITK, l'obiettivo è registrare immagini mediche 3D in modo preciso e di visualizzare in modo intuitivo il campo vettoriale di spostamento risultante.
              Al termine delle operazioni, si ottiene una panoramica precisa delle variazioni tra le immagini toraciche originali e quelle registrate.
              </p>
            </div>
            </a>
          </div>

          <div className="group relative rounded-xl border border-slate-200 dark:border-slate-800">
            <a href="https://github.com/focacciomario/LM_Tesina_Sperimentazione_Chatbot" target="_blank">
            <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
            <div className="relative overflow-hidden rounded-xl p-6">
              <img
                src="openai.svg"
                alt=""
                className="h-12 w-auto"
              />
              <h2 className="mt-4 font-display text-base text-primary dark:text-primary-dark">
              Web App con Intelligenza Artificiale Integrata tramite API di OpenAI
              </h2>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">
              Il progetto mira a sviluppare una Web App interattiva utilizzando Python e la libreria Streamlit, con l'obiettivo di integrare un Linguaggio Naturale di Livello Umano (LLM) attraverso le API di OpenAI. L'obiettivo è consentire agli utenti di interagire in modo intuitivo con il modello di IA per ottenere risposte e informazioni pertinenti a partire da domande e testi inseriti.
              </p>
            </div>
            </a>
          </div>
          

          <div className="group relative rounded-xl border border-slate-200 dark:border-slate-800">
            <a href="https://www.kaggle.com/mind3dita/heart-failure-prediction" target="_blank">
            <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
            <div className="relative overflow-hidden rounded-xl p-6">
              <img
                src="ipynb.svg"
                alt="Jupyter Notebook Predizione Insufficienza Cardiaca Heart Failure Prediction"
                className="h-12 w-auto"
              />
              <h2 className="mt-4 font-display text-base text-primary dark:text-primary-dark">
                IPYNB - Analisi e predizione della mortalità per insufficienza cariaca mediante tecniche di Data Mining
              </h2>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">
              Il progetto si propone di analizzare e prevedere la mortalità dei pazienti affetti da insufficienza cardiaca utilizzando tecniche avanzate di data mining e machine learning.
              L'obiettivo principale del progetto è creare un modello predittivo preciso ed affidabile per la mortalità legata all'insufficienza cardiaca. Il modello potrebbe essere utilizzato da medici e professionisti sanitari come strumento di supporto decisionale per identificare i pazienti a rischio elevato e adottare interventi tempestivi per migliorare la gestione clinica e la qualità di vita dei pazienti.
              </p>
            </div>
            </a>
          </div>

          <div className="group relative rounded-xl border border-slate-200 dark:border-slate-800">
            <a href="https://www.kaggle.com/mind3dita/stroke-prediction-dataset" target="_blank">
            <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
            <div className="relative overflow-hidden rounded-xl p-6">
              <img
                src="ipynb.svg"
                alt="Jupyter Notebook Stroke Prediction Ictus Predizione"
                className="h-12 w-auto"
              />
              <h2 className="mt-4 font-display text-base text-primary dark:text-primary-dark">
              IPYNB - Predizione degli ictus mediante tecniche di Data Mining e apprendimento d'insieme
              </h2>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">
              Il progetto mira a sviluppare una pipeline avanzata di elaborazione dati e apprendimento d'insieme per prevedere la probabilità che un paziente possa sviluppare un ictus. Utilizzando un dataset ricco di informazioni riguardanti il genere, l'età, diverse patologie e lo stato di fumatore del paziente, l'obiettivo è creare un modello predittivo accurato. 
              Il progetto potrebbe avere importanti implicazioni nel campo della salute pubblica, consentendo una diagnosi precoce e la possibilità di intraprendere misure preventive per ridurre il rischio di ictus.
              </p>
            </div>
            </a>
          </div>
        </div>
          {/** Collaborazioni */}
          <h2 className="font-mono text-center"> Collaborazioni </h2>

          <div className="not-prose my-12 grid grid-cols-1 gap-6 sm:grid-cols-2">

          <div className="group relative rounded-xl border border-slate-200 dark:border-slate-800">
            <a href="https://growave.it" target="_blank">
            <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
            <div className="relative overflow-hidden rounded-xl p-6">
              {/**
              <img
                src="/assets/images/obsidian_icon.png"
                alt=""
                className="h-12 w-auto"
              />
               */}
              <h2 className="mt-4 font-display text-base text-primary dark:text-primary-dark">
                Growave
              </h2>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">
                Con sede a Catanzaro e Cosenza, il progetto Growave nasce dall'idea di due giovani imprenditori cresciuti nella terra italica bagnata dai due mari: la Calabria.
                L'obbiettivo del nostro team è realizzare progetti interattivi, intuitivi, che catturano l'attenzione e fanno vivere una user experience unica.

              </p>
            </div>
            </a>
          </div>

          <div className="group relative rounded-xl border border-slate-200 dark:border-slate-800">
            <a href="https://coop-arabafenice.it" target="_blank">
            <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
            <div className="relative overflow-hidden rounded-xl p-6">
              {/**
              <img
                src="/assets/images/obsidian_icon.png"
                alt=""
                className="h-12 w-auto"
              />
               */}
              <h2 className="mt-4 font-display text-base text-primary dark:text-primary-dark">
                Cooperativa Sociale Onlus Araba Fenice
              </h2>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">
              La Cooperativa Sociale Onlus Araba Fenice nasce ed opera dal 1999 con lo 
              scopo di perseguire l'interesse generale della comunità alla promozione 
              umana e all'integrazione sociale dei cittadini, attraverso la gestione 
              di servizi socio-sanitari ed educativi.
              </p>
            </div>
            </a>
          </div>

          <div className="group relative rounded-xl border border-slate-200 dark:border-slate-800">
            <a href="https://biotecnomed.it" target="_blank">
            <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
            <div className="relative overflow-hidden rounded-xl p-6">
              {/**
              <img
                src="/assets/images/obsidian_icon.png"
                alt=""
                className="h-12 w-auto"
              />
               */}
              <h2 className="mt-4 font-display text-base text-primary dark:text-primary-dark">
                Biotecnomed
              </h2>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">
              L’innovazione applicata al settore Life Sciences contribuisce direttamente ad aumentare la qualità della vita e il benessere dei cittadini e della società.
              Biotecnomed fornisce un insieme integrato di servizi dedicati a imprese, enti di ricerca, professionisti e inventori che hanno l’esigenza di un supporto scientifico e operativo per sviluppare progetti di R&D in ambito biotecnologico e medicale.
              </p>
            </div>
            </a>
          </div>

          
        </div>



      </div>
    </div>
  );
}
