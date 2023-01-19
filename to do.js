let input = prompt("what would you like to do?");
const todos = ['Collect Chicken Eggs', 'Clean Litter Box']
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('***********');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('***********');
    } else if (input === 'new') {
        const newtodo = prompt("ok, what is new todo?");
        todos.push(newtodo);
        console.log(`${newtodo} added to the list!`);
    } else if (input === 'delete') {
        const index = parseInt(prompt("ok,enter the index to delete:"));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log('okay, deleted');
        } else {
            console.log('Unknown Index');
        }

    }

    input = prompt("what would you like to do?")
}
console.log("YOU QUIT THE APP!");