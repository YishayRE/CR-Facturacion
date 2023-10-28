import { google } from "googleapis";

import * as keys from "../../assets/keys.json" assert {type: 'json'};

const forms = async() => {
    try {
        const client = new google.auth.JWT(
          keys.default.client_email,
          null,
          keys.default.private_key,
          ['https://www.googleapis.com/auth/spreadsheets']
        );
      
        await client.authorize();
      
        const sheets = google.sheets({ version: 'v4', auth: client });
      
        const spreadsheetId = '1OOrM7GxESoSX9fOH-EBNhDDsKouCNC3NAqrcTXu1tqQ'; 
        const sheetName = 'Respuestas de formulario 1';
      
        const response = await sheets.spreadsheets.values.get({
          spreadsheetId,
          range: `${sheetName}!A1:G100`, //Ajustar rango de celdas segun lo requerido
        });
      
        return response.data.values;
    } catch (e) {
        console.log(error);

        return JSON.parse(error.message);
    }
}

export { forms };