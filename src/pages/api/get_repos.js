/* eslint-disable import/no-anonymous-default-export */
const { Octokit } = require('@octokit/rest');

export default async (req, res) => {
  try {
    const {
      query: { username }
    } = req;

    const octokit = new Octokit({
      auth: process.env.GITHUB_AUTH_TOKEN
    });

    const user = await octokit.request(`${process.env.GITHUB_API_URL}users/${username}`);
    const repoList = await octokit.request(`${process.env.GITHUB_API_URL}users/${username}/repos`);

    return res.status(200).json({
      user: user.data,
      repoList: repoList.data?.sort((a, b) => parseInt(b.pushed_at) - parseInt(a.pushed_at))
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
