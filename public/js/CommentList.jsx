class CommentList extends React.Component {
    constructor (props) {
        super (props)
    }

    render () {
        const commentNodes = this.props.data.map (comment => (
                <Comment key={comment.id} author={comment.author}>{comment.text}</Comment>
            )
        )

        return (
            <div className="comment-list">
                {commentNodes}
            </div>
        )
    }
}

