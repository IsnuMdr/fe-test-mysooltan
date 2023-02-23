import { useState } from 'react';
import moment from 'moment/moment';
import { AiOutlineStar } from 'react-icons/ai';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import UserNotFound from './UserNotFound';
import { PaginationControl } from 'react-bootstrap-pagination-control';

export default function RepositoryList({ data, isLoading, isSuccess, isError }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(10);
  const [query, setQuery] = useState('');

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;

  const dateNow = moment();

  const filteredData = data
    ?.filter((repository) => repository.name.toLowerCase().includes(query.toLowerCase()))
    ?.slice(indexOfFirstData, indexOfLastData);

  if (isError) {
    return <UserNotFound />;
  }

  if (isLoading) {
    return (
      <SkeletonTheme baseColor="#ededed" highlightColor="#a6a6a6">
        <Skeleton height={30} />
        <Skeleton height={45} count={3} />
      </SkeletonTheme>
    );
  }

  if (isSuccess) {
    return (
      <>
        <div className="row">
          <div className="col-sm-12 col-md-3 mt-2">
            <div className="d-flex gap-2 align-items-center">
              <label>Show</label>
              <select
                className="form-select form-select-sm d-inline-flex"
                value={dataPerPage}
                onChange={(e) => setDataPerPage(e.target.value)}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              entries
            </div>
          </div>
          <div className="col-sm-12 offset-md-4 col-md-5 my-2">
            <div className="d-flex gap-2 align-items-center">
              <input
                type="search"
                className="form-control form-control-sm"
                placeholder="Search repository..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Repository Name</th>
                <th scope="col">Language</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((data) => (
                  <tr key={data.id}>
                    <td className="align-middle">
                      <div>
                        <h3>
                          <a
                            href={data.html_url}
                            target="_blank"
                            className="text-decoration-none"
                            rel="noreferrer">
                            {data.name}
                          </a>
                        </h3>
                        <div>
                          <span>
                            Updated{' '}
                            {moment.duration(-dateNow.diff(moment(data.pushed_at)))._data.months <
                            -1
                              ? 'on ' + moment(data.pushed_at).format('MMM D, YYYY')
                              : moment
                                  .duration(-dateNow.diff(moment(data.pushed_at)))
                                  .humanize(true)}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">
                      <span>{data.language}</span>
                    </td>
                    <td className="align-middle">
                      <a
                        className="btn btn-sm btn-primary px-3"
                        href={data.owner.html_url}
                        target="_blank"
                        rel="noreferrer">
                        <div className="d-flex gap-2 justify-content-center">
                          <div>
                            <AiOutlineStar />
                          </div>
                          <div>Star</div>
                        </div>
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="align-middle text-center" colSpan={3}>
                    This user does not have a repository yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {}
          <PaginationControl
            page={currentPage}
            total={query === '' ? data.length : filteredData.length}
            limit={dataPerPage}
            changePage={(number) => {
              setCurrentPage(number);
            }}
          />
        </div>
      </>
    );
  }
}
