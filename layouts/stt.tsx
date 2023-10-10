import { MouseEvent, useState, ChangeEvent } from "react";
import getToolsList, { Tool } from "../models/tool"
import Link from 'next/link';

// this defines the Sidebar-Text-Text layout
export default function STTLayout({ handleChange }: { handleChange: (inputText: string) => string }) {
    const tools: Tool[] = getToolsList();
    const [inputText, setInputText] = useState<string>('');
    const recordText = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setInputText(event.target.value)
    }
    const handleApplyChanges = () => {
        const formattedText = handleChange(inputText);
        setOutputText(formattedText);
    };

    const [outputText, setOutputText] = useState<string>('');
    const clearOutput = (event: MouseEvent<HTMLButtonElement>) => {
        setOutputText('')
    }

    return (
        <div className="flex flex-row h-screen w-full gap-4 py-8 md:py-10">
            <ul className="w-2/12 rounded-lg border-2 h-full overflow-scroll">
                {tools.map((value, index) => {
                    return (
                        <Link href={`/posts/${value.id}`} key={value.id}>
                            <li key={value.id} className="h-min py-1 px-2 hover:bg-blue-300 rounded-lg">{value.name}</li>
                        </Link>
                    );
                })}
            </ul>

            <div key="inputbox" className="flex flex-col h-full w-5/12 ">
                <div className="flex flex-row items-center justify-between">
                    <label className="block mb-2 text-sm font-medium">Your message</label>
                    <button type="button" className="text-white bg-green-500 hover:bg-green-700 font-medium rounded text-sm px-2 py-1.5 mr-2 mb-2 focus:outline-none" onClick={handleApplyChanges}>Process</button>
                </div>
                <textarea key="message" className="flex-1 p-2.5 w-full bg-gray-50 rounded-lg border border-gray-300 resize-none" placeholder="Your Input here" onChange={recordText}></textarea>
            </div>

            <div key="outputbox" className="flex flex-col h-full w-5/12 ">
                <div className="flex flex-row items-center justify-between">
                    <label className="block mb-2 text-sm font-medium">Your message</label>
                    <button type="button" className="text-white bg-red-500 hover:bg-red-700 font-medium rounded text-sm px-2 py-1.5 mr-2 mb-2 focus:outline-none" onClick={clearOutput}>Clear Output</button>
                </div>
                <textarea key="message" className="flex-1 p-2.5 w-full bg-gray-50 rounded-lg border border-gray-300 resize-none" placeholder="Your Output here" defaultValue={outputText}></textarea>
            </div>
        </div>
    );
}
