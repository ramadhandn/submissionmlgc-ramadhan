const store = new Map();

function getAll() {
    return Array.from(store.values());
}

function save(id, data) {
    store.set(id, data);
}

module.exports = {
    getAll,
    save
};
