import { Card, Typography } from "antd"

const { Paragraph } = Typography

const Home = () => {
  return (

    <Card>
      <Typography style={{ marginLeft: "15%", marginRight: "15%" }}>
        <h1>Règles du jeu </h1>

        <Paragraph style={{ textAlign: "justify" }}>
          {`Tous les joueurs se mettent d'accord sur les catégories choisies (prénom, ville, sport, artiste
            célèbre, animal, couleur, légume, fruit...).`}<br /><br />
          {`Chacun aura l'équivalent d'une page comprenant autant de colonnes que de catégories choisies lors de la création de la partie, une colonne supplémentaire permettra de comptabiliser les points obtenus à chaque partie.`}<br />
          {`Le jeu se joue en 3 parties.`}<br /><br />

          {`Partie 1 :`}<br />
          {`  Une lettre est choisie au hasard.`}<br />
          {`Au top départ, donné par l’un des joueurs (celui qui a créé la partie), le chronomètre est déclenché.
            Chaque joueur doit alors inscrire un maximum de mots commençant par la lettre choisie et ce,
            dans chaque catégorie (par exemple avec la lettre M, Montpellier pour la ville, marron pour la
            couleur…).`}<br /><br />

          {`Partie 2 :`}<br />
          {`Le jeu s’arrête quand le temps s’est écoulé ou quand l’un des joueurs a écrit un mot pour
            chaque catégorie.`}<br /><br />

          {`Partie 3 :`}<br />
          {`Ensuite on voit apparaître le mot trouvé pour chaque catégorie pour chaque joueur.`}<br /><br />

          {`Les points sont comptabilisés
            ainsi :`}<br />
          {`10 points pour un mot que personne d'autre n'a trouvé.`}<br />
          {`5 points pour un mot trouvé par plusieurs joueurs.`}<br />
          {`0 point si le mot n'existe pas, ou est mal orthographié ou si le joueur n'en a pas trouvé.`}<br /> <br />
          {`On procède de la même manière avec une nouvelle lettre.
            Le joueur qui a le plus de points gagne la partie.`}
        </Paragraph>
      </Typography>

    </Card>

  )
}

export default Home
