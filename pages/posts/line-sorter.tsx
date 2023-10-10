import DefaultLayout from "@/layouts/default";
import STTLayout from "@/layouts/stt";

export default function LineSort() {
	function handleChange(inputText: string): string {
		return inputText.split('\n').sort().join('\n');
	}
	return (
		<DefaultLayout>
			<STTLayout handleChange={handleChange}></STTLayout>
		</DefaultLayout>
	);
}
