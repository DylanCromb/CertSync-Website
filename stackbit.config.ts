// stackbit.config.ts
import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  nodeVersion: '18',
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ['content'],
      models: [
        {
          name: 'HomePage',
          type: 'page',
          urlPath: '/',
          filePath: 'content/home.json',
          fields: [
            { name: 'heroTitle', type: 'string', required: true },
            { name: 'heroSubtitle', type: 'string' },
            { name: 'employeeHeading', type: 'string' },
            { name: 'employeeBody', type: 'text' },
            { name: 'employerHeading', type: 'string' },
            { name: 'employerBody', type: 'text' }
          ]
        },
        {
          name: 'AboutPage',
          type: 'page',
          urlPath: '/about',
          filePath: 'content/about.json',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'intro', type: 'text' },
            { name: 'founderBio', type: 'text' }
          ]
        }
      ],
      assetsConfig: {
        referenceType: 'static',
        staticDir: 'public',
        uploadDir: 'images',
        publicPath: '/'
      }
    })
  ]
});
