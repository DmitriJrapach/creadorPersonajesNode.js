const index = (req, res) => {
    res.render ("index",
        {
            title: "Index",
            layout: "main",
            style: "main.css"
        }
    )
}
const charCreator = (req, res) => {
    res.render ("charCreator",
        {
            title: "CharCreator",
            layout: "main",
            style: "main.css"
        }
    )
}

export default {
    index,
    charCreator
};