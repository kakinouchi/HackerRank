function matchingStrings(stringList, queries) {
    return queries.map( query => stringList.reduce((acc, current) => {
        return query == current ? acc + 1 : acc
    },0))
}
