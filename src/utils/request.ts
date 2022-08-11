// import axios,{AxioxResponse} from 'axios'
// import { ElLoading } from 'element-plus';

// const BASE_URL:string=""
// const TIME_OUT:number=6000

// const instanceApi=axios.create({
// baseUrl:BASE_URL,
// timout:TIME_OUT
// })
// let loading:any;
// // 开始加载状态
// const startLoading=()=>{
//     const options={
//         lock:true,
//         text:'加载中...',
//         background:'agba(0,0,0,0.7)'
//     }
//     loading=ElLoading.service(options)
// }
// const endLoading=()=>{
//     loading.close()
// }
// // 请求拦截
// axios.interceptors.request.use((config:AxioxResponse<any>)=>{
//     startLoading()
//     return config
// }, (err:any)=>{
// console.log('请求拦截',err)
// })
// // 相应拦截
// axios.interceptors.respose.use((repose:any)=>{
//     endLoading()

// })
// // get请求
// instanceApi.get=(url:string,params:object)=>{
//     return instanceApi({
//         method:'get',
//         url,
//         params
//     })
// }
// // post请求
// instanceApi.post=()=>{}
// instanceApi.put=()=>{}
// instanceApi.delete=()=>{}
// export default axios;
