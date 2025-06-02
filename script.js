let quoteText = document.getElementById("quote-text");
let quoteAuthor = document.getElementById("quote-author");

async function fetchQuote(){
   try{
    const response = await fetch("https://dummyjson.com/quotes/random");

    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const quote = data.quote;
    const author = data.author;
    quoteText.textContent = quote;
    quoteAuthor.textContent = `- ${author}`; 
   }
    catch (error){
        console.error("Error fetching quote:", error);
        quoteText.textContent = "Oops! Could not fetch a quote.";
        quoteAuthor.textContent = "Unknown Author";
    }
}

fetchQuote();

function updateTimeDisplay(){
    const timeDisplay = document.getElementById("time-display-value");
    function updateTime(){
        const now  = new Date();
        const midnight = new Date();
        midnight.setHours(24, 0, 0, 0);
    
        const timeUntilMidnight = midnight - now;
        if(timeUntilMidnight > 0){
            const hours = Math.floor(timeUntilMidnight / (1000 * 60 * 60))
            const minutes = Math.floor((timeUntilMidnight % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor(timeUntilMidnight % (1000 * 60) / 1000);
            timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
        }
        else{
            clearInterval(interval);
            timeDisplay.textContent = "Time's up!";
            fetchQuote();
        }
    }
    updateTime();
    const interval = setInterval(updateTime, 1000);
}

updateTimeDisplay();
// open dialog
document.querySelectorAll("[data-dialog-target]").forEach(button => {
    button.addEventListener("click", () => {
        const dialogId  = button.getAttribute("data-dialog-target");
        const rect = button.getBoundingClientRect();
        const dialog = document.getElementById(dialogId);
        dialog.style.left= `${rect.left}px`;
        dialog.style.top= `${rect.top + 10}px`;
        dialog.show();  
    });
});


document.querySelectorAll("[data-dialog-close]").forEach(button => {
    button.addEventListener("click",(e) =>{
        const dialogId = button.getAttribute("data-dialog-close");
        const dialog = document.getElementById(dialogId);
        dialog.close();
    })
});

// refresh quote
document.getElementById("refresh-btn").addEventListener("click", () => {
    fetchQuote();
});
