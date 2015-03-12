; // JavaScript ASI
(function main () {
    const container = document.querySelector ('#content')
    React.render (<CommentBox url="comments.json" pollInterval={2000} />, container)
}) ()

