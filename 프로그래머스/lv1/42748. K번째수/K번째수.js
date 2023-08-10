function solution(array, commands) {
    return commands.map(command => {
        let [start, end, position] = command;
        let newArray = array.slice(start-1, end)
                            .sort((a, b) => a - b);
        return newArray[position-1];
    })
}