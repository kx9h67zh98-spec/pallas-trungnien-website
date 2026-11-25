import type { Article } from '@/types';
export const articles: Article[] = [
{ slug:'cham-soc-xe-tai-nha',category:'Cẩm nang',title:'5 bước chăm sóc xe tại nhà gọn gàng, đúng quy trình',excerpt:'Từ khâu làm mát bề mặt đến lau khô: các nguyên tắc nền tảng giúp bạn chăm sóc xe chủ động hơn.',readTime:'5 phút đọc',section:[
'Chọn nơi râm mát và bảo đảm bề mặt xe không quá nóng trước khi bắt đầu. Chuẩn bị găng tay, khăn sạch và dụng cụ phù hợp.',
'Loại bỏ bụi và cát bám trên xe bằng nước, tránh chà trực tiếp khiến hạt cứng cọ sát lớp sơn.',
'Pha dung dịch đúng tỷ lệ ghi trên nhãn của từng mã sản phẩm; không suy đoán tỷ lệ chỉ từ màu chai.',
'Rửa theo từng khu vực, không để hóa chất khô trên bề mặt. Xả thật kỹ bằng nước sạch.',
'Lau khô bằng khăn microfiber phù hợp, kiểm tra lại các vị trí khuất nước.']},
{ slug:'phan-biet-rua-xe-khong-cham',category:'Kiến thức sản phẩm',title:'Rửa xe không chạm và bọt tuyết truyền thống khác nhau thế nào?',excerpt:'Tìm hiểu điểm khác nhau về quy trình, dụng cụ và cách lựa chọn sản phẩm cho tiệm rửa xe.',readTime:'6 phút đọc',section:[
'Bọt tuyết truyền thống thường đi cùng thao tác vệ sinh cơ học bằng dụng cụ phù hợp, trong khi quy trình không chạm tối ưu bước làm mềm và xử lý chất bẩn bằng hóa chất phù hợp.',
'Hiệu quả còn phụ thuộc tình trạng bẩn, thời gian lưu dung dịch, áp lực nước, tỷ lệ pha và hướng dẫn của từng dòng sản phẩm.',
'Không mặc định mọi dung dịch không chạm đều phù hợp với mọi lớp phủ. Hãy kiểm tra khuyến nghị tương thích của nhà sản xuất và thử trên vùng nhỏ khi cần.',
'Với garage, cần chuẩn hóa quy trình pha, thiết bị, đồ bảo hộ và hướng dẫn nhân viên trước khi áp dụng đại trà.']},
{ slug:'chon-dung-tich-cho-garage',category:'Dành cho garage',title:'Chọn dung tích hóa chất phù hợp với quy mô garage',excerpt:'So sánh quy cách nhỏ và can lớn để quản lý lưu kho, định mức sử dụng và đơn hàng dễ hơn.',readTime:'4 phút đọc',section:[
'Dung tích nhỏ dễ dùng để trải nghiệm và kiểm tra mức tiêu hao thực tế trước khi đặt hàng số lượng lớn.',
'Can 6L có thể phù hợp với điểm rửa xe có lịch hoạt động thường xuyên; quy cách 21L dành cho nhu cầu khối lượng lớn hơn.',
'Khi tính chi phí cho mỗi lượt rửa, hãy sử dụng đúng định mức pha trên nhãn và ghi nhận lượng thực tế đã dùng.',
'Bảo quản hóa chất theo hướng dẫn, đóng nắp, dán nhãn và tránh đặt cạnh thực phẩm hoặc nguồn nhiệt.']},
{ slug:'meo-cham-soc-lop-xe',category:'Chăm sóc lốp',title:'Những điều cần lưu ý khi vệ sinh và dưỡng bóng lốp',excerpt:'Làm sạch, để khô và lựa chọn chất dưỡng đúng khu vực là bước quan trọng trong chăm sóc lốp.',readTime:'4 phút đọc',section:[
'Đảm bảo lốp được làm sạch và khô ở phần bề mặt cần dưỡng trước khi sử dụng sản phẩm.',
'Chỉ thoa sản phẩm lên các khu vực được hướng dẫn trên nhãn, tránh mặt lốp tiếp xúc với đường và hệ thống phanh.',
'Không bôi quá nhiều. Sử dụng khăn và dụng cụ sạch, chuyên dụng để kiểm soát lượng sản phẩm.',
'Độ an toàn khi lái xe luôn ưu tiên hơn hiệu ứng bóng bề mặt.']},
];
export const getArticle=(slug:string)=>articles.find(a=>a.slug===slug);
