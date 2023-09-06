export const getEmailTemplate = (
    date: string,
    title: string,
    content: string,
    nome: string, 
    email: string, 
    telefono: string,
    messaggio: string, 
    
): string => {
    return `
        <!DOCTYPE html>
        <html lang="it">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                    font-family: monospace;
                    margin: 0;
                    padding: 1rem;
                    background-color: #0f172a;
                    color: #fff;
                }
                main{
                    height: 100vh; 
                    margin: 0 auto;
                    width: 100%;
                    max-width: 600px;
                    padding: 2rem 0;
                    background-color: #0f172a;
                }
                .date{
                    text-align: right;
                    font-family: monospace;
                }
                .email-wrapper {
                    width: 100%;
                    min-height: 50%;
                    background-color: #0f172a;
                    padding: 40px;
                    box-sizing: border-box;
                    border-top: 3px solid #38bdf8;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.2);
                }

                .emoji{
                    font-size: 2.5rem;
                    margin: 0 auto 2rem;
                    width: min-content;
                }
                h1 {
                    font-family: monospace;
                    font-size: 24px;
                    font-weight: 500;
                    margin: 0 0 20px;
                    color: #38bdf8;
                    text-align: center;
                    padding-bottom: 5px;
                    
                }
                p {
                    font-family: monospace;
                    font-size: 16px;
                    line-height: 1.5;
                    margin: 0 0 10px;
                    color: #fff;
                }
                .date {
                    font-size: 12px;
                    font-weight: bold;
                    color: #38bdf8;
                    margin-bottom: 20px;
                }
                .content {
                    font-family: monospace;
                    margin: 20px 0;
                    background-color: #0f172a;
                    color: #fff;
                }
                .footer{
                    font-family: monospace;
                    font-size: 12px;
                    text-align: center;
                    margin: 1rem auto 0;
                    max-width: 450px;
                    color: #fff;
                    background-color: #0f172a;
                }
                a {
                    color: #38bdf8 !important;
                }

            </style>
        </head>
        <body>
            <main>
                <p class="date">Data: ${date}</p>
                <div class="email-wrapper">
                    <div class="emoji">👋</div>
                    <h1>${nome}</h1>
                    
                    <div class="content">
                    ${title}<br/><br/>
                       ${content}
                    <br/><br/>
                    <strong>Il contenuto del messaggio inviato è il seguente:</strong> 
                    <br/><br/>
                       ${messaggio}
                    <br/><br/>
                    <strong>Telefono:</strong> ${telefono}<br/>
                    <strong>Email:</strong> <a>${email}</a><br/>
            
                    </div>
                </div>
                <div class="footer">
                    Questa email è stata inviata automaticamente a ${nome} email <a>${email}</a> in risposta alla richiesta inviata tramite il digital garden di MF.  
                </div>
            </main>
            
        </body>
        </html>
    `;
}