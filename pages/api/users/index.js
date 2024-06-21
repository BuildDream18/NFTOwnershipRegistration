import { apiHandler, nftsRepo, omit } from 'helpers/api';

export default apiHandler({
    post: getUsers,
    get: getIpMatch,
});

function getUsers(req, res) {
    // return users without hashed passwords in the response
    const response = nftsRepo.getAll().map(x => omit(x, 'hash'));
    return res.status(200).json(response);
}

function getIpMatch(req, res) {
    // return users without hashed passwords in the response
    const response = nftsRepo.getAll().map(x => omit(x, 'hash'));
    return res.status(200).json(response);
}
