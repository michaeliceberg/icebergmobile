import {google} from 'googleapis'


 
export const getBetonData = async () => {
    const auth = new google.auth.GoogleAuth({
        credentials:{
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
            // private_key: process.env.GOOGLE_PRIVATE_KEY,
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"]

    })
    const sheets = google.sheets({version:"v4", auth: await auth.getClient()})
    const range = "Status!Y1:AI100"

    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range
        })
        return response.data.values
    } catch(error) {
        console.error("Error fetching sheets data:", error)
        return []
    }
}


export const getDailyIncomeData = async () => {
    const auth = new google.auth.GoogleAuth({
        credentials:{
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
            // private_key: process.env.GOOGLE_PRIVATE_KEY,
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"]

    })
    const sheets = google.sheets({version:"v4", auth: await auth.getClient()})
    const range = "Weights!Y1:AD30"

    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range
        })
        return response.data.values
    } catch(error) {
        console.error("Error fetching sheets data:", error)
        return []
    }
}


export const getWeightsData = async () => {
    const auth = new google.auth.GoogleAuth({
        credentials:{
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
            // private_key: process.env.GOOGLE_PRIVATE_KEY,
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"]

    })
    const sheets = google.sheets({version:"v4", auth: await auth.getClient()})
    const range = "inout!AE1:AK20"

    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range
        })
        return response.data.values
    } catch(error) {
        console.error("Error fetching sheets data:", error)
        return []
    }
}


export const getCarsData = async () => {
    const auth = new google.auth.GoogleAuth({
        credentials:{
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
            // private_key: process.env.GOOGLE_PRIVATE_KEY,
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"]

    })
    const sheets = google.sheets({version:"v4", auth: await auth.getClient()})
    const range = "Over!AR1:AV111"

    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range
        })
        return response.data.values
    } catch(error) {
        console.error("Error fetching sheets data:", error)
        return []
    }
}
