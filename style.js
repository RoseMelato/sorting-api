document.getElementById("testBtn").addEventListener("click", async () => {
    const email = document.getElementById("email").value.trim();
    const apiUrl = document.getElementById("apiUrl").value.trim();
    const data = document.getElementById("data").value.trim();

    if (!email || !apiUrl || !data) {
        alert("Please fill in all fields!");
        return;
    }

    try {
        document.getElementById("response").textContent = "Loading...";
        
        const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data })
    });

    const json = await res.json();
        
    // Format the response to show array on a single line
    let formattedResponse;
        
    if (json.word && Array.isArray(json.word)) {
        // Create a custom display format that shows array in one line
        formattedResponse = `{\n  "word": [${json.word.map(item => `"${item}"`).join(', ')}]\n}`;
    } 
    
    else {
        // If format is different, show the JSON
        formattedResponse = JSON.stringify(json, null, 2);
    }
    
    document.getElementById("response").innerHTML = formattedResponse;}
    catch (err) {
        document.getElementById("response").innerHTML = "Error: " + err.message;
    }
});