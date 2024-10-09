const base = {
    get() {
        return {
            url : "http://localhost:8080/phpt737ze07/",
            name: "phpt737ze07",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/phpt737ze07/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于php的摄影门户网站设计与实现"
        } 
    }
}
export default base
