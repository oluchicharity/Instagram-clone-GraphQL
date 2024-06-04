import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Post {
  @Field(type => Int)
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Field()
  @Column()
  caption: string = '';

  @Field()
  @Column()
  imageUrl: string = '';

  @Field()
  @CreateDateColumn()
  createdAt: Date = new Date();

  @Field()
  @UpdateDateColumn()
  updatedAt: Date = new Date();
}
