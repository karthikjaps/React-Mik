import React from "react";

import ChangePageButton from "../pagination/changePageButton";
import * as CONSTANTS from "../../containers/catalogue/constants";

const CataloguePagination = ({
  page,
  pageCount,
  url,
  queryString,
  onChangePageClick
}) => {
  if (pageCount > 1) {
    return (
      <div className="pagination">
        <div className="pagination__info">
          Page {page} of {pageCount}
        </div>
        <div className="pagination__buttons">
          <ChangePageButton
            pageNumber={1}
            isDisabled={page === 1}
            url={url}
            queryString={queryString}
            text={"First"}
            onClick={onChangePageClick}
            queryParams={CONSTANTS}
          />
          <ChangePageButton
            pageNumber={page - 1}
            isDisabled={page === 1}
            url={url}
            queryString={queryString}
            text={"Prev"}
            onClick={onChangePageClick}
            queryParams={CONSTANTS}
          />
          <ChangePageButton
            pageNumber={page + 1}
            isDisabled={page === pageCount}
            url={url}
            queryString={queryString}
            text={"Next"}
            onClick={onChangePageClick}
            queryParams={CONSTANTS}
          />
          <ChangePageButton
            pageNumber={pageCount}
            isDisabled={page === pageCount}
            url={url}
            queryString={queryString}
            text={"Last"}
            onClick={onChangePageClick}
            queryParams={CONSTANTS}
          />
        </div>
      </div>
    );
  }
  return null;
};

export default CataloguePagination;
