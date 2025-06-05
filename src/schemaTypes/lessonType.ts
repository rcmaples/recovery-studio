import {defineField, defineType} from 'sanity'

export const lessonType = defineType({
  name: 'lesson',
  title: 'Lesson',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
  ],
})
