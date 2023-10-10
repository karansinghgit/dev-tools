export interface Tool {
    id: string;
    name: string;
}

export const Tools: Tool[] = [
    {
        id: "line-sorter",
        name: "Line Sorter",
    },
    {
        id: "line-deduper",
        name: "Line Deduper",
    },
];

export default function getToolsList() {
    return Tools
}