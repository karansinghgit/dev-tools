import DefaultLayout from "@/layouts/default";
import STTLayout from "@/layouts/stt";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { MouseEventHandler, MouseEvent, useState, ChangeEvent, ChangeEventHandler } from "react";

export default function LineDeduper() {
	const handleChange = (inputText: string) => {
		const lines = inputText.split('\n');
		const uniqueLines = new Set<string>();

		for (const line of lines) {
			uniqueLines.add(line);
		}
		return Array.from(uniqueLines).join('\n');
	}

	return (
		<DefaultLayout>
			<STTLayout handleChange={handleChange}></STTLayout>
		</DefaultLayout>
	);
}
