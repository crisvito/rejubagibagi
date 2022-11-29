import { useEffect, useState } from "react";
import { tmdbApi } from "../api";

export function ListFetch(cate, type, params = { params: {} }) {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getList = async () => {
      try {
        const items = await tmdbApi.getList(cate, type, {
          params: params,
        });
        setData(items.data.results);
        setIsPending(false);
        setError(null);
      } catch (err) {
        setIsPending(false);
        setError(err.message);
      }
    };
    getList();
  }, []);

  return { data, isPending, error };
}

export function smiliarFetch(cate, id) {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getList = async () => {
      try {
        const items = await tmdbApi.getList(cate, id);
        setData(items.data.results);
        setIsPending(false);
        setError(null);
      } catch (err) {
        setIsPending(false);
        setError(err.message);
      }
    };
    getList();
  }, []);

  return { data, isPending, error };
}
