const { google } = require('googleapis');
const keys = require('./keys.json');  // tus credenciales descargadas

// Correo: cruzrojaformulario@gmail.com
// Password: pa5oo5YH74TEoP

// Edición Formulario: https://docs.google.com/forms/d/1l-WMZq7XUBr8KpuiluQWVGYr5F-0-I6E-YuenzWX4hI/edit
// Hoja de Cálculo: https://docs.google.com/spreadsheets/d/1OOrM7GxESoSX9fOH-EBNhDDsKouCNC3NAqrcTXu1tqQ/edit?resourcekey#gid=318691191

async function accessSpreadsheet() {
  const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
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
}

accessSpreadsheet();