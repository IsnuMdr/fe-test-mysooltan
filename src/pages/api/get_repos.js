/* eslint-disable import/no-anonymous-default-export */
const { Octokit } = require("@octokit/rest");

export default async (req, res) => {
  try {
    const {
      query: { user = "IsnuMdr" },
    } = req;

    const octokit = new Octokit({
      auth: process.env.GITHUB_AUTH_TOKEN,
    });

    const followers = await octokit.request(
      `/users/${user}/followers?per_page=100`
    );
    const followerCount = followers.data.length;

    const stars = await octokit.request(`/users/${user}/repos`);
    const starsCount = stars.data
      .filter((repo) => !repo.fork)
      .reduce((acc, item) => {
        return acc + item.stargazers_count;
      }, 0);

    const reposStarred = await octokit.request(`/users/${user}/starred`);
    const starredCount = reposStarred.data.length;

    const repoList = await octokit.request(
      `https://api.github.com/users/${user}/repos`
    );

    return res.status(200).json({
      stars: starsCount,
      followers: followerCount,
      starred: starredCount,
      repos: repoList.data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
