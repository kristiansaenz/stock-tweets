(this["webpackJsonpstock-tweets"]=this["webpackJsonpstock-tweets"]||[]).push([[0],{22:function(e,t,a){e.exports=a(51)},27:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},28:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(20),c=a.n(r),l=(a(27),a(28),a(8)),i=a(2),o=a(3),u=a(5),m=a(4),p=a(6),d=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{onSubmit:this.props.onSubmit.bind(this)},s.a.createElement("div",{class:"field is-grouped"},s.a.createElement("p",{class:"control is-expanded"},s.a.createElement("input",{class:"input",type:"text",value:this.props.stock,onChange:this.props.onChange.bind(this),placeholder:"$StockTeets"})),s.a.createElement("p",{class:"control"},s.a.createElement("a",{class:"button is-light",type:"submit",value:"Submit"},"Search"))))}}]),t}(s.a.Component),h=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.tweet,t=(e.id,e.body),a=e.created_at,n=e.user;return s.a.createElement("div",{class:"tile is-parent"},s.a.createElement("article",{class:"tile is-child box"},s.a.createElement("article",{class:"media"},s.a.createElement("figure",{class:"media-left"},s.a.createElement("p",{class:"image is-64x64"},s.a.createElement("img",{src:n.avatar_url}))),s.a.createElement("div",{class:"media-content"},s.a.createElement("div",{class:"content"},s.a.createElement("p",null,s.a.createElement("strong",null,n.name)," ",s.a.createElement("small",null,s.a.createElement("b",null,"@",n.username)),s.a.createElement("br",null),s.a.createElement("br",null),t,s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("small",null,a)))))))}}]),t}(s.a.Component),b=a(7),v=a.n(b),E=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.tweets.map((function(e){return s.a.createElement(h,{key:e.id,tweet:e})}))}}]),t}(s.a.Component);E.prototypes={tweetboard:v.a.array.isRequired};var f=E,g=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.tag,t=e.id,a=e.name;e.filtered;return s.a.createElement("div",{class:"tag",onClick:this.props.filterTag.bind(this,t)},a,s.a.createElement("button",{class:"delete is-small",onClick:this.props.deleteTag.bind(this,t)}))}}]),t}(s.a.Component);g.prototypes={tag:v.a.object.isRequired};var j=g,O=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return this.props.tags.map((function(t){return s.a.createElement(j,{key:t.id,tag:t,deleteTag:e.props.deleteTag,filterTag:e.props.filterTag})}))}}]),t}(s.a.Component);O.prototypes={taglist:v.a.array.isRequired};var y=O,k=(a(31),a(21)),T=a.n(k),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={stock:"MSFT",tags:[{id:1,name:"APPL"}],tweets:[]},a.onSubmit=function(e){e.preventDefault(),a.addTag(a.state.stock),a.setState({stock:""})},a.onChange=function(e){return a.setState({stock:e.target.value})},a.deleteTag=function(e,t){a.setState({tags:Object(l.a)(a.state.tags.filter((function(t){return t.id!==e})))})},a.filterTag=function(e){},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("section",{class:"hero is-info"},s.a.createElement("div",{class:"hero-body"},s.a.createElement("div",{class:"container"},s.a.createElement("h1",{class:"title"},"Stock Tweets"),s.a.createElement("h2",{class:"subtitle"},"See the latest tweets on your favorite stocks!"),s.a.createElement("br",null),s.a.createElement("nav",{class:"level"},s.a.createElement("div",{class:"level-left"},s.a.createElement("div",{class:"level-item"},s.a.createElement(d,{onSubmit:this.onSubmit,onChange:this.onChange}))),s.a.createElement("div",{class:"level-right"},s.a.createElement("div",{class:"level-item"},s.a.createElement("div",{class:"tags"},s.a.createElement(y,{tags:this.state.tags,deleteTag:this.deleteTag,filterTag:this.filterTag})))))))),s.a.createElement("div",{class:"section"},s.a.createElement("div",{class:"container"},s.a.createElement("div",{class:"tile is-ancestor"},s.a.createElement("div",{class:"tile is-vertical"},s.a.createElement("div",{class:"tile"},s.a.createElement(f,{tweets:this.state.tweets})))))))}},{key:"addTag",value:function(e){var t={id:T.a.v4(),name:e};this.setState({tags:Object(l.a)(this.state.tags.concat(t))})}},{key:"fetchStockTweets",value:function(e){var t=new XMLHttpRequest;t.open("GET",e,!1),t.send(null);var a=JSON.parse(t.responseText),n=a.messages;console.log(a),this.setState({tweets:n})}},{key:"componentDidMount",value:function(){console.log(this.state.tags[0].name);var e="https://api.stocktwits.com/api/2/streams/symbol/"+this.state.stock+".json?limit=30";this.fetchStockTweets(e)}}]),t}(s.a.Component);var S=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement(w,null)))};c.a.render(s.a.createElement(S,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.c2173ace.chunk.js.map