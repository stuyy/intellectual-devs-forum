import ForumPost from './ForumPost';

export default interface ForumTopic {
    name: string;
    moderators?: Array<any>;
    posts?: Array<ForumPost>;
}