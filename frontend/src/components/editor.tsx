import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";

const extensions = [
	StarterKit.configure({
		bulletList: {
			keepMarks: true,
			keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
		},
		orderedList: {
			keepMarks: true,
			keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
		},
	}),
];

export const Tiptap = (content?: any) => {
	const boardContent = `
<div>${content.content}</div>
`;

	console.log(content.content);

	return (
		<EditorProvider
			extensions={extensions}
			content={content.content ? boardContent : ``}
		>
			{" "}
		</EditorProvider>
	);
};
