import { useState } from 'react';

export const Accordion = () => {
  const [isAbout, setAbout] = useState(false);
  const [isRules, setRules] = useState(false);
  const [isMore, setMore] = useState(false);

  const handleAccordion = (event: any) => {
    switch (event.target.name) {
      case 'about':
        setAbout((n) => !n);
        setMore(false);
        setRules(false);
        break;
      case 'rules':
        setRules((n) => !n);
        setAbout(false);
        setMore(false);
        break;
      case 'more':
        setMore((n) => !n);
        setRules(false);
        setAbout(false);
        break;
      default:
        console.log('nop');
    }
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      <h2 id="accordion-collapse-heading-1">
        {/* TITLE */}
        <button
          type="button"
          onClick={handleAccordion}
          className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-1 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          name="about"
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded="true"
          aria-controls="accordion-collapse-body-1"
        >
          <span>A propos</span>
          <svg
            data-accordion-icon
            className={`w-6 h-6 shrink-0 ${
              isAbout ? 'rotate-180' : 'rotate-0'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        className={isAbout ? '' : 'hidden'}
        aria-labelledby="accordion-collapse-heading-1"
      >
        {/* See */}
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <p className="text-gray-500 text-justify dark:text-gray-400">
            Le Jeu de la Vie est un automate cellulaire où des cellules sont
            disposées sur une grille et évoluent en fonction de règles simples.
            Créé par John Conway, ce jeu illustre l'émergence de comportements
            complexes à partir de règles simples. Il est utilisé pour modéliser
            des systèmes complexes et pour la recherche en intelligence
            artificielle, bien qu'il n'ait pas d'utilité pratique directe.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Plus d'info{' '}
            <a href="#!" className="">
              ici
            </a>{' '}
          </p>
        </div>
      </div>
      <h2 id="accordion-collapse-heading-2">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border  border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          data-accordion-target="#accordion-collapse-body-2"
          onClick={handleAccordion}
          name="rules"
          aria-expanded="false"
          aria-controls="accordion-collapse-body-2"
        >
          <span>Les règles</span>
          <svg
            data-accordion-icon
            className={`w-6 h-6 shrink-0 ${
              isRules ? 'rotate-180' : 'rotate-0'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-2"
        className={isRules ? '' : 'hidden'}
        aria-labelledby="accordion-collapse-heading-2"
      >
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Coucou voiçi les règles :
          </p>
          <p className="mb-2 text-center italic text-gray-500 dark:text-gray-400">
            à chaque tours
          </p>
          <ul className="pl-8 list-disc text-gray-500 dark:text-gray-400">
            <li>
              Si une cellule morte à 3 voisins vivant elle prend vie au tour
              suivant.
            </li>
            <li>
              Si une cellule vivante à 2 ou 3 voisins vivant elle reste en vie
              pour le tour suivant
            </li>
            <li>
              Si elle n'est pas concerné par les deux règles précédente elle
              reste ou meurt au tour suivant
            </li>
          </ul>
        </div>
      </div>
      <h2 id="accordion-collapse-heading-2">
        <button
          type="button"
          onClick={handleAccordion}
          name="more"
          className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border ${
            isMore ? '' : 'rounded-b-xl'
          } border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800`}
          data-accordion-target="#accordion-collapse-body-2"
          aria-expanded="false"
          aria-controls="accordion-collapse-body-2"
        >
          <span>Plus d'infos ?</span>
          <svg
            data-accordion-icon
            className={`w-6 h-6 shrink-0 ${isMore ? 'rotate-180' : 'rotate-0'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-2"
        className={isMore ? '' : 'hidden'}
        aria-labelledby="accordion-collapse-heading-2"
      >
        <div className="p-5 border rounded-b-xl border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Vous souhaitez en savoir plus ? <br />
            Alors voiçi <strong>la vidéo</strong> qui ma donnée goût à
            développement de ce projet.
          </p>
          {/* VIDEO */}
          {(
            <iframe 
            className="w-full h-30 md:w-[70%] md:h-60 mx-auto mt-8" 
            src="https://www.youtube.com/embed/S-W0NX97DB0" 
            title="Le Jeu de la Vie" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
          
            >
            </iframe>


          ) ?? <p>'Your browser does not support the video tag.'</p>}
        </div>
      </div>
    </div>
  );
};
