import { Card, Space, Table } from "antd"
import { Link, useParams } from "react-router-dom"
import { usePlayerContext } from '../../hooks/usePlayer'

const ListGame = () => {
  const { categorie, chrono } = useParams()
  const { isAuthenticated, player } = usePlayerContext()

  console.log("categorie", categorie.split(','))
  console.log("chrono", chrono)
  console.log("isAuthenticated List Game", isAuthenticated)
  console.log("player List Game", player)

  const game="game1"

  //const categories = categorie.split(',')
  const columns = [
    {
      title: "Nom",
      dataIndex: "nom",
      key: "nom",
    },
    {
      title: "Créateur",
      dataIndex: "createur",
      key: "createur",
    },
    {
      title: "Catégories",
      dataIndex: "categories",
      key: "categories",
      width: 30,
    },
    {
      title: 'Action',
      key: 'action',
      // eslint-disable-next-line no-unused-vars
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/game/${game}/${categorie}/${chrono}`}>Rejoindre</Link>
        </Space>
      ),
    }
  ]

  const data = []
  data.push({
    key: '1',
    nom: game,
    createur : player.username,
    categories: categorie
  })

  return (
    <Card >
      <Table columns={columns} dataSource={data} />
    </Card>
  )
}

export default ListGame
