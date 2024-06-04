import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostDto {
  @Field()
  caption: string = '';

  @Field()
  imageUrl: string = '';
}
