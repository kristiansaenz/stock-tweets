import React from 'react';
import moment from 'moment';


class Tweet extends React.Component {

    render(){
        const { id, body, created_at, user } = this.props.tweet;
        var time = moment(created_at).format('DD-MM-YYYY, h:mm a');
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
                        <br/>
                        { body }
                        <br/>
                        <br/>
                        <small>{time}</small>
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