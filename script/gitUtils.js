import { execSync } from 'child_process';

function getGitUser() {
  try {
    return execSync('git config user.name').toString().trim();
  } catch (error) {
    console.error('Error getting Git user name:', error.message);
    return 'unknown_user';
  }
}

function getRepoInfo() {
  try {
    const remoteUrl = execSync('git remote get-url origin').toString().trim();
    // Extracts 'owner/repo-name' from URLs like:
    // https://github.com/owner/repo-name.git
    // git@github.com:owner/repo-name.git
    const repoInfoMatch = remoteUrl.match(/[:/]([^/]+\/[^/]+)\.git$/);
    if (repoInfoMatch && repoInfoMatch[1]) {
      const [owner, name] = repoInfoMatch[1].split('/');
      return { owner, name };
    }
    return { owner: 'unknown_owner', name: 'unknown_repo' };
  } catch (error) {
    console.error('Error getting Git repository info:', error.message);
    return { owner: 'unknown_owner', name: 'unknown_repo' };
  }
}

const gitUtils = {
    getGitUser,
    getRepoInfo,
};


export default gitUtils;
