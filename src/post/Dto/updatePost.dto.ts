import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreatePostDto } from './createPost.dto'; 

@InputType()
export class UpdatePostDto extends PartialType(CreatePostDto) {
  @Field(() => Int)
  id!: number; 
}
