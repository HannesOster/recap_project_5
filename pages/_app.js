import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import Navigation from "@/components/Navigation/Navigation";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

async function myFetcher(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "artPiecesInfo",
    {
      defaultValue: [],
    }
  );

  function handleFavToggle(favSlug) {
    // step 1: check if artPiecesinfo object is present for slug

    // If no: create a new artPiecesInfo object with isFavorite = true

    // If yes: toggle isFavorite of artPiecesInfo object

    if (!artPiecesInfo.find((piece) => piece.slug === favSlug)) {
      setArtPiecesInfo([
        ...artPiecesInfo,
        { isFavorite: true, slug: favSlug, comments: [] },
      ]);
    } else {
      setArtPiecesInfo(
        artPiecesInfo.map((piece) => {
          if (piece.slug === favSlug) {
            // return new piece object with toggled isFavorite
            return { ...piece, isFavorite: !piece.isFavorite };
          }
          return piece;
        })
      );
    }
  }

  //const [comments, setComments] = useLocalStorageState([]);

  function handleSubmitComment(event, comment, commentSlug) {
    event.preventDefault();
    const newComment = {
      text: comment,
      timestamp: new Date().toLocaleString(),
    };

    console.log(newComment);

    if (!artPiecesInfo.find((piece) => piece.slug === commentSlug)) {
      setArtPiecesInfo([
        ...artPiecesInfo,
        { isFavorite: true, slug: commentSlug, comments: [newComment] },
      ]);
    } else {
      setArtPiecesInfo(
        artPiecesInfo.map((piece) => {
          if (piece.slug === commentSlug) {
            // return new piece object with toggled isFavorite
            return { ...piece, comments: [...piece.comments, newComment] };
          }
          event.target.reset();
          return piece;
        })
      );
    }
  }
  console.log(artPiecesInfo);

  function handleDeleteComment(commentSlug, timestamp) {
    console.log(commentSlug);
    if (!artPiecesInfo) {
      console.log("ArtPiecesInfo ist leer");
    }
    if (!commentSlug) {
      console.log("CommentSlug is undefined");
    }
    setArtPiecesInfo(
      artPiecesInfo.map((piece) => {
        if (piece.slug === commentSlug) {
          return {
            ...piece,
            comments: piece.comments.filter(
              (comment) => comment.timestamp !== timestamp
            ),
          };
        }
        return piece;
      })
    );
  }

  console.log("artPiecesInfo app.js: ", artPiecesInfo); //null

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
          onSubmitComment={handleSubmitComment}
          onDeleteComment={handleDeleteComment}
        />
      </SWRConfig>
      <Navigation />
    </>
  );
}
