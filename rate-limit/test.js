// const { exec } = require('child_process');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const timeoutAsync = (timeout) => (new Promise((res) => setTimeout(res, timeout)))

// setInterval(async () => {
//     const result = await exec('curl localhost:8082')
//     // console.log(result.stdout)
//     // exec('curl localhost:8082/test')
// },500)

async function main () {
    console.log('main')
    let j = 0
    for (let i of (Array(1000).fill(0))) {
        j++
        // const result = await exec('curl localhost:8082')
        // const result = await exec('curl -o /dev/null -s -w "%{http_code}\n" localhost:8082')
        // console.log(i, result.stdout)
        try {
            const result2 = await exec('curl -o /dev/null -s -w "%{http_code}\n" localhost:8082/api')
            console.log(j, result2.stdout)
        } catch(e) {}
        await timeoutAsync(500)
    }
}

main()
