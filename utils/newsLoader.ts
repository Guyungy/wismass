import { NewsItem } from '../types';

function parseMarkdown(content: string): Partial<NewsItem> & { content: string } {
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = content.match(frontmatterRegex);

    if (!match) {
        return {
            content: content
        };
    }

    const frontmatterBlock = match[1];
    const body = match[2];

    const metadata: any = {};
    frontmatterBlock.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length > 0) {
            let value = valueParts.join(':').trim();
            // Remove quotes if present
            if (value.startsWith('"') && value.endsWith('"')) {
                value = value.slice(1, -1);
            } else if (value.startsWith("'") && value.endsWith("'")) {
                value = value.slice(1, -1);
            }

            const trimmedKey = key.trim();

            if (value === 'true') metadata[trimmedKey] = true;
            else if (value === 'false') metadata[trimmedKey] = false;
            else if (!isNaN(Number(value)) && trimmedKey === 'id') metadata[trimmedKey] = Number(value);
            else if (trimmedKey === 'tags' || trimmedKey === 'keywords') {
                // Handle comma separated string
                metadata[trimmedKey] = value.split(',').map((s: string) => s.trim()).filter((s: string) => s.length > 0);
            }
            else metadata[trimmedKey] = value;
        }
    });

    return {
        ...metadata,
        content: body.trim()
    };
}

export const loadNewsItems = (): NewsItem[] => {
    // Vite specific glob import
    const modules = import.meta.glob('../content/news/*.md', { query: '?raw', import: 'default', eager: true });

    const items: NewsItem[] = Object.entries(modules).map(([path, content]) => {
        const parsed = parseMarkdown(content as string);
        return {
            id: parsed.id || 0,
            title: parsed.title || 'Untitled',
            date: parsed.date || '',
            category: parsed.category || 'Uncategorized',
            img: parsed.img || '',
            summary: parsed.summary || '',
            content: parsed.content || '',
            tags: parsed.tags || [],
            keywords: parsed.keywords || []
        } as NewsItem;
    });

    // Sort by date descending (newest first)
    return items.sort((a, b) => {
        // Handle date format potentially being YYYY.MM.DD
        const dateA = new Date(a.date.replace(/\./g, '-'));
        const dateB = new Date(b.date.replace(/\./g, '-'));
        return dateB.getTime() - dateA.getTime();
    });
};
