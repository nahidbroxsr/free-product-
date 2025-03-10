const TELEGRAM_BOT_TOKEN = "7625765343:AAHT3yUTUtmKtSOv-EDhIYj5fhLynw-Icas";
const TELEGRAM_CHAT_ID = "7294674899";

function openPopup(product) {
    document.getElementById("popup").style.display = "block";
    document.getElementById("selected-product").innerText = "প্রোডাক্ট: " + product;
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function confirmOrder() {
    let size = document.getElementById("size").value;
    let type = document.getElementById("type").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let product = document.getElementById("selected-product").innerText.replace("প্রোডাক্ট: ", "");

    if (phone === "" || address === "") {
        alert("দয়া করে নাম্বার এবং ঠিকানা পূরণ করুন!");
        return;
    }

    document.getElementById("loading").style.display = "block";
    document.getElementById("popup").style.display = "none";

    let message = `📦 **নতুন অর্ডার**\n\n🛍 প্রোডাক্ট: ${product}\n📏 সাইজ: ${size}\n📌 ধরন: ${type}\n📞 নাম্বার: ${phone}\n📍 ঠিকানা: ${address}`;

    let url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${encodeURIComponent(message)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("loading").style.display = "none";
            alert("অর্ডার সফলভাবে পাঠানো হয়েছে!");
        })
        .catch(error => {
            document.getElementById("loading").style.display = "none";
            alert("কিছু সমস্যা হয়েছে, আবার চেষ্টা করুন!");
        });
              }
