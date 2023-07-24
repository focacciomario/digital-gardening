---
showToc: false
---

# Benvenuto nel mio garden! 🌱
<div className="relative w-full mb-10 lg:mb-0 md:text-center lg:text-left">
            <p className="mt-4 text-3xl text-primary dark:text-primary-dark tracking-tight">
              In questo <i>"giardino"</i> troverai una raccolta di <a href="/blog"><i>articoli</i></a>, <a href="/learning"><i>appunti</i></a> e <a href="/progetti"><i>progetti</i></a> in ordine sparso. Alcuni fiori saranno appassiti e lasciati lì, altri saranno splendenti e in continuo aggiornamento.<br/>
              <br/><i>Buona esplorazione</i> 😁
            </p>
            </div>

A differenza di un comune blog in cui scrivi un articolo e te ne dimentichi, qui i post sono trattati come *piante* in varie fasi di crescita e nutrimento. Alcune potrebbero appassire e morire, altre fioriranno e forniranno una fonte di conoscenza continua per il giardiniere e le persone della comunità che visiteranno questo *digital garden*.

*Per seguire gli aggiornamenti, iscriviti alla newsletter!*
            <div className="relative w-full mb-10 lg:mb-0 md:text-center lg:text-left">
            <p className="mt-4 text-lg tracking-tight text-slate-400 border border-secondary p-4 rounded-lg">
              In aeroplano, seduto sul cilindro della benzina, scaldato il ventre dalla testa dell’aviatore, io sentii l’inanità ridicola della vecchia sintassi ereditata da Omero. Bisogno furioso di liberare le parole, traendole fuori dalla prigione del periodo latino! Questo ha naturalmente, come ogni imbecille, una testa previdente un ventre, due gambe e due piedi piatti, ma non avrà mai due ali. Appena il necessario per camminare, per correre un momento e fermarsi quasi subito sbuffando![...]<br/>
              <i className="float-right">- Filippo Tommaso Marinetti, 1912</i>
              </p>
          </div>


## Compila il form per rimanere aggiornato


<form
                method="POST"
                name="get-updates"
                data-netlify="true"
                action="/subscribed"
                className="mt-3 sm:flex"
              >
                <label htmlFor="name" className="sr-only">
                  Nome completo
                </label>
                <input
                  name="name"
                  type="text"
                  required={true}
                  placeholder="Nome completo"
                  className="block w-full sm:flex-auto sm:w-32 px-2 py-3 text-base rounded-md bg-slate-200 dark:bg-slate-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                />
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required={true}
                  placeholder="Email"
                  className="block w-full mt-3 sm:flex-auto sm:w-64 sm:mt-0 sm:ml-3 px-2 py-3 text-base rounded-md bg-slate-200 dark:bg-slate-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                />
                <input type="hidden" name="form-name" value="get-updates" />
                <button
                  type="submit"
                  className="flex-none mt-3 px-6 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-sky-300 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500 sm:mt-0 sm:ml-3"
                >
                  Iscrivimi
                </button>
              </form>
              <p className="mt-3 text-sm text-slate-400 dark:text-slate-300 sm:mt-4">
                Non invierò mai spam, promesso! 🙂
              </p>
