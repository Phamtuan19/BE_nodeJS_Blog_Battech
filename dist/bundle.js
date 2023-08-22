(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=require("express");var r=e.n(t);const n=require("morgan");var a=e.n(n);const s=require("dotenv");var c=e.n(s);require("joi");const o=200,d=500;class i extends Error{status;error;constructor(e,t){super(),this.status=e,this.error=t}}const u=(e,t)=>{if(t instanceof i){const r=t.status;if("string"==typeof t.error){const n=t.error;return e.status(r).send({message:n})}const n=t.error;return e.status(r).send({message:"Lỗi",data:n})}return e.status(d).send({message:t.message})},y=(e,t)=>e.status(o).send(t),p=require("mongoose");var m=e.n(p);const l=require("bcrypt");var g=e.n(l);const h=require("mongoose-autopopulate");var w=e.n(h);const f=new(0,m().Schema)({name:{type:String,required:!0},email:{type:String,required:!0,unique:!0},password:{type:String}},{timestamps:!0});f.pre("save",(function(e){this.password=this.bcryptPassword(this.password),e()})),f.methods={bcryptPassword:e=>e?g().hashSync(e,10):"",authenticate(e){return g().compareSync(e,this.password)}},f.plugin(w());const I=m().model("users",f);new class{async findById(e){return I.findById(e)}async read(){return I.find({})}async create(e){return await new I(e).save()}async update(e,t){return I.findByIdAndUpdate(e,t,{new:!0})}async delete(e){return I.findByIdAndDelete(e)}};const q=r().Router();q.post("/register",(async(e,t)=>{try{const r=e.body,n=await I(r).save();return t.status(200).json({message:"Đăng ký thành công!",user:n})}catch(e){t.status(400).json({message:"Đăng ký không thành công!",error:e}),console.log(e)}}));const S={prefix:"/",routes:[{path:"auth",route:q}]},b=new(0,m().Schema)({name:{type:String,required:!0}},{timestamps:!0});b.plugin(w());const v=m().model("addresses",b),T=r().Router();T.post("/create",(async(e,t)=>{try{const r=e.body,n=await new v(r).save();return y(t,{data:n,message:"Thêm danh mục thành công!"})}catch(e){return u(t,e)}})),T.get("/",(async(e,t)=>{try{const e=await v.find({});return y(t,{data:e})}catch(e){return u(t,e)}}));const j=T,k=new(0,m().Schema)({name:{type:String,required:!0}},{timestamps:!0});k.plugin(w());const B=m().model("articleTypes",k);const A=new class{async findById(e){return B.findById(e)}async read(){return B.find({}).select("_id, name")}async create(e){return await new B(e).save()}async update(e,t){return B.findByIdAndUpdate(e,t,{new:!0})}async delete(e){return B.findByIdAndDelete(e)}},O=r().Router();O.post("/create",(async(e,t)=>{try{const r=e.body,n=await A.create(r);return y(t,{data:n,message:"Thêm danh mục thành công!"})}catch(e){return u(t,e)}})),O.get("/",(async(e,t)=>{try{const e=await A.read();return y(t,{data:e})}catch(e){return u(t,e)}}));const R=O,x=new(0,m().Schema)({name:{type:String,required:!0},technology:{type:String},addressId:{type:m().Schema.Types.ObjectId,ref:"addresses",autopopulate:{select:"name"},required:!0},content:{type:String,required:!0},quantity:{type:Number,required:!0},salaryLevel:{type:String,required:!0},workGroupId:{type:m().Schema.Types.ObjectId,ref:"workgroups",autopopulate:{select:"name"},required:!0}},{timestamps:!0});x.plugin(w());const C=m().model("job",x);const G=new class{async findById(e){return C.findById(e)}async read(e){return C.find({query:e})}async create(e){return await new C(e).save()}async update(e,t){return C.findByIdAndUpdate(e,t,{new:!0})}async delete(e){return C.findByIdAndDelete(e)}},D=m().Types.ObjectId,_=r().Router();_.post("/create",(async(e,t)=>{try{const r=e.body,n=await G.create(r);console.log("data");return y(t,{data:n,message:"Thêm danh mục thành công!"})}catch(e){return u(t,e)}})),_.get("/",(async(e,t)=>{try{const r=10,{q:n,addressId:a,workGroupId:s,workingTimeId:c}=e.query;let{page:o}=e.query;const d=(o-1)*r;o<1&&(o=1);const i={};a&&(i.addressId=new D(a)),s&&(i.workGroupId=new D(s)),c&&(i.workingTime=c);const u=await C.find({...i,name:{$regex:n,$options:"i"}}).skip(d).limit(r),p=await C.countDocuments({...i,name:{$regex:n,$options:"i"}}),m={data:u,pageCount:Math.ceil(p/r)};return y(t,m)}catch(e){return u(t,e)}})),_.get("/:id",(async(e,t)=>{try{const r=e.params.id,n=await C.findOne({_id:r});console.log(r),t.status(200).json({data:n})}catch(e){}})),_.get("/:workGroupId",(async(e,t)=>{try{if(e.params.workGroupId){const r=await C.find({workGroupId:new D(e.params.workGroupId)});t.status(200).json({data:r})}}catch(e){}}));const U=_,E=new(0,m().Schema)({articleTypeId:{type:m().Schema.Types.ObjectId,required:!0,ref:"articleTypes",autopopulate:{select:"name"}},title:{type:String,required:!0},description:{type:String,required:!0},content:{type:String,required:!0},image:{type:String,required:!0}},{timestamps:!0});E.plugin(w());const P=m().model("posts",E);const $=new class{async findById(e){return P.findById(e)}async read(){return P.find({})}async create(e){return await new P(e).save()}async update(e,t){return P.findByIdAndUpdate(e,t,{new:!0})}async delete(e){return P.findByIdAndDelete(e)}},L=r().Router();L.post("/create",(async(e,t)=>{try{const r=e.body,n=await $.create(r);return y(t,{data:n,message:"Thêm danh mục thành công!"})}catch(e){return u(t,e)}})),L.get("/",(async(e,t)=>{try{const e=await $.read();return y(t,{data:e})}catch(e){return u(t,e)}})),L.get("/:id",(async(e,t)=>{try{const r=e.params.id,n=await P.findOne({_id:r});t.status(200).json({data:n})}catch(e){}})),L.get("/article/:articleTypeId",(async(e,t)=>{try{const r=e.params.articleTypeId,n=await P.find({articleTypeId:r});t.status(200).json({data:n})}catch(e){}})),L.get("/news/:articleTypeId",(async(e,t)=>{try{const r=e.params.articleTypeId,n=parseInt(e.query.page)||1,a=4*(n-1);n<1&&(n=1);const s=await P.find({articleTypeId:r}).skip(a).limit(4),c=await P.countDocuments({articleTypeId:r});t.status(200).json({pageCount:Math.ceil(c/4),data:s})}catch(e){}})),L.get("/detail/news",(async(e,t)=>{try{const e=await P.find({}).limit(5);return y(t,{data:e})}catch(e){return u(t,e)}}));const M=L,N=new(0,m().Schema)({name:{type:String,required:!0}},{timestamps:!0});N.plugin(w());const K=m().model("workgroups",N),W=r().Router();W.post("/create",(async(e,t)=>{try{const r=e.body,n=await new K(r).save();return y(t,{data:n,message:"Thêm danh mục thành công!"})}catch(e){return u(t,e)}})),W.get("/",(async(e,t)=>{try{const e=await K.find({});return y(t,{data:e})}catch(e){return u(t,e)}}));const H=[{...{prefix:"/",routes:[{path:"articleType",route:R},{path:"posts",route:M},{path:"job",route:U},{path:"workGroup",route:W},{path:"address",route:j}]}},{...S}],X=require("cors");var z=e.n(X);c().config();process.env.DB_Name;c().config();const F=r()(),J=process.env.PORT,Q=process.env.CLIENT_URL;F.use(z()()),(async()=>{try{await m().connect("mongodb+srv://phamtuan19hd:phamtuan1982000qwer@cluster0.4mddcjn.mongodb.net/?retryWrites=true&w=majority"),console.log("Kết nối db thành công!")}catch(e){console.log("Kết nối db thất bại! "+e)}})(),a()("tiny"),F.use(z()({credentials:!0,origin:[Q]})),F.use((function(e,t,r){t.header("Access-Control-Allow-Origin","*"),t.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept"),r()})),F.use(r().json({limit:"50mb"})),F.use(r().urlencoded({limit:"50mb",extended:!0})),H.forEach((e=>e.routes.forEach((t=>F.use("/api"+e.prefix+t.path,t.route))))),F.listen(J||5e3,(()=>{console.log(`[SUCCESS] ::: Server is listening on port: ${J}`)}))})();