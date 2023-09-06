"use client"
import { ChangeEvent, FormEvent, useState } from "react";
import { Textarea } from "@material-tailwind/react";
import { motion, useTransform, useMotionValue, useAnimation } from "framer-motion";

const variants = {
  checked: { 
    pathLength: 1, 
    transition: { duration: .3 } 
  },
  unchecked: { 
    pathLength: 0, 
    transition: { duration: .3 } 
  }
};
export default function FormContatti (){
    
    // Add formValues state
    const [formEmail, setFormEmail] = useState<string>('')
    const [formNome, setFormNome] = useState<string>('')
    const [formTelefono, setFormTelefono] = useState<string>('')
    const [formMessaggio, setFormMessaggio] = useState<string>('')
    const [isChecked, setIsChecked] = useState(false);
    const pathLength = useMotionValue(0);
    const opacity = useTransform(pathLength, [.05, .15], [0, 1]);
    const lineControls = useAnimation();
    const lineAnimation = async () => {
      await lineControls.start({ 
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        transition: { duration: .15, delay: .2 }
      });
      await lineControls.start({ 
        clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
        transition: { duration: .15 }
      });
      lineControls.start({ 
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)', 
        transition: { duration: 0 } 
      });
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      let { value } = event.target;
      setFormEmail(value);
    };
    const handleChangeNome = (event: ChangeEvent<HTMLInputElement>) => {
      let { value } = event.target;
      setFormNome(value);
    };
    const handleChangeTelefono = (event: ChangeEvent<HTMLInputElement>) => {
      let { value } = event.target;
      setFormTelefono(value);
    };
    const handleChangeMessaggio = (event: any) => {
      let { value } = event.target;
      setFormMessaggio(value);
    };
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    try {
        const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({ nome: formNome, email: formEmail, telefono:formTelefono, messaggio: formMessaggio }),
        
        });
        

        if (response.ok) {
        console.log("email:" + formEmail);
        alert('Email sent successfully.');
        
        setFormEmail('');
        } else {
        throw new Error('Error 2 processing contact form.');
        }
    } catch (error) {
        console.error(error);
        alert('Error processing contact form.');
    }
    };

    const validate = () => {
      if (isChecked==true) {
          return(
            true
          )
      }
    };

    
    return (
      <div className="card p-2 pb-5 lg:p-10">
        <h3 className=" font-mono dark:text-white text-xl font-bold">
          Benvenuto <i>{formNome}</i>, 
          </h3>  
          <p className="font-mono mb-5"> Se lo desideri puoi inviarmi una richiesta direttamente tramite il form di contatto qui in basso 👇 
            <br/> Risponderò non appena possibile, grazie. 
          </p>
      <form onSubmit={handleSubmit} className="font-mono lg:p-10 max-h-fit" >
      
      <div className="relative">
      <label htmlFor="nome" className="label">
        <span className="label-text font-bold italic">Nome e Cognome</span>
      </label> 
        <input type="text" name="nome" id="nome"  
        className="dark:bg-slate-900 input border-secondary border-2 w-full pr-16 mb-5" required 
        value={formNome}
        onChange={handleChangeNome}
        /> 

        <label className="label" htmlFor="email">
        <span className="label-text font-bold italic">Indirizzo email</span>
      </label> 
        <input 
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
        className="dark:bg-slate-900 input border-secondary border-2 w-full pr-16 mb-5" 
        value={formEmail}
        onChange={handleChange} /> 
  
        <label className="label" htmlFor="telefono">
        <span className="label-text font-bold italic">Numero di telefono</span>
      </label> 
        <input type="text" id="telefono" name="telefono" required
         className="dark:bg-slate-900 input border-secondary border-2 w-full pr-16 mb-5" 
         value={formTelefono}
        onChange={handleChangeTelefono}/> 
      <label className="label " htmlFor="messaggio">
        <span className="label-text font-bold italic">Messaggio</span>
      </label> 
        <Textarea id="messaggio" name="messaggio" 
          rows={4} 
          required
          placeholder="Inserisci un breve messaggio per essere ricontattato" 
          className="input dark:bg-slate-900 border-secondary border-2 w-full pr-16 mb-5 font-mono" 
          value={formMessaggio}
          onChange={handleChangeMessaggio}
        />

      {/**checkbox dinamico */}
      <div className="relative mt-4 mb-4 flex gap-4 items-center align-middle" >
        <div className="h-6 w-6 mr-4 ">
        {/** checkbox element */}


                <motion.div 
            className="checkbox border-none mb-15"
            onClick={() => {
              !isChecked && lineAnimation();
              setIsChecked(!isChecked);
            }}
          >
            <motion.div 
              className="checkbox-container checkbox-container--back"
              animate={{ 
                background: isChecked ? 'rgb(56 189 248)' : '#cbd5e1',
                
                transition: { delay: isChecked ? 0 : .3 }
              }}
            >
                <motion.svg 
                  className="checkmark checkmark--back"
                  viewBox="0 0 215 180" 
                  animate={isChecked ? "checked" : "unchecked"}
                >
                  <motion.path 
                    d="M21 88.9819L40.3022 133.001C46.7847 147.784 67.1425 149.146 75.5651 135.376C107.35 83.4098 123.233 60.8675 200 27" 
                    variants={variants}
                    style={{ pathLength, opacity }}
                    strokeDasharray="1 1"
                  />
                </motion.svg>
                <div className="lines-container">
                  <motion.div 
                    className="line line--1" 
                    animate={lineControls} 
                  />
                  <motion.div 
                    className="line line--2" 
                    animate={lineControls} 
                  />
                  <motion.div 
                    className="line line--3" 
                    animate={lineControls} 
                  />
                </div>
            </motion.div>
            <div className="checkbox-container checkbox-container--front">
              <motion.svg 
                className="checkmark checkmark--front"
                viewBox="0 0 215 180" 
                animate={isChecked ? "checked" : "unchecked"}
              >
                <motion.path 
                  d="M21 88.9819L40.3022 133.001C46.7847 147.784 67.1425 149.146 75.5651 135.376C107.35 83.4098 123.233 60.8675 200 27" 
                  variants={variants}
                  style={{ pathLength, opacity }}
                  strokeDasharray="1 1"
                />
              </motion.svg>
            </div>
          </motion.div>



        </div>
        <div >
          <p className=" text-[14px] mb-10">Confermo di aver letto e accettato le condizioni d&apos;uso contenute nella 
            <a href="https://www.iubenda.com/privacy-policy/25117591" 
            className=" text-[14px] hover:decoration-primary hover:underline hover:decoration-2"
            target="_blank">
              &nbsp;Privacy Policy&nbsp;
            </a> 
            
          </p>
        </div>
      </div>

      <button  type="submit" 
      className="btn rounded-full bg-secondary disabled:bg-white 
      disabled:dark:bg-slate-900 disabled:dark:text-slate-700 disabled:text-slate-300 
      hover:cursor-pointer hover:bg-sky-100 hover:text-slate-900 
      text-white text-[16px] w-full px-5 py-2 mt-10 font-medium"
      disabled={!validate()}>
        Invia email
      </button>
      
      </div>
      </form>
      </div>

    )
}