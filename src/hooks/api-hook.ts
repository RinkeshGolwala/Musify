import { useCallback, useEffect, useState } from "react"
import { FetchState, Song } from "./api-types";

export const useGetSongs = (limit: number = 20) => {
    const [list, setList] = useState<Song[]>([]);
    const [page, setPage] = useState(1);
    const [fetchState, setFetchState] = useState<FetchState>(FetchState.DEFAULT);

    const getSongs = useCallback((page: number) => { 
        setFetchState(FetchState.LOADING);
        fetch(`https://api.discogs.com/artists/1/releases?page=${page}&per_page=${limit}`, {
        headers: {
          "User-Agent": "MusifyApp/1.0"
        },
      })
      .then(res => res.json())
      .then(data => {
        setList([...list, ...data.releases]);
        setFetchState(FetchState.SUCCESS);
      })
      .catch(err => setFetchState(FetchState.ERROR));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [limit]);

    useEffect(() => {
        getSongs(page);
    }, [getSongs, page]);

    const getNextPage = () => {
        setPage(page + 1);
        getSongs(page + 1);
    }

    return [list, getNextPage, fetchState] as [Song[], ()=>void, FetchState];
}