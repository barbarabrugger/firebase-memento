const shuffle = () => {
    const assets = [
        { icon: "🍎", name: "apple" },
        { icon: "🍌", name: "banana" },
        { icon: "🍇", name: "grapes" },
        { icon: "🍒", name: "cherries" },
        { icon: "🍑", name: "peach" },
        { icon: "🍓", name: "strawberry" },
        { icon: "🍈", name: "melon" },
        { icon: "🍍", name: "pineapple" },
    ];
    return [...assets, ...assets].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }));
};

export default shuffle;