export async function shortenUrl(url: string) {
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await res.json();
    return data.result.full_short_link;
}