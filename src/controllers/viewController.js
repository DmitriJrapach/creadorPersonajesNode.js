const index = (req, res) => {
    res.render ("index",
        {
            title: "Index",
            layout: "main",
            style: "main.css"
        }
    )
}

export default {
    index
};