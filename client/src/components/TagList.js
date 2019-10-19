import React from 'react';
import Tag from './Tag';
import Proptypes from 'prop-types';

class TagList extends React.Component {

    render(){
        // return list of tag components
        return this.props.tags.map((tag) => (
            <Tag
                key={tag.id}
                tag={tag} 
                deleteTag={this.props.deleteTag}
                clickTag={this.props.clickTag}
            />
        ))
    }
}

TagList.prototypes = {
    taglist: Proptypes.array.isRequired
}

export default TagList;