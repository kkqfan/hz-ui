import Button from "./Button/Button.vue"
import Switch from "./Switch/Switch.vue"
import Dialog from "./Dialog/Dilalog.vue"
import Input from "./Input/Input.vue"
import Radio from "./Radio/Radio.vue"
import RadioGroup from "./Radio/RadioGroup.vue"
import Checkbox from "./Checkbox/Checkbox.vue"
import CheckboxGroup from "./Checkbox/CheckboxGroup.vue"
import Form from "./Form/Form.vue"
import FormItem from "./Form/FormItem.vue"
import "./fonts/iconfont.css"

const components = [
    Button,
    Switch,
    Dialog,
    Input,
    Radio,
    RadioGroup,
    Checkbox,
    CheckboxGroup,
    Form,
    FormItem
]
const install = function (Vue) {
    // 全局注册所有组件
    components.forEach(item => {
        Vue.component(item.name, item)
    })
}

export default {
    install
}