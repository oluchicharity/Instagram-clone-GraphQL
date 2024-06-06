import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { PostService } from '../post/post.service';
import { CreatePostDto } from '../post/Dto/createPost.dto';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const postService = app.get(PostService);

  const posts: CreatePostDto[] = [
    { caption: 'First post', imageUrl: 'https://example.com/image1.jpg' },
    { caption: 'Second post', imageUrl: 'https://example.com/image2.jpg' },
  ];

  for (const post of posts) {
    await postService.create(post);
  }

  await app.close();
}

bootstrap();

