const stories = [
    { title: "আমার নাম তুমি", content: "একদিন এক ছেলে নদীর ধারে দাঁড়িয়ে ভাবছিল, জীবন আসলে কী?" },
    { title: "ভালোবাসার গল্প", content: "একটি ছোট্ট শহরে দুটি হৃদয় এক হয়েছিল ভালোবাসার বন্ধনে।" },
    { title: "বন্ধুত্বের গল্প", content: "দুই বন্ধু, রাকিব আর সজীব, ছোটবেলা থেকে একসাথে বড় হয়েছে।" },
    { title: "হাসির গল্প", content: "এক চোর একদিন ব্যাংকে ঢুকে বললো, সবাই হাত তুলে দাঁড়াও!" },
    { title: "দুঃখের গল্প", content: "একটি চিঠি পড়ে মেয়েটি কাঁদতে কাঁদতে বসে পড়লো।" },
    { title: "রহস্য গল্প", content: "একদিন এক লোক হঠাৎ করেই অদৃশ্য হয়ে গেল।" },
    { title: "ভৌতিক গল্প", content: "এক অন্ধকার রাতে এক ভূতের দেখা পাওয়া গেল।" },
    { title: "শিক্ষামূলক গল্প", content: "জীবনে সফল হতে হলে কঠোর পরিশ্রম দরকার।" },
    { title: "পারিবারিক গল্প", content: "একটি পরিবার সুখে-দুঃখে একসাথে থাকে।" },
    { title: "ঐতিহাসিক গল্প", content: "বাংলার ইতিহাস এক সমৃদ্ধ অতীতের গল্প বলে।" },
    { title: "ছোটদের গল্প", content: "এক বাঘ আর এক খরগোশের মজার গল্প।" },
    { title: "রূপকথার গল্প", content: "এক রাজকন্যা আর এক দুষ্ট ড্রাগনের গল্প।" },
    { title: "যুদ্ধের গল্প", content: "এক সৈনিক দেশের জন্য জীবন দিলো।" },
    { title: "অনুপ্রেরণার গল্প", content: "এক দরিদ্র ছেলে সফল ব্যবসায়ী হয়ে গেলো।" },
    { title: "দেশপ্রেমের গল্প", content: "এক যুবক দেশের জন্য আত্মত্যাগ করলো।" },
    { title: "বিজ্ঞান কল্পকাহিনি", content: "একদিন মানুষ মঙ্গল গ্রহে বাস করবে।" },
    { title: "সাহসিকতার গল্প", content: "এক কিশোর সিংহের মুখ থেকে বাচ্চাকে বাঁচালো।" },
    { title: "জীবনের গল্প", content: "জীবন মানেই নতুন নতুন অভিজ্ঞতা।" },
    { title: "সত্য ঘটনা", content: "একজন সফল উদ্যোক্তার বাস্তব গল্প।" },
    { title: "নতুন গল্প", content: "এটি একটি নতুন গল্প।" }
];

function showStory(index) {
    document.getElementById("story-content").innerHTML = `<h2>${stories[index].title}</h2><p>${stories[index].content}</p>`;
}

// Scroll Functions
function scrollLeft() {
    document.getElementById("story-list").scrollBy({ left: -150, behavior: 'smooth' });
}

function scrollRight() {
    document.getElementById("story-list").scrollBy({ left: 150, behavior: 'smooth' });
        }
