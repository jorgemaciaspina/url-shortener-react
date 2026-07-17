import { useState } from 'react'
import './App.css'
import { UrlForm } from './UrlForm/UrlForm'
import { shortenUrl } from './api/shrtcode';
import { ShortenedLink } from './ShortenedLink/ShortenedLink';

function App() {
  const [error, setError] = useState<string | null>(null);
  const [shorten, setShorten] = useState<string>("");

  const onSubmit = async (url: string) => {
    try {
      setShorten(await shortenUrl(url));
    } catch(err) {
      setError("Failed to shorten URL");
    }
  }
  return (
    <>
      <section id="form">
        <UrlForm onSubmit={onSubmit} />
        <ShortenedLink link={shorten} error={error} />
      </section>
    </>
  )
}

export default App
