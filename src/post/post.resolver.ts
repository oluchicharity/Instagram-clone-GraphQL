import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './post.entity';
import { CreatePostDto } from './Dto/createPost.dto';
import { UpdatePostDto } from './Dto/updatePost.dto';

@Resolver(of => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(returns => [Post])
  posts(): Promise<Post[]> {
    return this.postService.findAll();
  }

  @Query(returns => Post)
  post(@Args('id', { type: () => Int }) id: number): Promise<Post> {
    return this.postService.findOne(id);
  }

  @Mutation(returns => Post)
createPost(@Args('createPostInput') createPostInput: CreatePostDto): Promise<Post> {
  return this.postService.create(createPostInput);
}


  @Mutation(returns => Post)
  updatePost(@Args('updatePostInput') updatePostInput: UpdatePostDto): Promise<Post> {
    return this.postService.update(updatePostInput.id, updatePostInput);
  }

  @Mutation(returns => Post)
  deletePost(@Args('id', { type: () => Int }) id: number): Promise<Post> {
    return this.postService.remove(id);
  }
}
