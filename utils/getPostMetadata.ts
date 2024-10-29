import fs from 'fs';
import matter from 'gray-matter';

export default function getPostMetadata(basePath: string) {
    const folder = basePath + '/';
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter(file => file.endsWith('.md'));

    // get the file data
    const posts = markdownPosts.map((filename)=> {
        const fileContents = fs.readFileSync(`${basePath}/${filename}`, 'utf8');
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            reading_time: matterResult.data.reading_time,
            word_count: matterResult.data.word_count,
            bio: matterResult.data.description,
            slug: filename.replace('.md', '')
        }
    })

    return posts;

}