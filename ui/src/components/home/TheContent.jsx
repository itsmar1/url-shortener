import React from "react";

const TheContent = () => {
  return (
    <div className="content">
      <h2>Simple and fast URL shortener!</h2>
      <p>
        ShortURL allows to reduce long links from{" "}
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        {", "}
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        {", "}
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>
        {", "}
        <a
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        {", "}
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        {" "} and top sites on the Internet, just paste the long URL and click the
        Shorten URL button. On the next screen, copy the shortened URL and share
        it on websites, chat and e-mail. After shortening the URL, check how
        many clicks it received.
      </p>
      <h2>Shorten, share and track</h2>
      <p>
        Your shortened URLs can be used in publications, documents,
        advertisements, blogs, forums, instant messages, and other locations.
        Track statistics for your business and projects by monitoring the number
        of hits from your URL with the click counter.
      </p>
    </div>
  );
};

export default TheContent;
