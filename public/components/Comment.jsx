const converter = new Showdown.converter ()

class Comment extends React.Component {
    constructor (props) {
        super (props)
    }

    render () {
        const rawMarkup = converter.makeHtml (this.props.children.toString ())

        return (
            <div className="comment">
                <h2 className="comment-author">{this.props.author}</h2>
                <span dangerouslySetInnerHTML={{__html: rawMarkup}}></span>
            </div>
        )
    }
}

