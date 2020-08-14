let comments = {
   js: {start_block: ["/*"], end_block: ["*/"], line: ["//"]},
}

let commands = [
   ":hide-start:",
   ":hide-end:",
   ":replace-with:",
   ":step-start:",
   ":step-end:",
   ":include-code-block:",
   ":code-block-start:",
   ":code-block-end:"
];

exports.comments = comments;
exports.commands = commands;