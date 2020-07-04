const PATH = require('path');
const dirTree = require('directory-tree');
fs = require('fs');

const tree = dirTree('./static/gallery',
 {extensions:/\.jpg$/}, null, (item, PATH, stats) => {
    fs.writeFile('src/routes/gallery/_images.json',JSON.stringify(item), function (err) {});
});