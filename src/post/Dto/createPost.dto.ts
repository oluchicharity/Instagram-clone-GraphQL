import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostDto {
  @Field(() => String)
  caption: string = '';
  @Field()
  imageUrl: string = '';
}
