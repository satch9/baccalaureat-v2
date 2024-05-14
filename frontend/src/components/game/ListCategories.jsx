import { Flex, Tag } from 'antd'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
const ListCategories = ({ selectedTagsCategorie, setSelectedTagsCategorie }) => {
    //const [selectedTagsCategorie, setSelectedTagsCategorie] = useState(['Prénom féminin'])

    const tagsData = ['Prénom féminin', 'Prénom masculin', 'Pays', 'Ville', 'Métier', 'Fruit', 'légume', 'Animal', 'Fleur', 'Objet du quotidien', 'Acteur', 'Actrice', 'Sport', 'Vêtement', 'Instrument de musique', 'Groupe de rock']

    const handleChange = (tag, checked) => {
        const nextSelectedTags = checked
            ? [...selectedTagsCategorie, tag]
            // eslint-disable-next-line react/prop-types
            : selectedTagsCategorie.filter((t) => t !== tag);
        console.log('You are interested in: ', nextSelectedTags);
        setSelectedTagsCategorie(nextSelectedTags);
    }

    return (

        <Flex gap={4} wrap align="center">

            {tagsData.map((tag) => (
                <Tag.CheckableTag
                    key={tag}
                    // eslint-disable-next-line react/prop-types
                    checked={selectedTagsCategorie.includes(tag)}
                    onChange={(checked) => handleChange(tag, checked)}
                >
                    {tag}
                </Tag.CheckableTag>
            ))}
        </Flex>
    )
}

ListCategories.PropTypes = {
    selectedTagsCategorie: PropTypes.arrayOf(PropTypes.string),
    setSelectedTagsCategorie: PropTypes.func.isRequired
}

export default ListCategories
