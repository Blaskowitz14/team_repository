function isFullSquare(data) {
    data = Number(data);
    data = data ** 0.5;
    if (Number.isInteger(data)) { return (data + 1) * (data + 1); }
    else { return -1; }
};