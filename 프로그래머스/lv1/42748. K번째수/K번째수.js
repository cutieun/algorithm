function solution(array, commands) {
    return commands.map(command => {
        const [start, end, position] = command;
        const newArray = array.slice(start-1, end)
                              .sort((a, b) => a - b);
        return newArray[position-1];
    })
}