import { useState, useEffect } from 'react'
import { Table, Popconfirm } from 'antd'
import { useParams } from 'react-router-dom'
//import {checkWord} from '../../../utils/textgears.js'

import './paper.css'

import EditableRow from '../editable/EditableRow'
import EditableCell from '../editable/EditableCell'
import { useGameContext } from '../../../hooks/useGame'

const Paper = () => {
    const { categorie, chrono } = useParams()
    const categories = categorie.split(',')
    const {
        selectedLetters,
        countDown,
        setCountDown,
        setIsCountdownRunning
    } = useGameContext()

    const [dataSource, setDataSource] = useState([]);
    const [defaultColumns, setDefaultColumns] = useState([]);
    const [showContinue, setShowContinue] = useState(false)

    const handleConfirm = () => {
        setCountDown(chrono)
        setIsCountdownRunning(true)
    }

    useEffect(() => {
        console.log("countDown", countDown)
        if (countDown === 0) {
            setShowContinue(true);
        } else {
            setShowContinue(false);
        }
        console.log("showContinue", showContinue)
    }, [countDown,showContinue]);

    useEffect(() => {



        const columns = []
        console.log("countdown", typeof countdown)

        columns.push({
            title: 'Lettre',
            dataIndex: 'letter',
            key: 'letter',
            render: (letter) => (<p style={{ textAlign: "center", fontWeight: "bolder", fontSize: "18px" }}>{letter}</p>),

        })

        categories.forEach((cat) => {
            columns.push({
                title: cat,
                dataIndex: cat,
                key: cat,
                editable: true,
                render: (letter) => (<p style={{ textAlign: "center", fontWeight: "bolder", }}>{letter}</p>),

            })
        })

        columns.push({
            title: 'Score',
            dataIndex: 'score',
            key: 'score',
        })

        columns.push({
            title: 'Action',
            dataIndex: 'action',
            render: () =>
                showContinue ? (
                    <Popconfirm title="On continue?" onConfirm={() => handleConfirm()}>
                        <a>Continuez</a>
                    </Popconfirm>
                ) : null,
        })

        setDefaultColumns(columns)
        const newData = []
        selectedLetters.forEach((letter) => {
            newData.push({
                key: letter,
                letter: letter,
            });
        })
        setDataSource(newData)
        console.log("dataSource", dataSource)


    }, [selectedLetters])

    const handleSave = (row) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => row.key === item.key);

        if (index !== -1) {
            newData[index] = { ...newData[index], ...row };
            setDataSource(newData);
        }
    }

    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };

    const columns = defaultColumns.map((col) => {
        if (!col.editable) {
            return col
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave,
            }),
        }
    })

    return (
        <div>
            <Table
                components={components}
                rowClassName={() => 'editable-row'}
                bordered
                dataSource={dataSource}
                columns={columns}
                pagination={false}
            />
        </div>
    )
};

export default Paper;