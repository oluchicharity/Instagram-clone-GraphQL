import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { CreatePostDto } from './Dto/createPost.dto';
import { UpdatePostDto } from './Dto/updatePost.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const post = this.postRepository.create(createPostDto);
    return await this.postRepository.save(post);
  }

  async findAll(): Promise<Post[]> {
    const posts = await this.postRepository.find();
    if (!posts) {
      throw new Error('Posts not found');
    }
    return posts;
  }
  async findOne(id: number): Promise<Post> {
    const post = await this.postRepository.findOneBy({ id });
    if (!post) {
      throw new Error('Post not found');
    }
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto): Promise<Post> {
    const updatedPost = await this.postRepository.update(id, updatePostDto);
    if (!updatedPost) {
      throw new Error('Post not found');
    }
    const post = await this.findOne(id);
    if (!post) {
      throw new Error('Post not found');
    }
    return post;
  }

  async remove(id: number): Promise<Post> {
    const post = await this.findOne(id);
    if (!post) {
      throw new Error('Post not found');
    }
    await this.postRepository.remove(post);
    return post;
  }
}

