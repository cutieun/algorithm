let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let nodeNum = Number(input[0]);
let linkNum = Number(input[1]);
let graph = [];

for(let i=1; i<=nodeNum; i++){
    graph[i] = [];
}
for(let j=2; j<=linkNum+1; j++) {
    let [x, y] = input[j].split(' ').map(Number);
    graph[x].push(y);
    graph[y].push(x);
}

let cnt = 0;
let visited = new Array(nodeNum + 1).fill(false);
function dfs(x) {
    visited[x] = true;
    cnt++;
    for(y of graph[x]){
        if(!visited[y]) dfs(y);
    }
}

dfs(1);
console.log(cnt - 1);