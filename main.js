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
                    <input type="checkbox" name="list" id="item-${index}">

                    <div class="custom-checkbox">
                        <img src="./assets/checked.svg" alt="checked">
                    </div>

                    <label for="item-${index}">${item.name}</label>
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

    console.log(itemIndex)

    if(itemIndex !== -1)
    {
        itens.splice(itemIndex,1)
    }

    showItensList()
}

function checkItem(index)
{
    itens[index].checked = !itens[index].checked

    showItensList()
}