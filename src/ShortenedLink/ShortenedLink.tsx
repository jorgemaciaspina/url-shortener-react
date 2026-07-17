export function ShortenedLink({ link, error }: { link: string, error: string | null }) {

    let message;
    if(error) {
        message = <div> 
                <p>Error shortening:</p>
                <span>{error}</span>
        </div>        
    } else {
        message = <div>
            <p>Your shortened link:</p>
            <a href={link} target="_blank" rel="noopener noreferrer">
                {link}
            </a></div>
    }
    return (
        message
    )
}