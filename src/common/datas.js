import axios from "axios";
const slide = [
    {
      name: "1",
      src: require("../assets/banner/banner1.jpg"),
    },
    {
      name: "2",
      src: require("../assets/banner/banner2.png"),
    },
    {
      name: "3",
      src: require("../assets/banner/banner3.jpg"),
    },
    {
      name: "4",
      src: require("../assets/banner/banner4.jpg"),
    },
    {
      name: "5",
      src: require("../assets/banner/banner5.jpg"),
    },
];
const subPageData1 = [
    {
        title: "学习",
        desc:
            "我一直在思考一个人的一生怎么能一无所成呢。事实就是这么悲哀，不是所有的人都能功成名就。我们中有些人注定要在日常生活的点滴中寻找生命的意义。",
        img: require("../assets/banner/banner6.jpg"),
        logo: require("../assets/index/learn.svg"),
        txt:
            "I still keep thinking about how an entire life can seemingly amount to nothing. I guess the sad truth is, not everyone will accomplish something great.  Some of us may just have to find meaning in the little moments that make up life.",
    },
    {
        title: "音乐",
        desc:
            "在爱情里快乐与痛苦仅一线之隔。事实上，人们普遍相信没有痛苦的恋爱不值得拥有。对某些人来说，痛苦意味着成长。但是我们怎么能知道何时成长的痛苦会转变成疼痛的痛苦?若我们继续走在那条线上，我们算是受虐狂还是乐观主义?谈到爱情，如何能知道是真的够了?",
        img: require("../assets/banner/banner7.jpg"),
        logo: require("../assets/index/says.svg"),
        txt:
            "In love relationships, there is a fine line between pleasure and pain. In  fact, it's a common belief that a relationship without Pain is a relationship  not worth having.To some, pain implies growth. But how do we know when the growing pains stop and the ''Pain Pains'' take over?Are we masochists or optimists, if we continue to walk that Fine line?When it comes to relationships, how do you know when enough is enough?",
    },
    {
        title: "阅读",
        desc: "和谐,与持久或永恒无关,而是不同的声音汇集在一起。",
        img: require("../assets/banner/banner8.jpg"),
        logo: require("../assets/index/music.svg"),
        txt:
            "Harmony, it's not about what's lasting or permanent. It is about individual voices coming together.",
    },
];
const subPageData2 = [
    {
        title: "美句",
        desc:
            "混乱。血口大张的深渊等待吞噬一切。混乱不是深渊。混乱是阶梯。很多人想往上爬却失败了，且永无机会再试。他们坠落而亡。有人本有机会攀爬，但他们拒绝了。他们守着王国不放，守着诸神，守着爱情。尽皆幻想。唯有阶梯真是存在。攀爬才是生活的全部。",
        img: require("../assets/banner/banner9.jpg"),
        logo: require("../assets/index/movie.svg"),
        txt:
            "Chaos is not a pit, Chaos is a ladder. Many who try to climb it fail, and never get to try again, The fall breaks them. And some are given a chance to climb, but they refuse. They cling to the realm, or the gods, or love:  illusions. Only the ladder is real; the climb is all there is.",
    },
    {
        title: "电影",
        desc: "这么说吧，人生漫漫，凡是有价值的事， 实现起来都很困难",
        img: require("../assets/banner/banner10.jpg"),
        logo: require("../assets/index/read.svg"),
        txt:
            "Let me tell you something about life. Anything that’s worth doing is hard.",
    },
    {
        title: "更多",
        desc: "痛苦分两种，一种让你变得更强，另一种毫无价值，只是徒添折磨。",
        img: require("../assets/banner/banner11.jpg"),
        logo: require("../assets/index/learn.svg"),
        txt:
            "There are two kinds of pain. The sort of pain that makes you strong or useless pain...The sort of pain that's only suffering.",
    },
];
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
export default {
    slide,
	subPageData1,
    subPageData2,
    getWeather
}
