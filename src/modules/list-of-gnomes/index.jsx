import React, { useCallback, useMemo } from 'react';
import Layout from '../../components/layout';
import PagePreview from '../../components/page-preview';
import ListItem from './list-item';
import { useData, useQueryState } from "../../utils/hooks";
import { filter } from "./utils";
import './styles.css';

const gnomesPerPageCount = 20;
const step = 10;

const ListOfGnomes = () => {
  const { data } = useData();
  const [offset, setOffset] = useQueryState('offset', gnomesPerPageCount);
  const [search, setSearch] = useQueryState('search');

  const [gnomesToDisplay, matchCount] = useMemo(() => {
    if (!data) return [];

    const allGnomes = Object.values(data);
    const searchResult = filter(allGnomes, search);

    return [searchResult.slice(0, offset), searchResult.length];
  }, [data, offset, search])

  const onShowMoreGnomes = useCallback(() => {
    setOffset(Number(offset) + step)
  }, [offset, step])

  const onSearchInputChange = useCallback((e) => {
    setSearch(e.target.value);
    setOffset(gnomesPerPageCount);
  }, [setSearch]);

  return data ? (
    <Layout
      actions={(
        <input
          className="search"
          type="text"
          placeholder="Search by name, age, hair color, gender or profession"
          value={search}
          onChange={onSearchInputChange}
        />
      )}
    >
      <div className="list">
        {gnomesToDisplay.length ? gnomesToDisplay.map(gnome => (
          <ListItem key={gnome.id} {...gnome} />
        )) : <h3>No result by the search</h3>}
      </div>

      {matchCount > gnomesPerPageCount ? (
        <footer className="footer">
          <button className="show-more" type="button" onClick={onShowMoreGnomes}>
            show more
          </button>
        </footer>
      ) : null}
    </Layout>
  ) : <PagePreview />;
};

export default ListOfGnomes;
