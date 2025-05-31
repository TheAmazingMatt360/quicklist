const itens = [];

function addItem()
{
    const itemName = document.querySelector("#item").value

    const item =
    {
        name: itemName,
        checked: false
    }

    itens.push(item)

    document.querySelector("#item").value = ""

    showItensList()
    
}

function showItensList()
{
    const list = document.querySelector(".list")
    selectionList.textContent = ""

    itens.map((item,index) =>
    {
        selectionList.InnerHTML += `
        
                    <div class="item">
                <div>
                    <input type="checkbox" name="list" id="item-${index}" ${item.checked && "checked"}>

                    <div class="custom-checkbox" onclick="checkItem('${item.name}')">
                        <img src="./assets/checked.svg" alt="checked">
                    </div>

                    <label for="item-${index}"> onclick="checkItem('${item.name}')">${item.name}</label>
                </div>
                <button onlick="removeItem(${item.name})">
                <img src="assets/trash-icon.svg" alt="">
                </button>
            </div>

        `
    })
}

function removeItem(itemName)
{
    const itemIndex = itens.findIndex((item) => item.name === itemName)
    const divWarning = document.querySelector(".warning")

    divWarning.classList.remove("hide-warning")

    setTimeout(() =>
    {
        divWarning.classList.add("hide-warning")
    },4000)

    if(itemIndex !== -1)
    {
        itens.splice(itemIndex,1)
    }

    showItensList()
}

function addHideWarning()
{
    document.querySelector(".warning").classList.add("hide-warning")
}

function checkItem(index)
{
    const item = itens.find((item) => item.name === itemName)
    itens[index].checked = !itens[index].checked

    if (item.checked === true)
    {
        item.checked = false
    }
    else
    {
        item.checked = true
    }

    showItensList()
}