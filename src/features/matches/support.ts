

export const groupBy = <T>(array: T[], keyExtractor: (element: T) => string): Record<string, T[]> => {
    return array.reduce(function (result: Record<string, T[]>, element: T) {
        const key = keyExtractor(element);
        (result[key] = result[key] || []).push(element);
        return result;
    }, {});
};