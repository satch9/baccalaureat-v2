import { Card, Typography, Button } from "antd"
import ListCategories from "../../components/game/ListCategories"
import ListChronometre from "../../components/game/ListChronometre"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const { Paragraph } = Typography

const Parameters = () => {
  const [selectedTagsCategorie, setSelectedTagsCategorie] = useState(['Prénom féminin'])
  const [selectedTagsChrono, setSelectedTagsChrono] = useState(['60'])
  const navigate = useNavigate()
  const onValidateParameters = () => {
    console.log('selectedTagsCategorie onValidateParameters', selectedTagsCategorie)
    console.log('selectedTagsChrono onValidateParameters', selectedTagsChrono)
    navigate(`/list-game/${selectedTagsCategorie}/${selectedTagsChrono}`)
  }

  return (
    <Card>
      <Typography style={{ marginLeft: "15%", marginRight: "10%" }}>
        <h1>Paramètres</h1>
        <Paragraph style={{ textAlign: "left", textDecoration: "underline" }}>Sélectionnez la liste des catégories:</Paragraph>
        <ListCategories selectedTagsCategorie={selectedTagsCategorie} setSelectedTagsCategorie={setSelectedTagsCategorie} /><br />
        <Paragraph style={{ textAlign: "left", textDecoration: "underline" }}>Sélectionnez la durée du chronomètre (en secondes):</Paragraph>
        <ListChronometre selectedTagsChrono={selectedTagsChrono} setSelectedTagsChrono={setSelectedTagsChrono}/><br />
        <Button danger onClick={() => onValidateParameters()}>Valider</Button>
      </Typography>

    </Card>
  )
}

export default Parameters
