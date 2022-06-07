window.onload = async () => {
    let json = await new JsonFile().get_instance()
    let f_list = document.getElementsByClassName("foodlist")[0]

    json.get("menu").forEach((v) =>{
        let cell = document.createElement("div")
        cell.className = "food_cell"
        let img = document.createElement("img")
        img.className = "food_img"
        img.src = "img/" + v["img"] + ".jpg"
        let name = document.createElement("span")
        name.className = "food_name"
        name.innerHTML = v["name"]
        let price = document.createElement("span")
        price.className = "food_price"
        price.innerHTML = "Цена: " + v["price"] + " грн"
        let button = document.createElement("input")
        button.className = "food_order"
        button.type = "button"
        button.value = "Заказать"
        cell.appendChild(img)
        cell.appendChild(name)
        cell.appendChild(price)
        cell.appendChild(button)
        f_list.appendChild(cell)
    })
}

