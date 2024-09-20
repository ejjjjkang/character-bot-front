import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useState, useEffect } from "react";

export const Tiptap = (content?: any) => {
	const [board, setBoard] = useState<String>("");

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

	const editor = useEditor({
		extensions,
		content: board,
	});

	useEffect(() => {
		if (content.content !== undefined) {
			editor?.commands.setContent(`<div>${JSON.parse(content.content)}</div>`);
		}
	}, [editor, content]);

	return (
		<>
			{" "}
			<EditorContent editor={editor} />
		</>
	);
};
