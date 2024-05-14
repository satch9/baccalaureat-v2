import { Card, Space, Table } from "antd"
import { useParams } from "react-router-dom"

const ListGame = () => {
  const { categorie, chrono } = useParams()

  console.log("categorie", categorie.split(','))
  console.log("chrono", chrono)
  //const categories = categorie.split(',')
  const columns = [
    {
      title: "Parties",
      dataIndex: "parties",
      key: "parties",
    },
    {
      title: 'Action',
      key: 'action',
      // eslint-disable-next-line no-unused-vars
      render: (_, record) => (
        <Space size="middle">
          <a>Rejoindre</a>
        </Space>
      ),
    }
  ]

  const data = []

  return (
    <Card >
      <Table columns={columns} dataSource={data} />
    </Card>
  )
}

export default ListGame
