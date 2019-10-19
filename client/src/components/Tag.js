import React from 'react';
import Proptypes from 'prop-types';

class Tag extends React.Component {

    getStyle = () => {
        return {
            background: this.props.tag.filtered ? '#4a4a4a' : '#f5f5f5',
            color: this.props.tag.filtered ? 'white' : '#4a4a4a'
        }
    }
    
    render() {
        const { id, name, filtered } = this.props.tag;

        return(
            <div class="tag" style={this.getStyle()} onClick={this.props.clickTag.bind(this, id)}>{name}
                <button class="delete is-small" onClick={this.props.deleteTag.bind(this, id)}></button>
            </div>
        )
    }
}

Tag.prototypes = {
    tag: Proptypes.object.isRequired
}

export default Tag;