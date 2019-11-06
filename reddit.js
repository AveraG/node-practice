var rp = require('request-promise');
const fs = require("fs");

async function reddit() {
    await rp({
        uri: 'https://reddit.com/r/popular.json',
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    })

        .then(article => {
            let redditArr = [];
            article.data.children.forEach(child => {
                let title = child.data.title;
                let author = child.data.author;
                let url = child.data.url;

                redditArr.push({ title, author, url }),
                    fs.writeFile('popular-articles.json', JSON.stringify(redditArr), err => {
                        if (err) {
                            throw err;
                        }
                    }
                );
                console.log(redditArr);
            })
        })
        .catch(function(err) {
            console.log(err);
        })
};

reddit();