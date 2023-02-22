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

    const users = await octokit.request(`https://api.github.com/${user}`);
    const repoList = await octokit.request(
      `https://api.github.com/users/${user}/repos`
    );

    return res.status(200).json({
      users: users.data,
      repos: repoList.data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
