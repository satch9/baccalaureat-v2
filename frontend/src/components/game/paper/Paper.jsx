import { useParams } from 'react-router-dom'
import { Card, Table } from "antd"

import PropTypes from 'prop-types'

const Paper = ({ selectedLetter }) => {
    const { categorie } = useParams()

    const categories = categorie.split(',')

    const columns = []

    columns.push({
        title: 'Lettre choisie',
        dataIndex: 'letter',
        key: 'letter',
    })

    categories.map((cat) => {
        columns.push({
            title: cat,
            dataIndex: cat,
            key: cat
        })
    })

    columns.push({
        title: 'Score',
        dataIndex: 'score',
        key: 'score'
    })

    const data = []
    data.push({
        key: '1',
        letter: selectedLetter,
        cat: "",
    })

    return (
        <Card >
            <Table columns={columns} dataSource={data} />
        </Card>
    );
}

Paper.propTypes = {
    selectedLetter: PropTypes.string, // Valider la prop selectedLetter comme une chaîne
}

export default Paper;