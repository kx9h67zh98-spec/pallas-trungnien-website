import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {visionTool} from '@sanity/vision';
import {schemaTypes} from './schemas';
export default defineConfig({
  name:'pallas',title:'PALLAS | Quản lý nội dung',
  projectId:process.env.SANITY_STUDIO_PROJECT_ID||'',dataset:process.env.SANITY_STUDIO_DATASET||'production',
  plugins:[structureTool({structure:(S)=>S.list().title('PALLAS · Quản trị').items([
    S.listItem().title('Thông tin công ty').id('company').child(S.document().schemaType('pallasSiteSettings').documentId('pallasSiteSettings')),
    S.divider(),
    S.documentTypeListItem('pallasProduct').title('Sản phẩm & giá bán'),
    S.documentTypeListItem('pallasArticle').title('Bài viết & hướng dẫn'),
    S.documentTypeListItem('pallasPromotion').title('Chương trình ưu đãi'),
  ])}),visionTool()],
  schema:{types:schemaTypes},
});
