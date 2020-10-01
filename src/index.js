module.exports = function towelSort(matrix) {
    if (Array.isArray(matrix) && matrix.length > 0) {
        return matrix.reduce((result, cr, cri) => 
            result.concat(cri % 2 === 0 ? cr : cr.reverse()))
    }
    return [];
}
