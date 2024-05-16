//@ui5-bundle com/mindset/vendorrequestcapapplication/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"com/mindset/vendorrequestcapapplication/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("com.mindset.vendorrequestcapapplication.Component",{metadata:{manifest:"json"}})});
},
	"com/mindset/vendorrequestcapapplication/i18n/i18n.properties":'# This is the resource bundle for com.mindset.vendorrequestcapapplication\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=An SAP Fiori application.',
	"com/mindset/vendorrequestcapapplication/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"com.mindset.vendorrequestcapapplication","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.13.4","toolsId":"fac0f359-2825-4b68-b7da-8dd57c98f708"},"dataSources":{"mainService":{"uri":"odata/v4/vendor-req/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.123.2","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.mindset.vendorrequestcapapplication.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"VendorRequestDetailsList","target":"VendorRequestDetailsList"},{"pattern":"VendorRequestDetails({key}):?query:","name":"VendorRequestDetailsObjectPage","target":"VendorRequestDetailsObjectPage"}],"targets":{"VendorRequestDetailsList":{"type":"Component","id":"VendorRequestDetailsList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/VendorRequestDetails","variantManagement":"Page","navigation":{"VendorRequestDetails":{"detail":{"route":"VendorRequestDetailsObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"VendorRequestDetailsObjectPage":{"type":"Component","id":"VendorRequestDetailsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/VendorRequestDetails"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"}}'
}});
