import type { RichTextContent } from 'contentful';

export type Pub = {
	title: string;
	year?: number;
	link?: string;
	journal: string;
	authors: string;
	paperTitle: string;
	topic?: string;
};

export type Measure = {
	measureName: string;
	citation: string;
	description: RichTextContent;
	link?: string;
};
