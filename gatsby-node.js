const path = require("path");
const fs = require("fs");

exports.createPages = async({actions}) => {
    const {createPages} = actions

    const data = JSON.parse(
        fs.readFileSync('src/data/data.json')
    )

    const blogPostTemplate = path.resolve('src/templates/template.js')

    data.pages.forEach((item) => {
        console.log(item);
        createPages({
            path: item.slug,
            component: blogPostTemplate,
            context: item // addional data can be passed via context
        })
    })
}