import React, { useEffect, useState }  from "react"

function Quote() {
    const [quote, setQuote] = useState(() => "");
    const [author, setAuthor] = useState(() => "")
    const url = "https://favqs.com/api/qotd";  // API url for quotes

    // Function to fetch new data
    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();  // Promise that resolves responce to JS Object
            
            setQuote(json.quote.body); // GET quote from API
            setAuthor(json.quote.author); // GET quote-author from API
        } catch (error) {
            console.log("error", error);
            // Error handling if API is down for sometime ;)
            setQuote("Thak gya hu bro Quotes fetch karte karte :(");
            setAuthor("API");
        }
    }

    // Hook to fetch Data once upon page reload 
    useEffect(() => fetchData(), []);

    return(
        <div className="quote">
            <p>{quote}</p>
            <p className="author">- {author}</p>
            <button type="button" onClick={fetchData}> Refresh </button>
        </div>
    )
}
export default Quote