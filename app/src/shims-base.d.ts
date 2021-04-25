declare module 'base' {
    import BaseBtn from '@/components/base/Btn'
    import BaseCard from '@/components/base/Card'
    import BaseSubheading from '@/components/base/Subheading'
    Vue.component(BaseBtn.name, BaseBtn)
    Vue.component(BaseCard.name, BaseCard)
    Vue.component(BaseSubheading.name, BaseSubheading)
    export default BaseBtn
    export default BaseCard
    export default BaseSubheading
}
