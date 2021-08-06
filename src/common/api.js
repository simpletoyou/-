/*
 * @Description: 
 * @version: 
 * @Author: chenchuhua
 * @Date: 2021-05-12 14:50:11
 * @LastEditors: chenchuhua
 * @LastEditTime: 2021-05-12 16:07:32
 */
import axios from "axios";
/**
 * @name: chenchuhua
 * @test: test font
 * @msg: 获取广州市天气信息
 * @param {*}
 * @return {*}
 */
let getWeather = () => {
    return axios
        .get("http://wthrcdn.etouch.cn/weather_mini?city=广州市")
        .then(({ data }) => {
            if (data.status === 1000) {
                return data
            }
        })
        .catch(console.error);
}
/**
 * @name: chenchuhua
 * @test: test font
 * @msg: 获取每日一言接口
 * @param {*}
 * @return {*}
 */
let getSaying = () => {
    return axios
        .get("https://v1.hitokoto.cn")
        .then(({ data }) => {
            return data
        })
        .catch(console.error);
}
/**
 * @name: chenchuhua
 * @test: test font
 * @msg: 获取音乐接口
 * @param {*}
 * @return {*}
 */
 let getMusic = () => {
    return axios
        .get("/service/api/playlist/detail?id=19723756")
        .then(({ data }) => {
            return data
        })
        .catch(console.error);
}





export default {
    getWeather,
    getSaying,
    getMusic
}