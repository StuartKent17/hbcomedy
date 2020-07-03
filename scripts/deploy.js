const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export',
    {
        branch: 'master',
        repo: 'https://github.com/StuartKent17/hbcomedy.git',
        user: {
            name: 'stuartkent17',
            email: 'stuart@stuartkent.co.nz'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)