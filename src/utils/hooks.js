import { useCallback, useEffect, useState } from 'react';
import { useParams, useLocation, useHistory } from "react-router-dom";
import { updateQueryStringParameter } from './url';
import api from './api';

let cachedData = null;

export const useData = () => {
  const [data, setData] = useState(cachedData);
  const { id } = useParams();

  useEffect(() => {
    async function loadAndSaveData() {
      const gnomes = await api.getGnomes();

      cachedData = gnomes;
      setData(gnomes);
    }

    if (!data) loadAndSaveData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return data ? {
    data: id ? data.gnomeById[id] : data.gnomeById,
    gnomeIdByName: data.gnomeIdByName,
  } : { data: null, gnomeIdByName: null };
}

export const useQueryState = (keyName, initValue) => {
  const history = useHistory();

  const queryParams = new URLSearchParams(history.location.search);
  const initQueryValue = queryParams.get(keyName);

  const [value, setValue] = useState(initQueryValue || initValue);

  const onValueChange = useCallback((newValue) => {
    const { search, pathname } = history.location;

    const newQuery = updateQueryStringParameter(`${pathname}${search}`, keyName, newValue);

    setValue(newValue);
    history.push(newQuery);
  }, [keyName, history]);

  return [value, onValueChange]
}
