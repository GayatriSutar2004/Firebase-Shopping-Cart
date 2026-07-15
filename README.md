# 🛒 Firebase Shopping Cart

<p align="center">
  <img src="assets/Screenshot%202026-07-15%20231433.png" alt="Project Preview" width="800">
</p>

<p align="center">
A simple yet powerful Shopping Cart web application built using <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>Firebase Realtime Database</b>. This project is perfect for beginners who want to understand how a frontend application communicates with a cloud database without building a backend server.
</p>

## 🔗 Live Demo

🚀 **Try the application here:**

**https://catshoppingcart.netlify.app/**

No installation required—just open the link and start adding shopping items in real time.
---

## 🌟 Why This Project?

Imagine writing a shopping list on paper. Every time you add or remove an item, you have to update it manually.

Now imagine that list lives in the cloud. Whenever you add, remove, or update an item, the list changes instantly for everyone connected—without refreshing the page.

That's exactly what Firebase Realtime Database does, and this project demonstrates that concept in the simplest way possible.

---

## 📸 Project Preview

<p align="center">
  <img src="assets/Screenshot%202026-07-15%20231433.png" width="700">
</p>

---

# ✨ Features

* 🛒 Add shopping items
* ☁️ Store data in Firebase Realtime Database
* ⚡ Instant real-time updates
* ❌ Double-click any item to delete it
* 📱 Responsive and clean user interface
* 🎯 Beginner-friendly code structure

---

# 🛠️ Tech Stack

| Technology                 | Purpose                                   |
| -------------------------- | ----------------------------------------- |
| HTML5                      | Structure of the application              |
| CSS3                       | Styling and responsive layout             |
| JavaScript (ES6 Modules)   | Application logic                         |
| Firebase Realtime Database | Cloud database for storing shopping items |

---

# 📂 Project Structure

```
Firebase-Shopping-Cart/
│
├── assets/
│   ├── cat.png
│   └── Screenshot.png
│
├── index.html      → User Interface
├── index.css       → Styling
├── index.js        → Application Logic + Firebase
└── README.md
```

---

# 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/GayatriSutar2004/Firebase-Shopping-Cart.git
```

### 2. Open the project

Open the project using **VS Code**.

### 3. Run using Live Server

Do **not** open `index.html` directly using `file://`.

Instead:

* Install **Live Server**
* Right-click **index.html**
* Select **Open with Live Server**

The project will open in your browser.

---

# 🔥 What is Firebase?

Firebase is a **Backend-as-a-Service (BaaS)** platform developed by Google.

Normally, web applications require:

```
Frontend
      ↓
Backend Server
      ↓
Database
```

With Firebase, Google provides the backend for you.

```
Frontend
      ↓
Firebase
      ↓
Realtime Database
```

This means you can build cloud-powered applications without writing backend code.

---

# ☁️ What is Firebase Realtime Database?

Firebase Realtime Database is a **NoSQL cloud database**.

Instead of storing information in tables like MySQL, it stores everything as **JSON**.

Example:

```json
{
  "shoppingList": {
    "-Ox123": "Milk",
    "-Ox124": "Bread",
    "-Ox125": "Cake"
  }
}
```

Every connected device automatically receives updates whenever the data changes.

No page refresh is required.

---

# ⚙️ How This Project Works

### Step 1 – User enters an item

```
Milk
```

↓

### Step 2 – Click "Add to Cart"

JavaScript reads the input value.

↓

### Step 3 – Firebase stores the item

```javascript
push(shoppingListInDB, inputValue)
```

Firebase automatically creates a unique ID.

↓

### Step 4 – Database updates

```
shoppingList
     │
     ├── -Ox123 → Milk
     ├── -Ox124 → Bread
     └── -Ox125 → Cake
```

↓

### Step 5 – `onValue()` detects the change

Whenever the database changes, Firebase immediately informs the application.

↓

### Step 6 – UI updates automatically

The new item appears instantly without refreshing the page.

---

# 🧠 Firebase Functions Used

### `initializeApp()`

Initializes your Firebase project.

```javascript
initializeApp(appSettings)
```

---

### `getDatabase()`

Connects the application to Firebase Realtime Database.

```javascript
getDatabase(app)
```

---

### `ref()`

Creates a reference to a location inside the database.

```javascript
ref(database, "shoppingList")
```

Think of it like opening a folder named **shoppingList**.

---

### `push()`

Adds new data with an automatically generated unique key.

```javascript
push(shoppingListInDB, inputValue)
```

Result:

```
shoppingList
    │
    ├── -Oxabc123
            │
            └── Milk
```

---

### `onValue()`

Listens for realtime updates.

Whenever someone adds or deletes data, this function runs automatically.

```javascript
onValue(shoppingListInDB, callback)
```

---

### `remove()`

Deletes an item from Firebase.

```javascript
remove(itemRef)
```

---

# 📊 Database Structure

```
shoppingList
│
├── -Ox123
│      └── Milk
│
├── -Ox124
│      └── Bread
│
└── -Ox125
       └── Cake
```

Each item contains:

* A unique Firebase-generated ID
* The shopping item value

---

# 🔐 Firebase Security Rules

Firebase databases are protected using Security Rules.

Example:

```json
{
  "rules": {
    ".read": true,
    ".write": false
  }
}
```

✔ Everyone can view data.

❌ Nobody can modify it.

For production applications, authentication should be used:

```json
{
  "rules": {
    ".read": true,
    ".write": "auth != null"
  }
}
```

This allows only authenticated users to write data.

---

# 💡 Things I Learned

* Connecting a web application to Firebase
* Working with a cloud-hosted NoSQL database
* DOM Manipulation using JavaScript
* CRUD operations (Create, Read, Delete)
* Realtime data synchronization
* ES6 Modules
* Firebase Security Rules
* Responsive UI development

---

# 🚀 Future Improvements

* 🔐 Google Authentication
* ✏️ Edit Items
* 🔍 Search Functionality
* 📦 Quantity Selection
* 🌙 Dark Mode
* 📅 Timestamps
* 👤 User-specific Shopping Lists
* ☁️ Deploy using Firebase Hosting

---

# 🎯 Conclusion

This project demonstrates how a modern web application can interact with a cloud database in real time using only frontend technologies. It is a great starting point for anyone learning Firebase because it introduces important concepts such as database references, realtime listeners, CRUD operations, and security rules while keeping the code simple and easy to understand.

If you're new to Firebase, this project is an excellent first step before exploring Authentication, Firestore, Cloud Functions, and Hosting.

---

## 👩‍💻 Author

**Gayatri Sutar**

* 🌐 GitHub: https://github.com/GayatriSutar2004

---

⭐ **If you found this project helpful, consider giving it a star!**
