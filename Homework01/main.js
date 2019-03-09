const todo_input = document.getElementById("todo__input");
const todo_list = document.getElementById("todo__list");
const todo_total = document.getElementById("todo__total");
const todo_footer = document.getElementById("todo-footer");
var todo_items = [];
var item_cnt = 0;
var state = "all";

// no item, no display;
todo_footer.style.display = "none";

todo_input.addEventListener('keyup', event => { // press enter
    if (event.keyCode === 13 && event.target.value !== ''){
        var list = list_creator(event.target.value);
        list = { node: list, isComplete: false };
        todo_items.push(list);
        event.target.value = '';
        todo_list.appendChild(list.node);

        // once have item, display
        todo_footer.style.display = "flex";

        filter_selection(state);
        todo_total.innerHTML = todo_items.filter(ele => !ele.isComplete).length + " left";
    }
});

function list_creator(value){ // things to add
    const itemNode = document.createElement("LI");
    const wrapper = document.createElement("DIV");
    const checkbox = document.createElement("INPUT");
    const checklabel = document.createElement("LABEL");
    const todo_item = document.createElement("H1");
    const cross_img = document.createElement("IMG");

    // setting for div
    wrapper.setAttribute("class", "todo-app__checkbox");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", item_cnt);
    checkbox.setAttribute("onclick", "select_item(event)");
    checklabel.setAttribute("for", item_cnt);

    // setting for h1
    todo_item.setAttribute("class", "todo-app__item-detail");
    todo_item.innerHTML = value;

    // setting for img
    cross_img.setAttribute("src", "./img/x.png");
    cross_img.setAttribute("class", "todo-app__item-x");
    cross_img.setAttribute("onclick", "delete_item(event)");
    cross_img.setAttribute("id", "cross" + item_cnt);

    //setting for li
    itemNode.setAttribute("class", "todo-app__item");
    itemNode.setAttribute("id", "item" + item_cnt);
    itemNode.classList.add("active");
    // console.log(itemNode.id);

    // append things into li
    wrapper.appendChild(checkbox);
    wrapper.appendChild(checklabel);
    itemNode.appendChild(wrapper);
    itemNode.appendChild(todo_item);
    itemNode.appendChild(cross_img);

    item_cnt += 1;

    return itemNode;
};

function select_item(event){ //select completed item
    let id = event.target.id;
    let target_object = todo_items[0];

    for(i = 0; i < todo_items.length; i++){
        if(id == todo_items[i].node.id.replace('item', '')){
            todo_items[i].isComplete = !todo_items[i].isComplete;
            target_object = todo_items[i];
            // console.log(target_object.node.id);
            break;
        }
    }

    // add delete tag
    if(target_object.isComplete === true){
        let target_id = document.getElementById(target_object.node.id);
        let target_title = target_id.getElementsByTagName("h1")[0];
        target_object.node.classList.remove("active");
        target_object.node.classList.add("completed");
        target_title.style["textDecoration"] = "line-through";
        target_title.style["opacity"] = 0.5;
    }
    else{
        let target_id = document.getElementById(target_object.node.id);
        let target_title = target_id.getElementsByTagName("h1")[0];
        target_object.node.classList.remove("completed");
        target_object.node.classList.add("active");
        target_title.style["textDecoration"] = "";
        target_title.style["opacity"] = 1;
    }
    filter_selection(state);
    // change items left
    todo_total.innerHTML = todo_items.filter(ele => !ele.isComplete).length + " left";
};

filter_selection("all"); // default

function filter_selection(choice){ // filter items
    let selection = document.getElementsByClassName("todo-app__item");
    let all_but = document.getElementById("all");
    let active_but = document.getElementById("active");
    let completed_but = document.getElementById("completed");
    // console.log(selection);

    // emphasize selected button
    if(choice == "all"){
        all_but.style.border = "1px solid rgb(192, 191, 191)";
        active_but.style.border = "1px solid transparent";
        completed_but.style.border = "1px solid transparent";
        choice = "";
        state = "all";
    }
    else if(choice == "active"){
        all_but.style.border = "1px solid transparent";
        active_but.style.border = "1px solid rgb(192, 191, 191)";
        completed_but.style.border = "1px solid transparent";
        state = "active";
    }
    else if(choice == "completed"){
        all_but.style.border = "1px solid transparent";
        active_but.style.border = "1px solid transparent";
        completed_but.style.border = "1px solid rgb(192, 191, 191)";
        state = "completed";
    } 

    for(i = 0; i < todo_items.length; i++){
        selection[i].style.display = "none";
        if (selection[i].className.indexOf(choice) > -1){
            selection[i].style.display = "flex";
        } 
    }
}

function delete_completed(){ // delete complete items
    let list_li = todo_list.getElementsByTagName("li");
    for(i = todo_items.length - 1; i >= 0; i--){
        if(todo_items[i].isComplete === true){
            todo_items.splice(i, 1);
            todo_list.removeChild(list_li[i]);
        }
    }
    if(todo_items.length == 0){
        todo_footer.style.display = "none";
    }
}

function delete_item(event){ //delete single item
    let list_li = todo_list.getElementsByTagName("li");
    let id = event.target.id.replace('cross', '');
    for(i = 0; i < todo_items.length; i++){
        if(id == todo_items[i].node.id.replace('item', '')){
            todo_items.splice(i, 1);
            todo_list.removeChild(list_li[i]);
            // console.log(id);
        }
    }
    todo_total.innerHTML = todo_items.filter(ele => !ele.isComplete).length + " left";
    if(todo_items.length == 0){
        todo_footer.style.display = "none";
    }
}



