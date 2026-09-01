import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({
  version: "v4",
  auth,
});

export async function addContactToGoogleSheet({
  name,
  email,
  phone,
  company,
  message,
}) {
  const values = [[
    name ?? "",
    email ?? "",
    phone ?? "",
    company ?? "",
    message ?? "",
    new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    }),
  ]];

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:F",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values,
      },
    });

    return true;
  } catch (error) {
    console.error(
      "Google Sheets Error:",
      error?.response?.data || error
    );

    throw error;
  }
}
