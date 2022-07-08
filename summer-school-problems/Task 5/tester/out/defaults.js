export const html = {
    "type": "ELEMENT",
    "tag": "parent",
    "styles": {},
    "children": [
        {
            "type": "TEXT",
            "text": "\n    "
        },
        {
            "type": "ELEMENT",
            "tag": "tag",
            "styles": {},
            "children": [
                {
                    "type": "TEXT",
                    "text": "text"
                }
            ]
        },
        {
            "type": "ELEMENT",
            "tag": "tag",
            "styles": {},
            "children": [
                {
                    "type": "TEXT",
                    "text": "text2"
                }
            ]
        },
        {
            "type": "TEXT",
            "text": "\n"
        }
    ]
};
export const css = [
    {
        "selector": "parent",
        "declarations": {
            "color": "rgb(0, 255, 0)",
            "font-size": "15px"
        }
    },
    {
        "selector": "tag",
        "declarations": {
            "color": "rgb(255, 0, 0)"
        }
    },
    {
        "selector": "parent tag",
        "declarations": {
            "font-weight": 'bold'
        }
    },
    {
        "selector": "parent > tag",
        "declarations": {
            "font-style": "italic"
        }
    },
    {
        "selector": "tag ~ tag",
        "declarations": {
            "text-decoration": "underline"
        }
    }
];
