import React from 'react';
import SearchBar from '../components/SearchBar'
import TweetBoard from '../components/TweetBoard';
import TagList from '../components/TagList';
import axios from 'axios';
import uuid from 'uuid';


class Home extends React.Component {
    state = {
        stock: 'MSFT',
        tags: [
            {id: 1, name: "APPL"}
        ],
        tweets: []
    }

    render() {   
        return(
            <div>
            <section class="hero is-info">
            <div class="hero-body">
                <div class="container">
                    {/* header */}
                    <h1 class="title">Stock Tweets</h1>
                    <h2 class="subtitle">See the latest tweets on your favorite stocks!</h2>
                    <br/>

                    <nav class="level">

                        {/* search field */}
                        <div class="level-left">
                            <div class="level-item">
                                <SearchBar onSubmit={this.onSubmit} onChange={this.onChange} />
                            </div>
                        </div>
                        
                        {/* taglist */}
                        <div class="level-right">
                            <div class="level-item">
                                <div class="tags">
                                <TagList tags={this.state.tags} deleteTag={this.deleteTag} filterTag={this.filterTag} />
                                </div>
                            </div>
                        </div>

                    </nav>
                </div>
            </div>
            </section>

            {/* tweets section */}
            <div class="section">
                <div class="container">
                <div class="tile is-ancestor">
                    <div class="tile is-vertical">
                        <div class="tile">
                            <TweetBoard tweets={this.state.tweets} />
                        </div>
                    </div>
                </div>                
                </div>
            </div>
            </div>
)}

    addTag(stock) {
        const newTag = {
            id: uuid.v4(),
            name: stock
        }
        this.setState({ tags: [...this.state.tags.concat(newTag)]});
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.addTag(this.state.stock);
        this.setState({ stock: '' });
    }

    onChange = (e) => this.setState({
        stock: e.target.value
    })

    // show all the tags that don't equal the one you deleted
    deleteTag = (id, name) => {
        this.setState({ tags: [...this.state.tags.filter(tag => tag.id !== id)] });
        // alert('i removed ' + this.name + 'from board');
    }

    filterTag = (id) => {
        // alert('i clicked it')
    }

    fetchStockTweets(url) {
        const Httpreq = new XMLHttpRequest()
        //might need set this to true
        Httpreq.open('GET', url, false);
        Httpreq.send(null);
        var data = JSON.parse(Httpreq.responseText);
        var messages = data.messages;
        console.log(data)

        this.setState({ tweets: messages })
    }

    componentDidMount() {
        console.log(this.state.tags[0].name)

        let url = "http://localhost:8080/" + "?id=" + this.state.stock;
        this.fetchStockTweets(url);
    }

}
export default Home;