import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from
    "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-84d12-default-rtdb.firebaseio.com/"
}

//connecting our app to the firebase database

const app = initializeApp(appSettings)  //Initialized this
const database = getDatabase(app)        //Then connect the database to the initialized app  
const shoppingListInDB = ref(database, "shoppingList")    //Then inside the database we will create a table named shoppingListInDB using ref and and the variable which contains every info about the firebase which is database

const btnel = document.getElementById("addbtn")
const inputel = document.getElementById("myinput")
const shoppingListEl = document.getElementById("shopping-list")


onValue(shoppingListInDB, function (snapshot) {
    if (snapshot.exists()) {
        let itemArray = Object.entries(snapshot.val())
        clearShoppingList()
        for (let i = 0; i < itemArray.length; i++) {
            let currItem = itemArray[i]
            addToShoppingList(currItem)
        }
    }
    else
        shoppingListEl.innerHTML = "No items here...yet"
    //console.log(Object.keys(snapshot.val()))


})

btnel.addEventListener("click", function () {
    let inputValue = inputel.value
    push(shoppingListInDB, inputValue)
    console.log(`${inputValue} added to the database`)
    clear()
})

function clear() {
    inputel.value = ""
}

function addToShoppingList(item) {
    //  shoppingListEl.innerHTML += `<li>${inputValue}</li>`
    let itemID = item[0]
    let itemVal = item[1]
    let newEl = document.createElement("li")
    newEl.innerHTML = itemVal
    shoppingListEl.append(newEl)

    newEl.addEventListener("dblclick", function () {
        let exactLoc = ref(database, `shoppingList/${itemID}`)
        remove(exactLoc)
    })
}

function clearShoppingList() {
    shoppingListEl.innerHTML = ""

}