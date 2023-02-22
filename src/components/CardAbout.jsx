import Image from "next/image";
import { FaUsers } from "react-icons/fa";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import UserNotFound from "./UserNotFound";

export default function CardAbout({ data, isLoading, isSuccess, isError }) {
  if (isError) {
    return <UserNotFound />;
  }

  if (isLoading) {
    return (
      <div className="row">
        <div className="col-lg-4">
          <SkeletonTheme baseColor="#ededed" highlightColor="#a6a6a6">
            <Skeleton height={200} />
          </SkeletonTheme>
        </div>
        <div className="col-lg-8">
          <SkeletonTheme baseColor="#ededed" highlightColor="#a6a6a6">
            <Skeleton count={3} />
            <Skeleton height={40} className="mt-3" />
            <Skeleton height={20} className="mt-2" />
          </SkeletonTheme>
        </div>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="profile-page">
        <div className="card profile-header">
          <div className="body">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12">
                <div className="profile-image float-md-start">
                  <Image
                    src={data.avatar_url}
                    width={250}
                    height={250}
                    style={{
                      borderRadius: "50%",
                      border: "3px solid #fff",
                      boxShadow:
                        "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
                    }}
                    alt="Avatar"
                  />
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-12">
                <h4 className="m-t-0 m-b-0">{data.name}</h4>
                <span>@{data.login}</span>
                <p>{data.bio || "-"}</p>

                <div className="d-flex gap-3 mb-2 align-items-center">
                  <div className="-mt-2">
                    <FaUsers className="text-primary text-lg-start" />
                  </div>
                  <a
                    href={`https://github.com/${data.login}?tab=followers`}
                    target="_blank"
                    className="text-decoration-none"
                    rel="noreferrer"
                  >
                    {data.followers} Followers
                  </a>
                  <div>.</div>
                  <a
                    href={`https://github.com/${data.login}?tab=following`}
                    target="_blank"
                    className="text-decoration-none"
                    rel="noreferrer"
                  >
                    {data.following} Following
                  </a>
                </div>
                <div>
                  <a
                    href={data.html_url}
                    target="_blank"
                    className="btn btn-primary btn-round"
                    rel="noreferrer"
                  >
                    Follow
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
