const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() 
{
    if (inputBox.value === "")
    {
        alert("please enter something");
    }
    else
    {
        // create a new list item
        let li = document.createElement('li');
        
        li.classList.add(
            "content:''",
            "cursor-pointer",
            "flex",
            "items-center",
            "relative",
            "h-8",
            "mb-4",
            // "items-center",
            "pt-0",
            "pb-0",
            "px-20",
            "mt-8",
            "before:left-10",
            "before:absolute",
            "before:h-5",
            "before:w-5",
            "before:bg-cover",
            "before:bg-center",
            "before:bg-[url('/Components/square.png')]"
        );
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");

        span.classList.add(
            "cursor-pointer",
            "rounded-full",
            "text-center",
            "hover:bg-slate-200",
            "w-7",
            "flex-shrink-0",
            "h-7",
            "mx-48",
            "px-2",
            "absolute"
        );
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    // clear the input box
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click" , function(e)
{
    if(e.target.tagName ==='LI')
    {
        e.target.classList.add(
            "cursor-pointer",
            "relative",
            "h-8",
            "mb-4",
            // "items-center",
            "pt-0",
            "pb-0",
            "px-20",
            "mt-8",
            "before:left-10",
            "before:absolute",
            "before:bg-cover",
            "before:bg-center",
            "line-through",
            "before:bg-[url('/Components/cross.png')]"
        );
        saveData();
    }
    else if(e.target.tagName ==="SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData()
{
    localStorage.setItem("data" , listContainer.innerHTML)
}

function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();