class CommentList extends React.Component {
    constructor (props) {
        super (props)
    }

    render () {
        const commentNodes = this.props.data.map (({author, text}, index) =>
            <Comment key={index} author={author}>{text}</Comment>
        )

        return (
            <div className="comment-list">
                {commentNodes}
            </div>
        )
    }
}

