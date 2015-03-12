class CommentForm extends React.Component {
    constructor (props) {
        super (props)
        this.handleSubmit = this.handleSubmit.bind (this)
    }

    handleSubmit (event) {
        event.preventDefault ()

        const author = React.findDOMNode (this.refs.author).value.trim ()
        const text = React.findDOMNode (this.refs.text).value.trim ()

        if (!text || !author) {
            return
        }

        this.props.onCommentSubmit ({author, text});

        React.findDOMNode (this.refs.author).value = ''
        React.findDOMNode (this.refs.text).value = ''

        return
    }

    render () {
        return (
            <form className="comment-form" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your name" ref="author"/>
                <input type="text" placeholder="Say something..." ref="text"/>
                <input type="submit" value="Post" />
            </form>
        )
    }
}

