import { useRouter } from "next/router";
import { useState } from "react";

export default function Resume () {

    const [buttonText, setButtonText] = useState(`Mostra email`);
    const router = useRouter()

    function handleClick() {
        if (buttonText != `focacciomario@gmail.com`){
        setButtonText('focacciomario@gmail.com');
        }
        else {
        router.push('mailto:focacciomario@gmail.com')
        }
    }

    const skills = ["React", "JavaScript", "HTML","SCSS/SASS", "Python", "SQL", "PostgreSQL", "CSS", "Tailwind", "Bootstrap", "PHP", "Composer", "Linux", "Server", "Cloud", "Flask", "Artificial Intelligence", "Data Mining", "3D Printing", "Marlin Firmware", "AutoCAD 3D", "Fusion360" ];

    const esperienze = [
        {name: 'Esperienza 1', azienda: 'azienda 1', data:'YYYY/MM/DD - YYYY/MM/DD', descrizione:'descrizione esperienza, attività, mansioni'},
        {name: 'Esperienza 2', azienda: 'azienda 2', data:'YYYY/MM/DD - YYYY/MM/DD', descrizione:'descrizione esperienza, attività, mansioni'},
        {name: 'Esperienza 3', azienda: 'azienda 3', data:'YYYY/MM/DD - YYYY/MM/DD', descrizione:'descrizione esperienza, attività, mansioni'},
        {name: 'Esperienza 4', azienda: 'azienda 4', data:'YYYY/MM/DD - YYYY/MM/DD', descrizione:'descrizione esperienza, attività, mansioni'},
    ]

    const certificazioni = [
        {name: 'Corso CST Studio', azienda: 'Novamacut', data:'2022/09/30', descrizione:'Conoscenze e abilità di utilizzo del software CST Studio sviluppato da Dassault Systemes. Modellazione 3D, simulazione multifisica (meccanica e termica),Electronic Design Automation, Signal Integrity e Power Integrity '},
        {name: 'Fondamenti di marketing digitale', azienda: 'Google Digital Training', data:'2019/12/28', descrizione:'Ottenuta a seguito del completamento della verifica erogata da Google EMEA e IAB Europe'},
        {name: 'AutoCAD Certified Professional', azienda: 'Autodesk', data:'2016/12/19', descrizione:'Codice della certificazione: '},
        {name: 'Corso AutoCAD rendering e stampa 3D', azienda: 'Istituto Volta', data:'2016/10/16', descrizione:'Corso di modellazione e stampa 3D utilizzando anche il software cloud Autodesk Fusion360'},
    ]

    return (

        
    <>
    

    <div className="relative max-h-fit">
    <div className="mt-6 max-w-screen-lg md:flex mx-auto">
    <div className="md:w-1/2 p-2">
      <div className="md:fixed">
        <div className="md:block">
          <img
            className="h-32 w-32 rounded-full mx-auto"
            src="https://avatars.githubusercontent.com/u/13237672?v=4"
          />
          <div className="mb-12 text-center mt-4 justify-center items-center">
            <h1 className="text-2xl lg:text-xl text-gray-300 font-bold">
              Mario Focaccio
            </h1>
            <div className="md:text-lg text-white">
                <small>Master's degree student<br/> in Biomedical Engineering</small>
                </div>
            
          </div>
        </div>
        <div className="mx-4 my-4 hidden md:block">
          
          <div className="my-5 text-lg text-white flex">
            <div className="mr-2">
              <svg
                className="text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path fill="#ffffff"
                  d="M12,14c2.206,0,4-1.794,4-4s-1.794-4-4-4s-4,1.794-4,4S9.794,14,12,14z M12,8c1.103,0,2,0.897,2,2s-0.897,2-2,2 s-2-0.897-2-2S10.897,8,12,8z"
                />
                <path fill="#ffffff"
                  d="M11.42,21.814C11.594,21.938,11.797,22,12,22s0.406-0.062,0.58-0.186C12.884,21.599,20.029,16.44,20,10 c0-4.411-3.589-8-8-8S4,5.589,4,9.995C3.971,16.44,11.116,21.599,11.42,21.814z M12,4c3.309,0,6,2.691,6,6.005 c0.021,4.438-4.388,8.423-6,9.73C10.389,18.427,5.979,14.441,6,10C6,6.691,8.691,4,12,4z"
                />
              </svg>
            </div>
            Catanzaro, Italy
          </div>
          <a
            href="https://it.linkedin.com/in/focacciomario"
            className="my-5 text-lg text-white flex"
          >
            <div className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path fill="#ffffff"
                  d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h16c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z M8.339,18.337H5.667	v-8.59h2.672V18.337z M7.003,8.574c-0.856,0-1.548-0.694-1.548-1.548s0.691-1.548,1.548-1.548c0.854,0,1.548,0.693,1.548,1.548	S7.857,8.574,7.003,8.574z M18.338,18.337h-2.669V14.16c0-0.996-0.018-2.277-1.388-2.277c-1.39,0-1.601,1.086-1.601,2.207v4.248	h-2.667v-8.59h2.56v1.174h0.037c0.355-0.675,1.227-1.387,2.524-1.387c2.704,0,3.203,1.778,3.203,4.092V18.337z"
                />
              </svg>
            </div>
            LinkedIn
          </a>
        </div>
        <div className="mx-4 md:block text-center">
        <button onClick={handleClick} 
                className=" font-mono
                px-3 py-1 no-underline bg-secondary text-white rounded-full 
                shadow-lg transition hover:transition-all ease-in-out delay-150 
                hover:bg-primary hover:text-secondary w-full">
                {buttonText}
            </button>
        </div>
      </div>
    </div>

    <div className="md:w-2/3 p-2 w-full">
      <div className="mx-4 mb-6">
        <h1 className="mb-4 text-4xl text-white font-bold">Bio</h1>
        <p className="text-lg">
          Studente magistrale in Ingegneria Biomedica presso l'Università degli Studi Magna Graecia di Catanzaro.<br/>
          Appassionato di scienze e tecnologie, da sempre studio e leggo argomenti gravitanti intorno a questi mondi. 
          
        </p>
      </div>
      <div className="w-full border-b-2 border-secondary"></div>
      <div className="mx-4 mt-5 mb-5">
        <h1 className="mb-4 text-4xl text-white font-bold">Esperienze</h1>
        <ul>

            {esperienze.map((item) => (
                <li key={item.name} id={item.name}>
                    <h2 className="text-2xl font-medium text-gray-300">
                    {item.name}
                    </h2>
                    <div className="mt-1">
                    <div>
                        <i className="bx bx-buildings" ></i>
                        <small className="text-base text-gray-300">
                        {item.azienda}
                        </small>
                    </div>
                    <div>
                        <i className="bx bx-calendar text-sm" ></i>
                        <small className="text-sm text-white">
                            {item.data}
                        </small>
                    </div>
                    <div>
                        <i className="bx bx-calendar text-sm" ></i>
                        <small className="text-base text-gray-300">
                            {item.descrizione}
                        </small>
                    </div>
                    </div>
                </li>
            ))}

        </ul>
      </div>
      <div className="w-full border-b-2 border-secondary"></div>
      <div className="mx-4  mt-5 mb-5">
        <h1 className="mb-4 text-4xl text-white font-bold">Certificazioni </h1>
        <ul>
        {certificazioni.map((item) => (
                <li key={item.name} id={item.name}>
                    <h2 className="text-2xl font-medium text-gray-300">
                    {item.name}
                    </h2>
                    <div className="mt-1">
                    <div>
                        <i className="bx bx-buildings" ></i>
                        <small className="text-base text-gray-300">
                        {item.azienda}
                        </small>
                    </div>
                    <div>
                        <i className="bx bx-calendar text-sm" ></i>
                        <small className="text-sm text-white">
                            {item.data}
                        </small>
                    </div>
                    <div>
                        <i className="bx bx-calendar text-sm" ></i>
                        <small className="text-base text-gray-300">
                            {item.descrizione}
                        </small>
                    </div>
                    </div>
                </li>
            ))}

        </ul>
      </div>
      <div className="w-full border-b-2 border-secondary"></div>
      <div className="mx-4 mt-5 mb-5">
        <h1 className="mb-4 text-4xl text-white font-bold">Skill</h1>
        <ul>
          <li className="mb-6 flex flex-wrap">

            {skills.map((item) => (
            <span className="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-secondary border-primary text-white">
                {item}
            </span>
            ))}

          </li>
        </ul>
      </div>
    </div>
  </div>
  </div>
  </>
    );
}