import moment from "moment/moment";
import { AiOutlineStar } from "react-icons/ai";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import UserNotFound from "./UserNotFound";

export default function RepositoryList({
  data,
  isLoading,
  isSuccess,
  isError,
}) {
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
            {data.length > 0 ? (
              data.map((datum) => (
                <tr key={datum.id}>
                  <td className="align-middle">
                    <div>
                      <h3>
                        <a
                          href={datum.html_url}
                          target="_blank"
                          className="text-decoration-none"
                          rel="noreferrer"
                        >
                          {datum.name}
                        </a>
                      </h3>
                      <div>
                        <span>{moment(moment(datum.pushed_at)).fromNow()}</span>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle">
                    <span>{datum.language}</span>
                  </td>
                  <td className="align-middle">
                    <a
                      className="btn btn-sm btn-primary px-3"
                      href={datum.owner.html_url}
                      target="_blank"
                      rel="noreferrer"
                    >
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
                <td className="align-middle">
                  This user does not have a repository yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
