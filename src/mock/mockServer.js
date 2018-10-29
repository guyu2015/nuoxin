import Mock from "mockjs"
import data from './data.json'
// 注册接口
Mock.mock('/api/goods',{
    code:0,
    data:data.goods
});
Mock.mock('/api/seller',{
    code:0,
    data:data.info
});
Mock.mock('/api/ratings',{
    code:0,
    data:data.ratings
});