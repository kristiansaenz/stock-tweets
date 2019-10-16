import React from 'react';


class Tweet extends React.Component {

    render(){
        const { id, body, created_at, user } = this.props.tweet;
        return(
            <div class="tile is-parent">
            <article class="tile is-child box">
                <article class="media">
                <figure class="media-left">
                    <p class="image is-64x64">
                    <img src={user.avatar_url}></img>
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                    <p>
                        <strong>{user.name}</strong> <small><b>@{user.username}</b></small> 
                        <br/>
                        <small>{created_at}</small>
                        <br/>
                        <br/>
                        { body }
                    </p>
                    </div>
                </div>
                </article>
            </article>
            </div>

        )
    }
}

export default Tweet;