import { useState } from "react";

export function UrlForm( {onSubmit}: { onSubmit: (url: string) => void }) {
    const [url, setUrl] = useState("https://");

    return(
        <form
            onSubmit={(event) => {
                event.preventDefault();
                onSubmit(url);
            }}            
        >
            <input
                type="url"
                value={url}
                onChange={(event) => {
                    setUrl(event.target.value);
                }}
                placeholder="Enter URL"
                required
            />
            <button type="submit">Shorten</button>
        </form>
    );
}