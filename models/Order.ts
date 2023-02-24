import Addon from "./Addon"
import PersonalInfo from "./PersonalInfo"
import Plan from "./Plan"

class Order {
    personalInfo: PersonalInfo
    plan: Plan
    addons: Addon[]
    isYearly: boolean

    constructor(personalInfo: PersonalInfo = new PersonalInfo(), plan: Plan = new Plan(), addons: Addon[] = [], yearly: boolean = false ) {
        this.personalInfo = personalInfo
        this.plan = plan
        this.addons = addons
        this.isYearly = yearly
    }
}

export default Order