import ForumPost from './ForumPost';
import ForumCategory from './ForumCategory';

export default interface ForumTopic {
    name: string;
    moderators?: Array<any>;
    posts?: Array<ForumPost>;
    parentCategory?: string;
    _id: string;
}