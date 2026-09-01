import { google } from "googleapis";

const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: privateKey,
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
  // Check environment variables
  if (!process.env.GOOGLE_CLIENT_EMAIL) {
    throw new Error("GOOGLE_CLIENT_EMAIL is missing");
  }

  if (!process.env.GOOGLE_PRIVATE_KEY) {
    throw new Error("GOOGLE_PRIVATE_KEY is missing");
  }

  if (!process.env.GOOGLE_SHEET_ID) {
    throw new Error("GOOGLE_SHEET_ID is missing");
  }

  const values = [
    [
      name ?? "",
      email ?? "",
      phone ?? "",
      company ?? "",
      message ?? "",
      new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
      }),
    ],
  ];

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:F",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values,
      },
    });

    console.log("Google Sheet updated successfully:", response.data);

    return true;
  } catch (error) {
    console.error(
      "Google Sheets Error:",
      error?.response?.data || error?.message || error
    );

    throw error;
  }
}