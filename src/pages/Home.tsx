import { useCallback, useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import { useGetSongs } from "../hooks/api-hook";
import { FetchState, Song } from "../hooks/api-types";

import "./Home.scss";

const Home = () => {
  const songListRef = useRef(null);
  const [list, getNextPage, fetchState] = useGetSongs(20);
  const [likedList, setLikedList] = useState<any>({});

//   const handleScroll = () => {
//     if (
//       window.innerHeight + document.documentElement.scrollTop <
//       document.documentElement.offsetHeight - 300 || fetchState === FetchState.LOADING
//     )
//       return;
//     getNextPage();
//   }

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

    const handleLike = (item: Song) => {
        const newList = {...likedList};
        if (newList[item.id]) {
            delete newList[item.id];
            setLikedList(newList)
        } else {
            newList[item.id]=item;
            setLikedList(newList);
        }
    }

  return (
    <div>
      <Header />
      <section className="song-list-container" ref={songListRef}>
      {fetchState === FetchState.LOADING && <div>Loading</div>}
      {fetchState === FetchState.ERROR && <div>Error</div>}
      {fetchState === FetchState.SUCCESS &&
          list && list.map((item) => <Card isLiked={likedList[item.id]} key={item.id} song={item} onLike={() => handleLike(item)} />)
      }
        </section>
    </div>
  );
};

export default Home;
