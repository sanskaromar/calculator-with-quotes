import React, { useEffect, useState }  from "react"

function Quote() {
    const [quote, setQuote] = useState(() => "");
    const [author, setAuthor] = useState(() => "")
    const url = "https://favqs.com/api/qotd";

    const refreshData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            
            setQuote(json.quote.body);
            setAuthor(json.quote.author);
        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                
                setQuote(json.quote.body);
                setAuthor(json.quote.author);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return(
        <div className="quote">
            <p>{quote}</p>
            <p className="author">- {author}</p>
            <button type="button" onClick={refreshData}> Refresh </button>
        </div>
    )
}
export default Quote