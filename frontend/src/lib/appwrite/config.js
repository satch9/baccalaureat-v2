import { Client, Account, Databases } from 'appwrite'

export const appwriteConfig = {
    url: import.meta.env.VITE_APP_APPWRITE_API_ENDPOINT,
    projectId: import.meta.env.VITE_APP_APPWRITE_PROJECT_ID,
    databaseId: import.meta.env.VITE_APP_APPWRITE_DATABASE_ID,
    gamesCollectionId: import.meta.env.VITE_APP_APPWRITE_PARTIES_COLLECTION_ID,
    playersCollectionId: import.meta.env.VITE_APP_APPWRITE_JOUEURS_COLLECTION_ID,
    privateKey:import.meta.env.VITE_APP_APPWRITE_PRIVATE_KEY
}

export const client = new Client()

client.setProject(appwriteConfig.projectId)
client.setEndpoint(appwriteConfig.url)



export const account = new Account(client)
export const databases = new Databases(client)