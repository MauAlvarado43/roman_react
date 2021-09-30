/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { PaginationFooter } from "seed/helpers"

const ProcessList = ({ processes, pageNum = 1, totalPages = 0, onClickPage = () => {} }) =>
  <div>
  <ul class="list-group">
  {
    processes.map((process) =>
      <li key={process.id} class="list-group-item">
        <div class="row align-items-center gx-2">
          
          <div class="col">
            <h5 class="mb-0">
              <a>PROCESS {process.id}</a>
            </h5>
            <ul class="list-inline list-separator small">
              <li class="list-inline-item">
                {process.decimal} : {process.result}
              </li>
            </ul>
          </div>

          <div class="col-auto">
            <Link to={`/${process.id}/characters`} className="btn btn-sm btn-white">
              <span class="d-none d-sm-inline-block mr-1">Caracteres</span>
            </Link>
          </div>
        </div>
      </li>
    )
  }
  </ul>

  <PaginationFooter pageNum={pageNum} totalPages={totalPages} onClickPage={onClickPage} />

  </div>;

ProcessList.propTypes = {
  processes: PropTypes.array.isRequired,
  pageNum: PropTypes.number,
  totalPages: PropTypes.number,
  onClickPage: PropTypes.func
};

export default ProcessList;