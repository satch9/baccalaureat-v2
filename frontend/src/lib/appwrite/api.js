import { ID, Query, Permission, Role } from 'appwrite'
import { account, appwriteConfig, databases } from './config'

export async function createPlayerAccount(player) {
  try {
    const newAccountId = ID.unique()

    const newAccount = await account.create(
      newAccountId,
      player.email,
      player.password,
      player.username,
    )

    console.log('newAccount API', newAccount)

    if (!newAccount) throw Error

    const newPlayer = await savePlayerDB({
      playerId: newAccount.$id,
      username: player.username,
      email: player.email,
    })

    console.log('newWorker API', newPlayer)

    return newPlayer
  } catch (error) {
    console.error(error)
  }
}

export async function savePlayerDB(player) {
  try {
    const documentId = ID.unique()

    console.log('appwriteConfig.databaseId API', appwriteConfig.databaseId)
    console.log(
      'appwriteConfig.workersCollectionId API',
      appwriteConfig.playersCollectionId,
    )
    console.log('documentId API', documentId)

    const newPlayer = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.playersCollectionId,
      documentId,
      player,
      [Permission.write(Role.any())],
    )

    return newPlayer
  } catch (error) {
    console.error(error)
  }
}

export async function signInAccount({ email, password }) {
  try {
    console.log('user.email', email)
    console.log('user.password', password)

    const session = await account.createEmailSession(email, password)

    return session
  } catch (error) {
    console.error(error)
  }
}

export async function signOut() {
  try {
    const session = await account.deleteSession('current')

    return session
  } catch (error) {
    console.error(error)
  }
}

export async function getAccount() {
  try {
    const currentAccount = await account.get()

    return currentAccount
  } catch (error) {
    console.error(error)
  }
}

export async function getCurrentPlayer() {
  try {
    const currentAccount = await getAccount()

    console.log('currentAccount', currentAccount)

    if (!currentAccount) {
      throw Error
    }

    const currentPlayer = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.playersCollectionId,
      [Query.equal('workerId', currentAccount?.$id)],
    )

    if (!currentPlayer) throw Error

    //console.log("api currentWorker.documents[0]",currentWorker.documents)

    return currentPlayer.documents[0]
  } catch (error) {
    console.error(error)
  }
}
