import {defineType,defineField} from 'sanity';
const siteSettings=defineType({
 name:'pallasSiteSettings',title:'Thông tin công ty',type:'document',
 fields:[
  defineField({name:'name',title:'Tên thương hiệu hiển thị',type:'string',description:'Giữ PALLAS hoặc tên được chủ doanh nghiệp duyệt'}),
  defineField({name:'company',title:'Tên doanh nghiệp',type:'string'}),
  defineField({name:'phoneDisplay',title:'Hotline hiển thị',type:'string'}),
  defineField({name:'phone',title:'Hotline dạng số',type:'string',description:'Ví dụ 0938585059'}),
  defineField({name:'email',title:'Email nhận yêu cầu',type:'string'}),
  defineField({name:'address',title:'Địa chỉ ĐÃ ĐƯỢC XÁC NHẬN',type:'text',rows:2,description:'Website cũ có nhiều địa chỉ không giống nhau. Chỉ xuất bản địa chỉ đã xác minh với chủ công ty'}),
  defineField({name:'tagline',title:'Thông điệp ngắn',type:'string'}),
 ],preview:{prepare:()=>({title:'Thông tin công ty'})}
});
const product=defineType({
 name:'pallasProduct',title:'Sản phẩm & giá bán',type:'document',
 fields:[
  defineField({name:'name',title:'Tên sản phẩm',type:'string',validation:rule=>rule.required()}),
  defineField({name:'slug',title:'Mã SKU / đường dẫn',type:'slug',options:{source:'name',maxLength:120},validation:rule=>rule.required(),description:'Nếu sửa slug cũ, giỏ hàng và liên kết sẽ thay đổi. Nên giữ nguyên SKU đã có'}),
  defineField({name:'category',title:'Danh mục',type:'string',options:{list:[{title:'Bọt tuyết',value:'foam'},{title:'Rửa không chạm',value:'touchless'},{title:'Wax & dưỡng bóng',value:'wax'},{title:'Vệ sinh chuyên dụng',value:'cleaner'},{title:'Thiết bị',value:'equipment'}]},validation:rule=>rule.required()}),
  defineField({name:'volume',title:'Dung tích / Quy cách',type:'string',validation:rule=>rule.required()}),
  defineField({name:'image',title:'Ảnh sản phẩm (chỉ ảnh được phép sử dụng)',type:'image',options:{hotspot:true}}),
  defineField({name:'summary',title:'Mô tả ngắn',type:'text',rows:3}),
  defineField({name:'highlights',title:'Điểm nổi bật đã được xác minh',type:'array',of:[{type:'string'}]}),
  defineField({name:'usage',title:'Hướng dẫn & cảnh báo đã duyệt',type:'text',rows:4}),
  defineField({name:'priceMode',title:'Quy tắc giá',type:'string',initialValue:'unchanged',options:{layout:'radio',list:[{title:'Giữ giá đang hiển thị',value:'unchanged'},{title:'Giá mới được duyệt',value:'approved'},{title:'Liên hệ báo giá',value:'quote'}]},validation:rule=>rule.required()}),
  defineField({name:'approvedPrice',title:'Giá mới được duyệt (VNĐ)',type:'number',hidden:({parent})=>parent?.priceMode!=='approved',validation:rule=>rule.min(0).custom((value,context)=>context.parent&&'priceMode' in context.parent&&context.parent.priceMode==='approved'&&typeof value!=='number'?'Cần nhập giá được duyệt':true),description:'Không tự nhân giá theo dung tích, chỉ dùng giá của đúng SKU'}),
  defineField({name:'featured',title:'Hiển thị nổi bật',type:'boolean',initialValue:false}),
  defineField({name:'isActive',title:'Đang kinh doanh / hiện trên web',type:'boolean',initialValue:true,description:'Tắt để ẩn mã sản phẩm này khỏi website'}),
 ],preview:{select:{title:'name',subtitle:'volume',media:'image'}}
});
const article=defineType({
 name:'pallasArticle',title:'Bài viết & hướng dẫn',type:'document',
 fields:[
  defineField({name:'title',title:'Tiêu đề',type:'string',validation:rule=>rule.required()}),
  defineField({name:'slug',title:'Đường dẫn',type:'slug',options:{source:'title'},validation:rule=>rule.required()}),
  defineField({name:'category',title:'Chuyên mục',type:'string'}),
  defineField({name:'excerpt',title:'Mô tả tóm tắt',type:'text',rows:2}),
  defineField({name:'readTime',title:'Thời gian đọc',type:'string',initialValue:'4 phút đọc'}),
  defineField({name:'section',title:'Các đoạn nội dung',type:'array',of:[{type:'text'}],validation:rule=>rule.required()}),
  defineField({name:'isActive',title:'Hiển thị trên website',type:'boolean',initialValue:true}),
 ],preview:{select:{title:'title',subtitle:'category'}}
});
const promotion=defineType({
 name:'pallasPromotion',title:'Ưu đãi có thời hạn',type:'document',
 fields:[
  defineField({name:'title',title:'Tiêu đề ưu đãi',type:'string',validation:rule=>rule.required()}),
  defineField({name:'description',title:'Mô tả / Điều kiện áp dụng',type:'text',rows:3}),
  defineField({name:'startsAt',title:'Bắt đầu',type:'datetime',validation:rule=>rule.required()}),
  defineField({name:'endsAt',title:'Kết thúc',type:'datetime',validation:rule=>rule.required().custom((value,ctx)=>{const start=(ctx.parent as {startsAt?:string}|undefined)?.startsAt;return !value||!start||Date.parse(value)>Date.parse(start)||'Ngày kết thúc phải sau ngày bắt đầu'})}),
  defineField({name:'url',title:'Đường dẫn chi tiết',type:'string',description:'Chỉ đường dẫn nội bộ bắt đầu bằng / hoặc https:// hợp lệ',validation:rule=>rule.custom(value=>!value||value.startsWith('/')||value.startsWith('https://')?true:'Nhập URL hợp lệ')}),
  defineField({name:'isActive',title:'Bật ưu đãi',type:'boolean',initialValue:false}),
 ],preview:{select:{title:'title',subtitle:'endsAt'}}
});
export const schemaTypes=[siteSettings,product,article,promotion];
