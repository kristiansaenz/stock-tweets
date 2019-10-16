import React from 'react';
import SearchBar from '../components/SearchBar'
import TweetBoard from '../components/TweetBoard';
import TagList from '../components/TagList';
import axios from 'axios';
import uuid from 'uuid';
import Footer from '../components/Footer';


class Home extends React.Component {
    state = {
        stock: 'MSFT',
        tags: [
            {id: 1, name: "MSFT", clicked: false},
            {id: 1, name: "BABA", clicked: false},
            {id: 1, name: "APPL", clicked: false}
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
            <Footer />
            </div>
)}

    addTag(stock) {
        const newTag = {
            id: uuid.v4(),
            name: stock,
            clicked: false
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
    // when you delete tag, tweets based on that stock will disappear
    deleteTag = (id, name) => {
        this.setState({ tags: [...this.state.tags.filter(tag => tag.id !== id)] });
    }

    // when you click a tag, it will change dark grey & filter tweets 
    // based on stock names clicked, clicked will be turned to true
    filterTag = (id) => {
        // alert('i clicked it')
    }

    fetchStockTweets(url) {
        const Httpreq = new XMLHttpRequest()
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