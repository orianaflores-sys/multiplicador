import axios from 'axios';
import API_CONFIG from './apiConfig.js';
import gitUtils from './gitUtils.js';

const { BASE_URL } = API_CONFIG;
const { getRepoInfo } = gitUtils;

/**
 * Sends commit data to the backend.
 * @param {object} commitData The commit data to send.
 */
async function sendCommit(commitData) {
  try {
    const { owner, name } = getRepoInfo();

    const payload = {
      ...commitData,
      user_id: owner,    // Use repo owner as user_id for querying
      repo_name: name,   // Use repo name
    };

    console.log('Sending data to /commits endpoint...');
    await axios.post(`${BASE_URL}/commits`, payload);
    console.log('Successfully sent commit data.');
  } catch (error) {
    console.error('Error sending commit data to backend:', error.message);
    // We log the error but don't re-throw, so the local script execution can continue.
  }
}

/**
 * Sends a batch of test run data to the backend.
 * @param {object} batchData The batch data containing commit_sha and an array of runs.
 */
async function sendTestRuns(batchData) {
  try {
    const { owner, name } = getRepoInfo();

    const payload = {
      ...batchData,
      user_id: owner,    // Use repo owner as user_id for querying
      repo_name: name,   // Use repo name
    };

    console.log('Sending test runs batch to /test-runs endpoint...');
    await axios.post(`${BASE_URL}/test-runs`, payload);
    console.log('Successfully sent test runs batch.');
  } catch (error) {
    console.error('Error sending test runs batch to backend:', error.message);
  }
}

const apiClient = {
    sendCommit,
    sendTestRuns,
};


export default apiClient;

