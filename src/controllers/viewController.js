const index = (req, res) => {
    res.render ("index",
        {
            title: "Index",
            layout: "main",
            style: "main.css"
        }
    )
}
const info = (req, res) => {
    res.render ("info",
        {
            title: "info",
            layout: "main",
            style: "main.css"
        }
    )
}

export default {
    index,
    info
};