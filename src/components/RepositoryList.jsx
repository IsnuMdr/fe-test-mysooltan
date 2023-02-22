import { AiOutlineStar } from "react-icons/ai";

export default function RepositoryList() {
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
          <tr>
            <td className="align-middle">
              <div>
                <h3>
                  <a href="#" className="text-normal">
                    fe-test-mysooltan
                  </a>
                </h3>
                <div>
                  <span>Updated on 17</span>
                </div>
              </div>
            </td>
            <td className="align-middle">
              <span>Javascript</span>
            </td>
            <td className="align-middle">
              <a className="btn btn-sm btn-primary px-3" href="#">
                <div className="d-flex gap-2 justify-content-center">
                  <div>
                    <AiOutlineStar />
                  </div>
                  <div>Star</div>
                </div>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
