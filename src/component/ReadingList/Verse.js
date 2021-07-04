const Verse = (params) =>  {
    const { hasEndVerse, fromVerse, toVerse } = params;

    if (hasEndVerse) {
        return `${fromVerse} - ${toVerse}`;
    }

    return fromVerse;
}

export default Verse;