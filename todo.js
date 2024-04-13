import inquirer from "inquirer";
let todo = [];
let Question = await inquirer.prompt([
    { message: "What do you want to add in your Grocery List?", type: "input", name: "Todo1" },
]);
if (Question.Todo1 !== '') {
    todo.push(Question.Todo1);
}
else {
    console.log("Please Input valid value in the lsit");
}
console.log(todo);
let condition = true;
while (condition) {
    let confirm = await inquirer.prompt([
        { message: "What you want to do further? ", type: "list", name: "Confirm1", choices: ["Add more items", "Exchange item", "Delete item", "logout"] }
    ]);
    if (confirm.Confirm1 == "Add more items") {
        let Question = await inquirer.prompt([
            { message: "What do you want to add further in your List", type: "input", name: "Todo1" },
        ]);
        if (Question.Todo1 !== '') {
            todo.push(Question.Todo1);
            console.log("Updated list is", todo);
        }
        else {
            console.log("Please Input valid item name in the lsit");
        }
    }
    else if (confirm.Confirm1 == "Delete item") {
        let del = await inquirer.prompt([{
                message: "Which item to delete:", type: "input", name: "deleteditem"
            }]);
        todo = todo.filter(i => i !== del.deleteditem);
        console.log("Updated list after deletion is", todo);
    }
    else if (confirm.Confirm1 == "Exchange item") {
        let update = await inquirer.prompt([{
                message: "Which item to Exchange?", type: Number, name: "updateditem"
            },
            { message: "Which item to add against exchange?", type: "input", name: "updatewith" }]);
        todo = todo.map(i => i == update.updateditem ? update.updatewith : i);
        console.log("Updated list after Exchange is", todo);
    }
    else if (confirm.Confirm1 == "logout") {
        let out = await inquirer.prompt([
            { message: "Do you want to End Shopping?", type: "confirm", name: "conf" }
        ]);
        condition = !out.conf;
    }
}
