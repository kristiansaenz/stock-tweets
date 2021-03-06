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
            {id: 2, name: "BABA", clicked: false}
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
                                <TagList tags={this.state.tags} deleteTag={this.deleteTag} clickTag={this.clickTag} />
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
        this.getTweets();
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.addTag(this.state.stock);
        this.clearInput();
    }

    clearInput() {
        this.setState({ stock: '' });
    }

    onChange = (e) => this.setState({
        stock: e.target.value
    })

    // always renders last stock in taglist
    getTweets(){
        var lastAdded = this.state.stock;
        if(this.state.tags && this.state.tags.length > 0) {
            lastAdded = this.state.tags[this.state.tags.length - 1].name;
        }
        this.fetchTweets(lastAdded);
    }

    // always renders stock that is clicked
    getTweetOnClick(id){
        var clicked = this.state.tags.find(x => x.id === id).name;
        this.fetchTweets(clicked);
    }

    // call GET tweets
    async fetchTweets(params) {
        await axios.get('/tweets', { params: {id: params} })
        .then(response => {
            var tweets = response.data.messages;
            this.setState({ tweets: tweets });
        })
        .catch(error => {
            console.log(error);
        });
    }

    // show all the tags that don't equal the one you deleted
    // when you delete tag, tweets based on that stock will disappear
    deleteTag = (id) => {
        this.setState({ tags: [...this.state.tags.filter(tag => tag.id !== id)] });
        this.getTweets();
    }

    // when you click a tag, it will change dark grey & filter tweets 
    // based on stock names clicked, clicked will be turned to true
    clickTag = (id) => {
        tags: this.state.tags.map(tag => {
            if(tag.id === id) {
              tag.clicked = !tag.clicked;
            }
            return tag;
        })
        this.getTweetOnClick(id);
    }

    componentDidMount() {
        this.getTweets();
    }

}
export default Home;