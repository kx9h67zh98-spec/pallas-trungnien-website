import test from 'node:test';
import assert from 'node:assert/strict';
import {validateContact,validateCheckout,validateName,validatePhone,validateEmail} from '../src/lib/form-validation.ts';

const contact={name:'Nguyễn Thị Mai',phone:'0912345678',email:'mai@example.com',topic:'Tư vấn sản phẩm',contactMethod:'Điện thoại',business:'Garage Trung Tâm',region:'TP. Hồ Chí Minh',interest:'Nhập hàng cho garage',message:'Tôi muốn được tư vấn sản phẩm rửa xe phù hợp cho garage.',consent:true};
const checkout={name:'Nguyễn Thị Mai',phone:'0912345678',email:'mai@example.com',address:'123 Nguyễn Văn Linh, Phường Bình Hưng, Thành phố Hồ Chí Minh',note:'',contactMethod:'Điện thoại',consent:true};

test('Vietnamese names are accepted but blank or numeric names are rejected',()=>{
  assert.equal(validateName('Nguyễn Thị Mai'),undefined);
  assert.ok(validateName('   '));
  assert.ok(validateName('123456789'));
});

test('common Vietnam phone formats validate correctly',()=>{
  for(const phone of ['0912345678','+84912345678','02812345678','0912 345 678'])assert.equal(validatePhone(phone),undefined,phone);
  for(const phone of ['','123456','abcdefghij','+8412'])assert.ok(validatePhone(phone),phone);
});

test('email rules catch missing @ or domain',()=>{
  assert.equal(validateEmail('mai@example.com'),undefined);
  for(const email of ['','abc','abc@','a@domain'])assert.ok(validateEmail(email));
});

test('general contact form validates required fields and consent',()=>{
  assert.deepEqual(validateContact(contact,false),{});
  const invalid=validateContact({...contact,name:'  ',phone:'abc',email:'invalid',message:'hi',consent:false},false);
  for(const k of ['name','phone','email','message','consent'])assert.ok(invalid[k],k);
});

test('dealer form requires business, location and interest',()=>{
  assert.deepEqual(validateContact(contact,true),{});
  const invalid=validateContact({...contact,business:'',region:'',interest:''},true);
  for(const k of ['business','region','interest'])assert.ok(invalid[k],k);
});

test('checkout validates address and contact details, optional notes remain optional',()=>{
  assert.deepEqual(validateCheckout(checkout),{});
  const invalid=validateCheckout({...checkout,address:'Q1',contactMethod:'',consent:false});
  for(const k of ['address','contactMethod','consent'])assert.ok(invalid[k],k);
  assert.ok(validateCheckout({...checkout,note:'x'.repeat(1001)}).note);
});
