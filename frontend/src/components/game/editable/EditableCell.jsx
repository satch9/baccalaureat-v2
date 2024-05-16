import { useContext, useEffect, useRef, useState } from 'react'
import { Form, Input } from 'antd'

import PropTypes from 'prop-types'
import { EditableContext } from '../../../context/EditableContext';

const EditableCell = ({
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
    const form = useContext(EditableContext);

    useEffect(() => {
        if (editing) {
            inputRef.current?.focus();
        }
    }, [editing])

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    }

    const save = async () => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({
                ...record,
                ...values,
            });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    }

    let childNode = children;
    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0,
                }}
                name={dataIndex}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{
                    padding: 5,
                }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }
    
    return <td {...restProps}>{childNode}</td>;


};

EditableCell.propTypes = {
    editable: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    dataIndex: PropTypes.string,
    record: PropTypes.object,
    handleSave: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
}

export default EditableCell