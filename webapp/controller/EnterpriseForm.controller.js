sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/ui/model/json/JSONModel"
],
function (Controller,JSONModel) {
    "use strict";

    return Controller.extend("com.enterpriseform.enterpriserequestformm.controller.EnterpriseForm", {
        onInit: function () {
                var oModel = this.getOwnerComponent().getModel("jsonData");
                this.getView().setModel(oModel,"jsonModel");
                 console.log(oModel);
        },

        // Called when a selection is made in the ComboBoxes
     onMaterialGroupSelect: function(oEvent) {
        this._checkWizardStep();
    },

    onPurGroupSelect: function(oEvent) {
        this._checkWizardStep();
    },

    // This function checks the selections and determines which control to show in the next step
    _checkWizardStep: function() {
        var oView = this.getView();
        var sMaterialGroup = oView.byId("materialgroupID").getSelectedKey();
        var sPurGroup = oView.byId("idPurchaseGroup").getSelectedKey();

        var oTable = oView.byId("stakeholderTable");
        var oForm = oView.byId("234dd");

        // Logic: Show Table if both selections are MIG_03 and PG_03, otherwise show Form
        if (sMaterialGroup === "MTG_03" && sPurGroup === "PG_03") {
            oTable.setVisible(true);
            oForm.setVisible(false);
        } else {
            oTable.setVisible(false);
            oForm.setVisible(true);
        }
    },

    onComplete:function(){
        console.log("Submit button clicked")
          
    var screatedBy = this.byId("createdByid").getValue();
    var sRequestedFor = this.byId("RequestedforID").setSelectedKey();
    var sMaterialGroup = this.byId("materialgroupID").setSelectedKey();
    var sPurchaseGroup = this.byId("idPurchaseGroup").setSelectedKey();
    var senterprise = this.byId("enterpriseID").getValue();

    var sOrganizationUnit = this.byId("OrganizationUnitID").setSelectedKey();
    var sFor = this.byId("for").getValue();
    var sRequestType = this.byId("idRequestType").setSelectedKey();
    var sCommodityType = this.byId("idCommodity").setSelectedKey();
    var sBudget = this.byId("idBudget").setSelectedKey();

    var sProjectName = this.byId("ProjectName").getValue();
    var sFunding = this.byId("idFunding").setSelectedKey();
    var sProjectAmount = this.byId("projectAmount").getValue();
    var sDate = this.byId("Date").getValue();
    var sDateA = this.byId("DateA").getValue();

    console.log(sDate,sDateA)

    var sCyberrisklevel = this.byId("idCyberrisklevel").setSelectedKey();
    var sPotential = this.byId("idPotential").setSelectedKey();
    var sNERC = this.byId("idNERC").setSelectedKey();
    var sFRMApproval = this.byId("FRMApproval").getValue();
    var sPriority = this.byId("idPriority").setSelectedKey();

    var sEdisonRep = this.byId("EdisonRep").getValue();
    var sDetails = this.byId("Details").getValue();
    var sComments = this.byId("Comments").getValue();

        let oModel = this.getView().getModel();
        let oBindList = oModel.bindList("/Comments");
    
        oBindList.create({
            createdBy: screatedBy,
            requestedFor: sRequestedFor,
            materialGroup:sMaterialGroup,
            purchaseGroup:sPurchaseGroup,
            enterpriseProcurement: senterprise,

            enterpriseProcurementOrganizationUnit: sOrganizationUnit,
            stakeFor:sFor,
            requestType:sRequestType,
            commodityType:sCommodityType,
            budgetApproved:sBudget,

            projectName:sProjectName,
            typeOfFunding:sFunding,
            estimatedProjAmount:sProjectAmount,
            estimatedProjStartDate:sDate,
            estimatedProjEndDate:sDateA,

            cyberRiskLevel:sCyberrisklevel,
            potentialSupplier:sPotential,
            nercCIP:sNERC,
            frmApproval:sFRMApproval,
            priority:sPriority,

            edisonRep:sEdisonRep,
            provideProcReqDetails:sDetails,
            comments:sComments,



        
        });
    }
    });
});
