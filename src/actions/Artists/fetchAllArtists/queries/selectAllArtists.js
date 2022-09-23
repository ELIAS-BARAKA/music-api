const { submitQuery, camelKeys, getFirst } = require("~root/lib/database");

const selectAllArtists = () => submitQuery`
    SELECT * FROM Artist;
`;

module.exports = camelKeys(selectAllArtists);
