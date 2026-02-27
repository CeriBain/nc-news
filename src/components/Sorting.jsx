function Sorting({ sortBy, order, setSortBy, setOrder }) {
  return (
    <div className="sort-controls">
      <label htmlFor="sort-by"> Sort by:</label>
      <select
        id="sort-by"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="created-at"> Date </option>
        <option value="comment-count"> Comments </option>
        <option value="votes"> </option>
      </select>
      <label htmlFor="order"> Order </label>
      <select
        id="order"
        value={order}
        onChange={(e) => setOrder(e.target.value)}
      >
        <option value="desc"> Descending </option>
        <option value="asc"> Ascending </option>
      </select>
    </div>
  );
}
export default Sorting;
