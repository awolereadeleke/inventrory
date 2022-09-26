import departmentModel from "../../models/departmentModel.js"
import staffmodel from "../../models/staffModel.js"
import agentModel from "../../models/agentModel.js"
import agentPaymentModel from "../../models/agentPaymentModel.js"
import companyModel from "../../models/companyModel.js"
import contactPersonModel from "../../models/contactPersonModel.js"
import currencyModel from "../../models/currencyModel.js"
import designationModel from "../../models/designationModel.js"
import equipmentCategoryModel from "../../models/equipmentCategoryModel.js"
import equipmentModel from "../../models/equipmentModel.js"
import equipmentMovementModel from "../../models/equipmentMovementModel.js"
import equipmentRefModel from "../../models/equipmentRefModel.js"
import invoiceModel from "../../models/invoiceModel.js"
import invoicePaymentModel from "../../models/invoicePaymentModel.js"
import invoiceStatusModel from "../../models/invoiceStatusModel.js"
import invoiceTypeModel from "../../models/invoiceTypeModel.js"
import locationModel from "../../models/locationModel.js"
import locationTypeModel from "../../models/locationTypeModel.js"
import officeModel from "../../models/officeModel.js"
import orderItemModel from "../../models/orderItemModel.js"
import pictureModel from "../../models/pictureModel.js"
import pocModel from "../../models/pocModel.js"
import providerModel from "../../models/providerModel.js"
import recurrentInvoiceModel from "../../models/recurrentInvoiceModel.js"
import roleModel from "../../models/roleModel.js"
import salesInvoiceModel from "../../models/salesInvoiceModel.js"
import serviceCategoryModel from "../../models/serviceCategoryModel.js"
import serviceModel from "../../models/serviceModel.js"
import serviceSubscriptionModel from "../../models/serviceSubscriptionModel.js"
import stockMovementListModel from "../../models/stockMovementListModel.js"
import stockMovementModel from "../../models/stockMovementModel.js"
import stockMovementStatusModel from "../../models/stockMovementStatusModel.js"
import stockReceivedModel from "../../models/stockReceivedModel.js"
import storeModel from "../../models/storeModel.js"
import subscriptionStatusModel from "../../models/subscriptionStatusModel.js"
import suspensionInvoiceModel from "../../models/suspensionInvoiceModel.js"

const routeOptions=[
    {Model:departmentModel, Route:"/department"},
    {Model:staffmodel, Route:"/staff"},
    {Model:agentModel, Route:"/agent"},
    {Model:agentPaymentModel, Route:"/agentPayment"},
    {Model:companyModel, Route:"/company"},
    {Model:contactPersonModel, Route:"/contactPerson"},
    {Model:currencyModel, Route:"/currency"},
    {Model:designationModel, Route:"/designation"},
    {Model:equipmentCategoryModel, Route:"/equipmentCategory"},
    {Model:equipmentModel, Route:"/equipment"},
    {Model:equipmentMovementModel, Route:"/equipmentMovement"},
    {Model:equipmentRefModel, Route:"/equipmentRef"},
    {Model:invoiceModel, Route:"/invoice"},
    {Model:invoicePaymentModel, Route:"/invoicePayment"},
    {Model:invoiceStatusModel, Route:"/invoiceStatus"},
    {Model:invoiceTypeModel, Route:"/invoiceType"},
    {Model:locationModel, Route:"/location"},
    {Model:locationTypeModel, Route:"/locationType"},
    {Model:officeModel, Route:"/office"},
    {Model:orderItemModel, Route:"/orderItem"},
    {Model:pictureModel, Route:"/picture"},
    {Model:pocModel, Route:"/poc"},
    {Model:providerModel, Route:"/provider"},
    {Model:recurrentInvoiceModel, Route:"/recurrentInvoice"},
    {Model:roleModel, Route:"/role"},
    {Model:salesInvoiceModel, Route:"/salesInvoice"},
    {Model:serviceCategoryModel, Route:"/serviceCategory"},
    {Model:serviceModel, Route:"/service"},
    {Model:serviceSubscriptionModel, Route:"/serviceSubscription"},
    {Model:stockMovementListModel, Route:"/stockMovementList"},
    {Model:stockMovementModel, Route:"/stockMovement"},
    {Model:stockMovementStatusModel, Route:"/stockMovementStatus"},
    {Model:stockReceivedModel, Route:"/stockReceived"},
    {Model:storeModel, Route:"/store"},
    {Model:subscriptionStatusModel, Route:"/subscriptionStatus"},
    {Model:suspensionInvoiceModel, Route:"/suspensionInvoice"} 
]

export default routeOptions;