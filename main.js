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
                <button><img src="assets/trash-icon.svg" alt=""></button>
            </div>

        `
    })
}