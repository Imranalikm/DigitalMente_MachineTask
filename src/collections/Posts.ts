import { CollectionConfig } from 'payload/types';
import {
    lexicalEditor
  } from '@payloadcms/richtext-lexical'

const Posts: CollectionConfig = {
  slug: 'posts',
 
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text', 
      required: true, 
    },
    {
      name: 'content',
      label: 'Content',
      type: 'richText', 
      editor: lexicalEditor({}),
      required: true, 
    },
    
  ],
};

export default Posts;
