import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
  Upload: any;
};

export type Comment = {
  __typename?: 'Comment';
  /** Activity of the comment. */
  activity: CommentActivity;
  /** Text content  of the user. */
  content?: Maybe<Scalars['String']>;
  /** Creation date of comment */
  createdAt: Scalars['DateTime'];
  /** Id of  the post. */
  id: Scalars['ID'];
  isLiked: Scalars['Boolean'];
  /** Updation date of comment */
  updatedAt: Scalars['DateTime'];
  /**  User of the post who owns the post. */
  user: ShortUser;
};

export type CommentActivity = {
  __typename?: 'CommentActivity';
  likesCount: Scalars['Float'];
  repliesCount: Scalars['Float'];
};

export type CreateCommentInput = {
  /** Text content  of the post. */
  content: Scalars['String'];
  /** id of the parent */
  parentId: Scalars['String'];
  /** id of the parent */
  parentType: ParentType;
};

export type CreateFriendRequestInput = {
  /**  A user who receives a friend request.  */
  toUserId: Scalars['String'];
};

export type CreatePostInput = {
  /** Text content  of the user. */
  content: Scalars['String'];
  /** Array of images and media in post of the user. */
  media: Array<Scalars['Upload']>;
};

export type CreateUserInput = {
  /** Email id of the user. */
  email?: InputMaybe<Scalars['String']>;
  /** Phone of the user. */
  phone?: InputMaybe<Scalars['String']>;
  /** A unique username assigned to the user. */
  username: Scalars['String'];
};

export type Friend = {
  __typename?: 'Friend';
  /**  Friend of user */
  friend: ShortUser;
  /** Id of the Friend */
  id: Scalars['ID'];
  /** User who has friends */
  user: Scalars['String'];
};

export type FriendRequest = {
  __typename?: 'FriendRequest';
  /** Creation date of friend request */
  createdAt: Scalars['DateTime'];
  /** A user who sent a friend request */
  fromUser: User;
  /** Id of the Friend Request */
  id: Scalars['ID'];
  /** A user who received a friend request */
  toUser: Scalars['String'];
  /** Updation date of friend request */
  updatedAt: Scalars['DateTime'];
};

export type FriendRequestNotification = {
  __typename?: 'FriendRequestNotification';
  /** Creation date of notification */
  createdAt: Scalars['DateTime'];
  /**  id  of the friend Request. */
  friendRequest: Scalars['String'];
  /**  name of the user who sent the friend Request. */
  fromName: Scalars['String'];
  /**  profileimage  of the user who sent the friend Request. */
  fromProfileImage?: Maybe<FromProfileImage>;
  /**  id  of the user who sent the friend Request. */
  fromUser: Scalars['String'];
  /**  username  of the user who sent the friend Request. */
  fromUsername: Scalars['String'];
  /** boolean value for user has seen or has not seen the friend request. */
  hasSeen: Scalars['Boolean'];
  id: Scalars['ID'];
  /** Updation date of notification */
  updatedAt: Scalars['DateTime'];
};

export type FromProfileImage = {
  __typename?: 'FromProfileImage';
  hash: Scalars['String'];
  url: Scalars['String'];
};

export type GeneralNotification = {
  __typename?: 'GeneralNotification';
  /** Creation date of notification */
  createdAt: Scalars['DateTime'];
  /** boolean value for user has seen. */
  hasSeen: Scalars['Boolean'];
  id: Scalars['ID'];
  /** image  of the user. */
  media?: Maybe<Media>;
  /**  message of the notifications. */
  message: Scalars['String'];
  /** Updation date of notification */
  updatedAt: Scalars['DateTime'];
  /**  url for  the notifications. */
  url?: Maybe<Scalars['String']>;
  /**  user responsible for the  notifications. */
  user: Scalars['String'];
};

export type Media = {
  __typename?: 'Media';
  hash: Scalars['String'];
  mimetype: Scalars['String'];
  url: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptFriendRequest: FriendRequest;
  activateUser: Scalars['String'];
  createComment: Comment;
  createFriendRequest: FriendRequest;
  createPost: Post;
  createUser: User;
  deactivateUser: Scalars['String'];
  likeComment: Comment;
  likePost: Scalars['String'];
  rejectFriendRequest: FriendRequest;
  removeComment: Comment;
  removeCoverImage: User;
  removeFriend: Array<Friend>;
  removeFriendRequst: FriendRequest;
  removePost: Post;
  removeProfileImage: User;
  removeUser: User;
  sharePost: Post;
  unLikeComment: Comment;
  unLikePost: Scalars['String'];
  updateUser: User;
};


export type MutationAcceptFriendRequestArgs = {
  id: Scalars['String'];
};


export type MutationCreateCommentArgs = {
  createCommentInput: CreateCommentInput;
};


export type MutationCreateFriendRequestArgs = {
  createFriendRequestInput: CreateFriendRequestInput;
};


export type MutationCreatePostArgs = {
  createPostInput: CreatePostInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationLikeCommentArgs = {
  id: Scalars['String'];
};


export type MutationLikePostArgs = {
  postId: Scalars['String'];
};


export type MutationRejectFriendRequestArgs = {
  id: Scalars['String'];
};


export type MutationRemoveCommentArgs = {
  id: Scalars['String'];
};


export type MutationRemoveFriendArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveFriendRequstArgs = {
  id: Scalars['String'];
};


export type MutationRemovePostArgs = {
  id: Scalars['String'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['ID'];
};


export type MutationSharePostArgs = {
  postId: Scalars['String'];
};


export type MutationUnLikeCommentArgs = {
  id: Scalars['String'];
};


export type MutationUnLikePostArgs = {
  postId: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Notification = {
  __typename?: 'Notification';
  friendRequests: Array<FriendRequestNotification>;
  general: Array<GeneralNotification>;
};

export type NotificationSub = {
  __typename?: 'NotificationSub';
  friendRequest?: Maybe<FriendRequestNotification>;
  general?: Maybe<GeneralNotification>;
};

/** Post or Comment */
export enum ParentType {
  Comment = 'COMMENT',
  Post = 'POST'
}

export type Post = {
  __typename?: 'Post';
  /** Activity of the post. */
  activity: PostActivity;
  /** Author of the post who originally created the post. */
  author: ShortUser;
  /** Text content  of the user. */
  content?: Maybe<Scalars['String']>;
  /** Creation date of post */
  createdAt: Scalars['DateTime'];
  /** Id of  the post. */
  id: Scalars['ID'];
  /** Whether the post is liked by the user. */
  isLiked: Scalars['Boolean'];
  /** Array of images and media in post of the user. */
  media: Array<Media>;
  /** Recent comments of the post. */
  recentComments: Array<Comment>;
  /** Updation date of post */
  updatedAt: Scalars['DateTime'];
  /**  User of the post who owns the post. */
  user: ShortUser;
};

export type PostActivity = {
  __typename?: 'PostActivity';
  commentsCount: Scalars['Float'];
  likesCount: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  checkUserName: Scalars['Boolean'];
  findAllComments: Array<Comment>;
  friendExists: Scalars['Boolean'];
  friendRequest?: Maybe<FriendRequest>;
  friendRequestById: FriendRequest;
  friendRequestSent?: Maybe<FriendRequest>;
  friendRequests: Array<FriendRequest>;
  friends: Array<Friend>;
  friendsByUsername: Array<Friend>;
  getHello: Scalars['String'];
  notifications: Notification;
  post: Post;
  posts: Array<Post>;
  postsByUser: Array<Post>;
  postsByUsername: Array<Post>;
  searchUsers: Array<User>;
  user: User;
  userById: User;
  users: Array<User>;
};


export type QueryCheckUserNameArgs = {
  username: Scalars['String'];
};


export type QueryFindAllCommentsArgs = {
  parentId: Scalars['String'];
};


export type QueryFriendExistsArgs = {
  id: Scalars['ID'];
};


export type QueryFriendRequestArgs = {
  userId: Scalars['String'];
};


export type QueryFriendRequestByIdArgs = {
  id: Scalars['String'];
};


export type QueryFriendRequestSentArgs = {
  userId: Scalars['String'];
};


export type QueryFriendsByUsernameArgs = {
  username: Scalars['String'];
};


export type QueryPostArgs = {
  id: Scalars['String'];
};


export type QueryPostsByUsernameArgs = {
  username: Scalars['String'];
};


export type QuerySearchUsersArgs = {
  query: Scalars['String'];
};


export type QueryUserArgs = {
  username: Scalars['String'];
};


export type QueryUserByIdArgs = {
  id: Scalars['ID'];
};

export type ShortUser = {
  __typename?: 'ShortUser';
  /** Name of the user. */
  name: Scalars['String'];
  /** Profile image of the user. */
  profileImage?: Maybe<Media>;
  /** Username of the user. */
  username: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  watchNotifications: NotificationSub;
};

export type UpdateUserInput = {
  /** Bio of the user. */
  bio?: InputMaybe<Scalars['String']>;
  /** Country name of the user. */
  country?: InputMaybe<Scalars['String']>;
  /** Cover image of the user. */
  coverImage?: InputMaybe<Scalars['Upload']>;
  /** Age of the user. */
  dob?: InputMaybe<Scalars['DateTime']>;
  /** First name of the user. */
  firstName?: InputMaybe<Scalars['String']>;
  /** Gender of the user. */
  gender?: InputMaybe<Scalars['String']>;
  /** Last name of the user. */
  lastName?: InputMaybe<Scalars['String']>;
  /** Profile image of the user. */
  profileImage?: InputMaybe<Scalars['Upload']>;
};

export type User = {
  __typename?: 'User';
  /** Bio of the user. */
  bio?: Maybe<Scalars['String']>;
  /** Country name of the user. */
  country?: Maybe<Scalars['String']>;
  /** Cover image of the user. */
  coverImage?: Maybe<Media>;
  /** DOB of the user. */
  dob?: Maybe<Scalars['DateTime']>;
  /** Email id of the user. */
  email: Scalars['String'];
  /** First name of the user. */
  firstName?: Maybe<Scalars['String']>;
  /** Gender of the user. */
  gender?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Last name of the user. */
  lastName?: Maybe<Scalars['String']>;
  /** Full name of the user. */
  name?: Maybe<Scalars['String']>;
  /** Phone number of the user. */
  phone?: Maybe<Scalars['String']>;
  /** Profile image of the user. */
  profileImage?: Maybe<Media>;
  /** A unique username assigned to the user. */
  username: Scalars['String'];
};

export type CommentsQueryVariables = Exact<{
  parentId: Scalars['String'];
}>;


export type CommentsQuery = { __typename?: 'Query', findAllComments: Array<{ __typename?: 'Comment', id: string, content?: string | null, createdAt: string, updatedAt: string, isLiked: boolean, user: { __typename?: 'ShortUser', name: string, username: string, profileImage?: { __typename?: 'Media', url: string, hash: string } | null }, activity: { __typename?: 'CommentActivity', likesCount: number, repliesCount: number } }> };

export type CreateCommentMutationVariables = Exact<{
  content: Scalars['String'];
  parentId: Scalars['String'];
  parentType: ParentType;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment: { __typename?: 'Comment', id: string, content?: string | null, createdAt: string, updatedAt: string, isLiked: boolean, user: { __typename?: 'ShortUser', name: string, username: string, profileImage?: { __typename?: 'Media', url: string, hash: string } | null }, activity: { __typename?: 'CommentActivity', likesCount: number, repliesCount: number } } };

export type LikeCommentMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type LikeCommentMutation = { __typename?: 'Mutation', likeComment: { __typename?: 'Comment', id: string } };

export type RemoveCommentMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemoveCommentMutation = { __typename?: 'Mutation', removeComment: { __typename?: 'Comment', id: string } };

export type UnLikeCommentMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type UnLikeCommentMutation = { __typename?: 'Mutation', unLikeComment: { __typename?: 'Comment', id: string } };

export type NotificationsQueryVariables = Exact<{ [key: string]: never; }>;


export type NotificationsQuery = { __typename?: 'Query', notifications: { __typename?: 'Notification', friendRequests: Array<{ __typename?: 'FriendRequestNotification', friendRequest: string, fromName: string, fromUser: string, fromUsername: string, hasSeen: boolean, id: string, createdAt: string, updatedAt: string, fromProfileImage?: { __typename?: 'FromProfileImage', hash: string, url: string } | null }>, general: Array<{ __typename?: 'GeneralNotification', id: string, message: string, url?: string | null, createdAt: string, updatedAt: string, media?: { __typename?: 'Media', hash: string, url: string } | null }> } };

export type WatchNotificationsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type WatchNotificationsSubscription = { __typename?: 'Subscription', watchNotifications: { __typename?: 'NotificationSub', friendRequest?: { __typename?: 'FriendRequestNotification', friendRequest: string, fromName: string, fromUser: string, fromUsername: string, hasSeen: boolean, id: string, createdAt: string, updatedAt: string, fromProfileImage?: { __typename?: 'FromProfileImage', hash: string, url: string } | null } | null, general?: { __typename?: 'GeneralNotification', id: string, message: string, url?: string | null, createdAt: string, updatedAt: string, media?: { __typename?: 'Media', hash: string, url: string } | null } | null } };

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: string, content?: string | null, isLiked: boolean, createdAt: string, updatedAt: string, media: Array<{ __typename?: 'Media', url: string, mimetype: string, hash: string }>, author: { __typename?: 'ShortUser', name: string, username: string, profileImage?: { __typename?: 'Media', url: string, hash: string } | null }, activity: { __typename?: 'PostActivity', likesCount: number, commentsCount: number }, recentComments: Array<{ __typename?: 'Comment', content?: string | null, user: { __typename?: 'ShortUser', username: string, profileImage?: { __typename?: 'Media', hash: string, url: string, mimetype: string } | null } }> }> };

export type CreatePostMutationVariables = Exact<{
  content: Scalars['String'];
  media: Array<Scalars['Upload']> | Scalars['Upload'];
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', id: string } };

export type RemovePostMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemovePostMutation = { __typename?: 'Mutation', removePost: { __typename?: 'Post', id: string } };

export type LikePostMutationVariables = Exact<{
  postId: Scalars['String'];
}>;


export type LikePostMutation = { __typename?: 'Mutation', likePost: string };

export type UnLikePostMutationVariables = Exact<{
  postId: Scalars['String'];
}>;


export type UnLikePostMutation = { __typename?: 'Mutation', unLikePost: string };

export type ProfileQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type ProfileQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, name?: string | null, firstName?: string | null, lastName?: string | null, username: string, bio?: string | null, profileImage?: { __typename?: 'Media', url: string, hash: string, mimetype: string } | null, coverImage?: { __typename?: 'Media', url: string, hash: string, mimetype: string } | null }, friendsByUsername: Array<{ __typename?: 'Friend', id: string, friend: { __typename?: 'ShortUser', name: string, username: string, profileImage?: { __typename?: 'Media', hash: string, url: string, mimetype: string } | null } }>, postsByUsername: Array<{ __typename?: 'Post', id: string, content?: string | null, isLiked: boolean, createdAt: string, updatedAt: string, media: Array<{ __typename?: 'Media', url: string, mimetype: string, hash: string }>, author: { __typename?: 'ShortUser', name: string, username: string, profileImage?: { __typename?: 'Media', url: string, hash: string, mimetype: string } | null }, activity: { __typename?: 'PostActivity', likesCount: number, commentsCount: number }, recentComments: Array<{ __typename?: 'Comment', content?: string | null, user: { __typename?: 'ShortUser', username: string, profileImage?: { __typename?: 'Media', hash: string, url: string, mimetype: string } | null } }> }> };

export type FriendsByUsernameQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type FriendsByUsernameQuery = { __typename?: 'Query', friendsByUsername: Array<{ __typename?: 'Friend', id: string, friend: { __typename?: 'ShortUser', name: string, username: string, profileImage?: { __typename?: 'Media', hash: string, url: string, mimetype: string } | null } }> };

export type FriendRequestsQueryVariables = Exact<{ [key: string]: never; }>;


export type FriendRequestsQuery = { __typename?: 'Query', friendRequests: Array<{ __typename?: 'FriendRequest', id: string, toUser: string, createdAt: string, fromUser: { __typename?: 'User', id: string, username: string, firstName?: string | null, lastName?: string | null, profileImage?: { __typename?: 'Media', url: string, hash: string, mimetype: string } | null } }> };

export type FriendExistsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FriendExistsQuery = { __typename?: 'Query', friendExists: boolean };

export type FriendRequestQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type FriendRequestQuery = { __typename?: 'Query', friendRequestSent?: { __typename?: 'FriendRequest', id: string, toUser: string, fromUser: { __typename?: 'User', id: string } } | null, friendRequest?: { __typename?: 'FriendRequest', id: string, toUser: string, fromUser: { __typename?: 'User', id: string } } | null };

export type FriendsQueryVariables = Exact<{ [key: string]: never; }>;


export type FriendsQuery = { __typename?: 'Query', friends: Array<{ __typename?: 'Friend', id: string, friend: { __typename?: 'ShortUser', name: string, username: string, profileImage?: { __typename?: 'Media', hash: string, url: string, mimetype: string } | null } }> };

export type CreateFriendRequestMutationVariables = Exact<{
  userId: Scalars['String'];
}>;


export type CreateFriendRequestMutation = { __typename?: 'Mutation', createFriendRequest: { __typename?: 'FriendRequest', id: string, toUser: string, fromUser: { __typename?: 'User', id: string } } };

export type AcceptFriendRequestMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type AcceptFriendRequestMutation = { __typename?: 'Mutation', acceptFriendRequest: { __typename?: 'FriendRequest', id: string, toUser: string, fromUser: { __typename?: 'User', id: string, username: string } } };

export type RejectFriendRequestMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RejectFriendRequestMutation = { __typename?: 'Mutation', rejectFriendRequest: { __typename?: 'FriendRequest', id: string, toUser: string, fromUser: { __typename?: 'User', id: string, username: string } } };

export type RemoveFriendRequestMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemoveFriendRequestMutation = { __typename?: 'Mutation', removeFriendRequst: { __typename?: 'FriendRequest', id: string, toUser: string, fromUser: { __typename?: 'User', id: string, username: string } } };

export type UserQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, username: string, email: string, name?: string | null, firstName?: string | null, lastName?: string | null, gender?: string | null, dob?: string | null, bio?: string | null, profileImage?: { __typename?: 'Media', url: string, hash: string } | null, coverImage?: { __typename?: 'Media', url: string, hash: string } | null } };

export type UpdateUserMutationVariables = Exact<{
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  dob?: InputMaybe<Scalars['DateTime']>;
  profileImage?: InputMaybe<Scalars['Upload']>;
  coverImage?: InputMaybe<Scalars['Upload']>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, username: string, email: string, name?: string | null, firstName?: string | null, lastName?: string | null, gender?: string | null, dob?: string | null, bio?: string | null, profileImage?: { __typename?: 'Media', url: string, hash: string } | null, coverImage?: { __typename?: 'Media', url: string, hash: string } | null } };

export type DeactivateUserMutationVariables = Exact<{ [key: string]: never; }>;


export type DeactivateUserMutation = { __typename?: 'Mutation', deactivateUser: string };

export type SearchUsersQueryVariables = Exact<{
  query: Scalars['String'];
}>;


export type SearchUsersQuery = { __typename?: 'Query', searchUsers: Array<{ __typename?: 'User', name?: string | null, email: string, username: string, profileImage?: { __typename?: 'Media', url: string, hash: string, mimetype: string } | null }> };

export type RemoveProfileImageMutationVariables = Exact<{ [key: string]: never; }>;


export type RemoveProfileImageMutation = { __typename?: 'Mutation', removeProfileImage: { __typename?: 'User', id: string } };

export type RemoveCoverImageMutationVariables = Exact<{ [key: string]: never; }>;


export type RemoveCoverImageMutation = { __typename?: 'Mutation', removeCoverImage: { __typename?: 'User', id: string } };


export const CommentsDocument = gql`
    query comments($parentId: String!) {
  findAllComments(parentId: $parentId) {
    id
    content
    user {
      name
      username
      profileImage {
        url
        hash
      }
    }
    activity {
      likesCount
      repliesCount
    }
    createdAt
    updatedAt
    isLiked
  }
}
    `;

export function useCommentsQuery(options: Omit<Urql.UseQueryArgs<CommentsQueryVariables>, 'query'>) {
  return Urql.useQuery<CommentsQuery>({ query: CommentsDocument, ...options });
};
export const CreateCommentDocument = gql`
    mutation createComment($content: String!, $parentId: String!, $parentType: ParentType!) {
  createComment(
    createCommentInput: {content: $content, parentId: $parentId, parentType: $parentType}
  ) {
    id
    content
    user {
      name
      username
      profileImage {
        url
        hash
      }
    }
    activity {
      likesCount
      repliesCount
    }
    createdAt
    updatedAt
    isLiked
  }
}
    `;

export function useCreateCommentMutation() {
  return Urql.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument);
};
export const LikeCommentDocument = gql`
    mutation likeComment($id: String!) {
  likeComment(id: $id) {
    id
  }
}
    `;

export function useLikeCommentMutation() {
  return Urql.useMutation<LikeCommentMutation, LikeCommentMutationVariables>(LikeCommentDocument);
};
export const RemoveCommentDocument = gql`
    mutation removeComment($id: String!) {
  removeComment(id: $id) {
    id
  }
}
    `;

export function useRemoveCommentMutation() {
  return Urql.useMutation<RemoveCommentMutation, RemoveCommentMutationVariables>(RemoveCommentDocument);
};
export const UnLikeCommentDocument = gql`
    mutation unLikeComment($id: String!) {
  unLikeComment(id: $id) {
    id
  }
}
    `;

export function useUnLikeCommentMutation() {
  return Urql.useMutation<UnLikeCommentMutation, UnLikeCommentMutationVariables>(UnLikeCommentDocument);
};
export const NotificationsDocument = gql`
    query notifications {
  notifications {
    friendRequests {
      friendRequest
      fromName
      fromProfileImage {
        hash
        url
      }
      fromUser
      fromUsername
      hasSeen
      id
      createdAt
      updatedAt
    }
    general {
      id
      media {
        hash
        url
      }
      message
      url
      createdAt
      updatedAt
    }
  }
}
    `;

export function useNotificationsQuery(options?: Omit<Urql.UseQueryArgs<NotificationsQueryVariables>, 'query'>) {
  return Urql.useQuery<NotificationsQuery>({ query: NotificationsDocument, ...options });
};
export const WatchNotificationsDocument = gql`
    subscription watchNotifications {
  watchNotifications {
    friendRequest {
      friendRequest
      fromName
      fromProfileImage {
        hash
        url
      }
      fromUser
      fromUsername
      hasSeen
      id
      createdAt
      updatedAt
    }
    general {
      id
      media {
        hash
        url
      }
      message
      url
      createdAt
      updatedAt
    }
  }
}
    `;

export function useWatchNotificationsSubscription<TData = WatchNotificationsSubscription>(options: Omit<Urql.UseSubscriptionArgs<WatchNotificationsSubscriptionVariables>, 'query'> = {}, handler?: Urql.SubscriptionHandler<WatchNotificationsSubscription, TData>) {
  return Urql.useSubscription<WatchNotificationsSubscription, TData, WatchNotificationsSubscriptionVariables>({ query: WatchNotificationsDocument, ...options }, handler);
};
export const PostsDocument = gql`
    query posts {
  posts {
    id
    content
    media {
      url
      mimetype
      hash
    }
    author {
      name
      profileImage {
        url
        hash
      }
      username
    }
    isLiked
    activity {
      likesCount
      commentsCount
    }
    recentComments {
      user {
        username
        profileImage {
          hash
          url
          mimetype
        }
      }
      content
    }
    createdAt
    updatedAt
  }
}
    `;

export function usePostsQuery(options?: Omit<Urql.UseQueryArgs<PostsQueryVariables>, 'query'>) {
  return Urql.useQuery<PostsQuery>({ query: PostsDocument, ...options });
};
export const CreatePostDocument = gql`
    mutation createPost($content: String!, $media: [Upload!]!) {
  createPost(createPostInput: {content: $content, media: $media}) {
    id
  }
}
    `;

export function useCreatePostMutation() {
  return Urql.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument);
};
export const RemovePostDocument = gql`
    mutation removePost($id: String!) {
  removePost(id: $id) {
    id
  }
}
    `;

export function useRemovePostMutation() {
  return Urql.useMutation<RemovePostMutation, RemovePostMutationVariables>(RemovePostDocument);
};
export const LikePostDocument = gql`
    mutation likePost($postId: String!) {
  likePost(postId: $postId)
}
    `;

export function useLikePostMutation() {
  return Urql.useMutation<LikePostMutation, LikePostMutationVariables>(LikePostDocument);
};
export const UnLikePostDocument = gql`
    mutation unLikePost($postId: String!) {
  unLikePost(postId: $postId)
}
    `;

export function useUnLikePostMutation() {
  return Urql.useMutation<UnLikePostMutation, UnLikePostMutationVariables>(UnLikePostDocument);
};
export const ProfileDocument = gql`
    query profile($username: String!) {
  user(username: $username) {
    id
    name
    firstName
    lastName
    username
    bio
    profileImage {
      url
      hash
      mimetype
    }
    coverImage {
      url
      hash
      mimetype
    }
  }
  friendsByUsername(username: $username) {
    id
    friend {
      name
      username
      profileImage {
        hash
        url
        mimetype
      }
    }
  }
  postsByUsername(username: $username) {
    id
    content
    media {
      url
      mimetype
      hash
    }
    author {
      name
      profileImage {
        url
        hash
        mimetype
      }
      username
    }
    isLiked
    activity {
      likesCount
      commentsCount
    }
    recentComments {
      user {
        username
        profileImage {
          hash
          url
          mimetype
        }
      }
      content
    }
    createdAt
    updatedAt
  }
}
    `;

export function useProfileQuery(options: Omit<Urql.UseQueryArgs<ProfileQueryVariables>, 'query'>) {
  return Urql.useQuery<ProfileQuery>({ query: ProfileDocument, ...options });
};
export const FriendsByUsernameDocument = gql`
    query friendsByUsername($username: String!) {
  friendsByUsername(username: $username) {
    id
    friend {
      name
      username
      profileImage {
        hash
        url
        mimetype
      }
    }
  }
}
    `;

export function useFriendsByUsernameQuery(options: Omit<Urql.UseQueryArgs<FriendsByUsernameQueryVariables>, 'query'>) {
  return Urql.useQuery<FriendsByUsernameQuery>({ query: FriendsByUsernameDocument, ...options });
};
export const FriendRequestsDocument = gql`
    query friendRequests {
  friendRequests {
    fromUser {
      id
      username
      firstName
      lastName
      profileImage {
        url
        hash
        mimetype
      }
    }
    id
    toUser
    createdAt
  }
}
    `;

export function useFriendRequestsQuery(options?: Omit<Urql.UseQueryArgs<FriendRequestsQueryVariables>, 'query'>) {
  return Urql.useQuery<FriendRequestsQuery>({ query: FriendRequestsDocument, ...options });
};
export const FriendExistsDocument = gql`
    query friendExists($id: ID!) {
  friendExists(id: $id)
}
    `;

export function useFriendExistsQuery(options: Omit<Urql.UseQueryArgs<FriendExistsQueryVariables>, 'query'>) {
  return Urql.useQuery<FriendExistsQuery>({ query: FriendExistsDocument, ...options });
};
export const FriendRequestDocument = gql`
    query friendRequest($userId: String!) {
  friendRequestSent(userId: $userId) {
    fromUser {
      id
    }
    id
    toUser
  }
  friendRequest(userId: $userId) {
    fromUser {
      id
    }
    id
    toUser
  }
}
    `;

export function useFriendRequestQuery(options: Omit<Urql.UseQueryArgs<FriendRequestQueryVariables>, 'query'>) {
  return Urql.useQuery<FriendRequestQuery>({ query: FriendRequestDocument, ...options });
};
export const FriendsDocument = gql`
    query friends {
  friends {
    id
    friend {
      name
      username
      profileImage {
        hash
        url
        mimetype
      }
    }
  }
}
    `;

export function useFriendsQuery(options?: Omit<Urql.UseQueryArgs<FriendsQueryVariables>, 'query'>) {
  return Urql.useQuery<FriendsQuery>({ query: FriendsDocument, ...options });
};
export const CreateFriendRequestDocument = gql`
    mutation createFriendRequest($userId: String!) {
  createFriendRequest(createFriendRequestInput: {toUserId: $userId}) {
    fromUser {
      id
    }
    id
    toUser
  }
}
    `;

export function useCreateFriendRequestMutation() {
  return Urql.useMutation<CreateFriendRequestMutation, CreateFriendRequestMutationVariables>(CreateFriendRequestDocument);
};
export const AcceptFriendRequestDocument = gql`
    mutation acceptFriendRequest($id: String!) {
  acceptFriendRequest(id: $id) {
    fromUser {
      id
      username
    }
    id
    toUser
  }
}
    `;

export function useAcceptFriendRequestMutation() {
  return Urql.useMutation<AcceptFriendRequestMutation, AcceptFriendRequestMutationVariables>(AcceptFriendRequestDocument);
};
export const RejectFriendRequestDocument = gql`
    mutation rejectFriendRequest($id: String!) {
  rejectFriendRequest(id: $id) {
    fromUser {
      id
      username
    }
    id
    toUser
  }
}
    `;

export function useRejectFriendRequestMutation() {
  return Urql.useMutation<RejectFriendRequestMutation, RejectFriendRequestMutationVariables>(RejectFriendRequestDocument);
};
export const RemoveFriendRequestDocument = gql`
    mutation removeFriendRequest($id: String!) {
  removeFriendRequst(id: $id) {
    fromUser {
      id
      username
    }
    id
    toUser
  }
}
    `;

export function useRemoveFriendRequestMutation() {
  return Urql.useMutation<RemoveFriendRequestMutation, RemoveFriendRequestMutationVariables>(RemoveFriendRequestDocument);
};
export const UserDocument = gql`
    query user($username: String!) {
  user(username: $username) {
    id
    username
    email
    name
    firstName
    lastName
    gender
    dob
    bio
    profileImage {
      url
      hash
    }
    coverImage {
      url
      hash
    }
  }
}
    `;

export function useUserQuery(options: Omit<Urql.UseQueryArgs<UserQueryVariables>, 'query'>) {
  return Urql.useQuery<UserQuery>({ query: UserDocument, ...options });
};
export const UpdateUserDocument = gql`
    mutation updateUser($firstName: String, $lastName: String, $gender: String, $dob: DateTime, $profileImage: Upload, $coverImage: Upload) {
  updateUser(
    updateUserInput: {firstName: $firstName, lastName: $lastName, gender: $gender, dob: $dob, profileImage: $profileImage, coverImage: $coverImage}
  ) {
    id
    username
    email
    name
    firstName
    lastName
    gender
    dob
    bio
    profileImage {
      url
      hash
    }
    coverImage {
      url
      hash
    }
  }
}
    `;

export function useUpdateUserMutation() {
  return Urql.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument);
};
export const DeactivateUserDocument = gql`
    mutation deactivateUser {
  deactivateUser
}
    `;

export function useDeactivateUserMutation() {
  return Urql.useMutation<DeactivateUserMutation, DeactivateUserMutationVariables>(DeactivateUserDocument);
};
export const SearchUsersDocument = gql`
    query searchUsers($query: String!) {
  searchUsers(query: $query) {
    name
    profileImage {
      url
      hash
      mimetype
    }
    email
    username
  }
}
    `;

export function useSearchUsersQuery(options: Omit<Urql.UseQueryArgs<SearchUsersQueryVariables>, 'query'>) {
  return Urql.useQuery<SearchUsersQuery>({ query: SearchUsersDocument, ...options });
};
export const RemoveProfileImageDocument = gql`
    mutation removeProfileImage {
  removeProfileImage {
    id
  }
}
    `;

export function useRemoveProfileImageMutation() {
  return Urql.useMutation<RemoveProfileImageMutation, RemoveProfileImageMutationVariables>(RemoveProfileImageDocument);
};
export const RemoveCoverImageDocument = gql`
    mutation removeCoverImage {
  removeCoverImage {
    id
  }
}
    `;

export function useRemoveCoverImageMutation() {
  return Urql.useMutation<RemoveCoverImageMutation, RemoveCoverImageMutationVariables>(RemoveCoverImageDocument);
};