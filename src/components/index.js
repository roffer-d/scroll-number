import scrollNumber from "./scrollNumber";

export {
    scrollNumber
}

export default {
    install(Vue){
        Vue.component(scrollNumber.name,scrollNumber)
    }
}