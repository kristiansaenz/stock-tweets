import React from 'react';
import Proptypes from 'prop-types';

class Tag extends React.Component {
    render() {
        const { id, name, filtered } = this.props.tag;

        return(
            <div class="tag" onClick={this.props.filterTag.bind(this, id)}>{name}
                <button class="delete is-small" onClick={this.props.deleteTag.bind(this, id)}></button>
            </div>
        )
    }
}

Tag.prototypes = {
    tag: Proptypes.object.isRequired
}

export default Tag;