const facts = [
    "I am 19 years old and have a passion for coding.",
    "I love reading books and often find myself lost in different worlds.",
    "I enjoy solving complex problems through programming.",
    "I am constantly learning new programming languages and technologies.",
    "I believe that a good book can be as thrilling as a great piece of code."
];

document.getElementById('generate-fact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact-display').textContent = facts[randomIndex];
});
