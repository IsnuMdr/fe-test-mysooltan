/* eslint-disable import/no-anonymous-default-export */
const { Octokit } = require("@octokit/rest");

export default async (req, res) => {
  try {
    const {
      query: { username },
    } = req;

    const octokit = new Octokit({
      auth: process.env.GITHUB_AUTH_TOKEN,
    });

    const user = await octokit.request(
      `https://api.github.com/users/${username}`
    );
    const repoList = await octokit.request(
      `https://api.github.com/users/${username}/repos`
    );

    return res.status(200).json({
      user: user.data,
      repoList: repoList.data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
