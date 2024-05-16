import textgears from 'textgears-api'

export const checkWord = (word)=>{
    const textgearsApi = textgears(import.meta.env.VITE_TEXT_GEARS_APIKEY, {language : 'fr-FR'})

    textgearsApi.checkGrammar(word)
        .then ((data)=>{
            console.log(data)
            for(const error of data.errors){
                console.log('Error: %s. Suggestions: %s', error.bad, error.better.join(', '))
            }
        })
        .catch((err)=>{console.log(err)})
}