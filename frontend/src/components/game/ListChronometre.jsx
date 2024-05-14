import { Flex, Tag } from 'antd'
import PropTypes from 'prop-types'


// eslint-disable-next-line react/prop-types
const ListChronometre = ({selectedTagsChrono, setSelectedTagsChrono}) => {
    
    const tagsDataChrono = ['60', '90', '120', '150']
    const handleChange = (tag, checked) => {
        const nextSelectedTags = checked
            ? [tag]
            // eslint-disable-next-line react/prop-types
            : selectedTagsChrono.filter((t) => t !== tag);
        console.log('You are interested in: ', nextSelectedTags);
        setSelectedTagsChrono(nextSelectedTags);
    }

    return (

        <Flex gap={4} wrap align="center">

            {tagsDataChrono.map((tag) => (
                <Tag.CheckableTag
                    key={tag}
                    // eslint-disable-next-line react/prop-types
                    checked={selectedTagsChrono.includes(tag)}
                    onChange={(checked) => handleChange(tag, checked)}
                >
                    {tag}
                </Tag.CheckableTag>
            ))}
        </Flex>
    )
}

ListChronometre.PropTypes = {
    selectedTagsCategorie: PropTypes.arrayOf(PropTypes.string),
    setSelectedTagsCategorie: PropTypes.func.isRequired
}

export default ListChronometre