import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import Navigation from "@/components/Navigation/Navigation";
import { useState } from "react";

async function myFetcher(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  function handleFavToggle(favSlug) {
    if (!artPiecesInfo.includes(favSlug)) {
      return setArtPiecesInfo([...artPiecesInfo, favSlug]);
    }
    if (artPiecesInfo.includes(favSlug)) {
      return setArtPiecesInfo(artPiecesInfo.filter((slug) => favSlug !== slug));
    }
  }

  return (
    <>
      <GlobalStyle />
      <SWRConfig
        value={{
          fetcher: myFetcher,
        }}
      >
        <Component
          artPiecesInfo={artPiecesInfo}
          onToggle={handleFavToggle}
          {...pageProps}
        />
      </SWRConfig>
      <Navigation />
    </>
  );
}
