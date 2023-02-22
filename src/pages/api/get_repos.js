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

    const userData = await octokit.request(
      `https://api.github.com/users/${user}`
    );
    const repoList = await octokit.request(
      `https://api.github.com/users/${user}/repos`
    );

    return res.status(200).json({
      userData: userData.data,
      repoList: repoList.data,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
