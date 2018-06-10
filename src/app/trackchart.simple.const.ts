import { TrackChart, DisplayType, Node, NodeType } from 'track-chart';

export const SimpleModel = {
    StartNode: true,
    EndNode: true,
    CurrentState: "",
    ChildState: "",
    Nodes: [
        {
            Name: "One",
            Title: "One",
            Type: NodeType.Start,
            Description:"Start Node of the graph",
            Childeren: [
                {
                    Title: "Child",
                    Name: "Child",
                    Type: NodeType.Child,
                    Description:"Child Node of the First Node",
                    Childeren: [],
                    Display: DisplayType.Text,
                    ImageURL: "",
                    DisplayText: "(a)",
                } as Node
            ],
            Display: DisplayType.Text,
            ImageURL: "",
            DisplayText: "1",
        } as Node,
        {
            Name: "End",
            Title: "End",
            Description:"End Node of the graph.",
            Type: NodeType.End,
            Childeren: [],
            Display: DisplayType.Text,
            ImageURL: "",
            DisplayText: "2",
        } as Node
    ] as Node[],
    Title: "#30012313 - Loan Process",
    ShowTitle: true
} as TrackChart;
