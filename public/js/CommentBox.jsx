class CommentBox extends React.Component {
    constructor (props) {
        super (props)
        this.state = {data: []}

        // http://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding
        this.loadCommentsFromServer = this.loadCommentsFromServer.bind (this)
        this.handleCommentSubmit = this.handleCommentSubmit.bind (this)
    }

    componentDidMount () {
        // setInterval (this.loadCommentsFromServer, this.props.pollInterval)
        this.loadCommentsFromServer ()
    }

    loadCommentsFromServer () {
        $.getJSON (this.props.url).
            done (data => this.setState ({data: data})).
            fail ((jqxhr, textStatus, error) => {
                console.error (this.props.url, textStatus, error.toString ())
            })
    }

    handleCommentSubmit (comment) {
        $.ajax ({
                type: 'POST',
                url: this.props.url,
                contentType: 'application/json',
                data: JSON.stringify (comment),
                dataType: 'json'
            }).
            done (this.loadCommentsFromServer).
            fail ((jqxhr, textStatus, error) => {
                console.error (this.props.url, textStatus, error.toString ())
            })
    }

    render () {
        return (
            <div className="comment-box">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
            </div>
        )
    }
}

