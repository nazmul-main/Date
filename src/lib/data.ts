export const categories = [
 {name:'Groceries',items:['Herbs, Spices & Sauces','Dairy & Eggs','Rice','Dal','Cooking Oil','Snacks & Beverages']},
 {name:'Health & Beauty',items:['Hair Care','Skin Care','Oral Care','Personal Care','Health Care','First Aid']},
 {name:'Home & Kitchen',items:['Cookware','Kitchen Appliances','Home Decor','Cleaning & Laundry','Storage & Organization']},
 {name:'Mother & Baby',items:['Baby Food','Diapers & Wipes','Baby Bath & Skin','Toys & Learning','Mother Care']}
];
export const products = [
 {id:'P-1001',name:'Premium Basmati Rice 1kg',category:'Groceries',price:260,oldPrice:290,stock:48,image:'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=700'},
 {id:'P-1002',name:'Organic Green Tea',category:'Groceries',price:350,oldPrice:390,stock:32,image:'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=700'},
 {id:'P-1003',name:'Everyday Kitchen Blender',category:'Home & Kitchen',price:2450,oldPrice:2890,stock:12,image:'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=700'},
 {id:'P-1004',name:'Stainless Steel Cookware Set',category:'Home & Kitchen',price:3200,oldPrice:3600,stock:8,image:'https://images.unsplash.com/photo-1584990347449-a9f1c3b3c7b8?w=700'},
 {id:'P-1005',name:'Gentle Baby Care Set',category:'Mother & Baby',price:890,oldPrice:990,stock:21,image:'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=700'},
 {id:'P-1006',name:'Daily Nourishing Shampoo',category:'Health & Beauty',price:420,oldPrice:480,stock:4,image:'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700'}
];
export const money = (n:number) => `৳${n.toLocaleString('en-BD')}`;
