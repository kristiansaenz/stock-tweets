import React from 'react';


class SearchBar extends React.Component {

    render(){
        return(
                <form onSubmit={this.props.onSubmit.bind(this)}>
                    <div class="field is-grouped">
                        <p class="control is-expanded">
                            <input 
                            class="input"
                            type="text" 
                            value={this.props.stock}
                            onChange={this.props.onChange.bind(this)}
                            placeholder="$StockTeets"
                            />
                        </p>
                        <p class="control">
                            <a 
                            class="button is-light"
                            type="submit"
                            value="Submit"
                            >Search</a>
                        </p>
                    </div>
                </form>
        )
    }
}

export default SearchBar;