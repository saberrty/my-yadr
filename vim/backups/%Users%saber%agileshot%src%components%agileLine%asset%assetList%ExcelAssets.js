Vim�UnDo� �$q�ǈ����&@LZ�g�'�B��扬�,   v                                   \��    _�                     ?       ����                                                                                                                                                                                                                                                                                                                                                             \��     �               u   )import React, { Component } from "react";   .import { inject, observer } from "mobx-react";   .import { withRouter } from "react-router-dom";   @import AgileExcel from "../../../common/agilePlugin/agileExcel";   Cimport { renderModuleTab } from "../../pageUI/excelCellComponents";   Kimport { getColumns, getColumnOptions, multipleSelect } from "../../index";       @inject("stores")   @withRouter   	@observer   4export default class ExcelAssets extends Component {       render() {   M        const { stores: { project }, parentComponent, history } = this.props;   C        const pathname = `/project/${project.id}/agileline/assets`;   @        const { currentLanguage } = this.props.stores.viewStore;           return (               <AgileExcel   6                ref={n => (parentComponent.excel = n)}   D                title={currentLanguage.get("asset.title") //"资产"                   }   /                multipleSelect={multipleSelect}   !                headerHeight={37}   l                storageName={`al-excel-assets-${project.id}-${project.type}-${project.scriptPattern}-excel`}   <                storageVersion={project.project_update_time}                   type={"pure"}                    module={"excel"}   $                fixedColumnCount={1}   #                renderModule={() =>   %                    renderModuleTab({   "                        modules: [                               {   -                                name: "list",   :                                iconClass: "icon-fenlan1",   8                                url: `${pathname}/list`,   [                                handleClick: () => project.assetPageStore.setModule("list")                               },                               {   -                                name: "card",   8                                iconClass: "icon-kuai1",   8                                url: `${pathname}/card`,   [                                handleClick: () => project.assetPageStore.setModule("card")                               },                               {   .                                name: "excel",   7                                iconClass: "icon-lie1",   9                                url: `${pathname}/excel`,   \                                handleClick: () => project.assetPageStore.setModule("excel")                               }                           ],   (                        module: "excel",   J                        storageName: `al-module-list-assets-${project.id}`                       })}   %                columns={getColumns({                       project,   %                    scopeStore: null,   $                    module: "excel",   -                    scopeType: "assetFields",   #                    scope: "asset",                       history,   /                    scopeStatus: "assetStatus",   '                    type_id: "asset_id"                   })}   1                columnOptions={getColumnOptions({                       project,   %                    scopeStore: null,   $                    module: "excel",   -                    scopeType: "assetFields",   "                    scope: "asset"                   })}   $                extraColumnOption={{   9                    ...project.assetPipeLineColumnOption,   #                    fieldOptions: [   *                        { divider: true },                           {                               name: currentLanguage.get("common.entity.fieldOptions.assetManagement"), //"管理资产工作流",   -                            icon: "&#xe708;",   .                            handleClick: () =>   ^                                history.push(`/project/${project.id}/settings/asset/pipeline`)                           }                       ]                   }}   C                operations={project.assetPageStore.tableOperations}                   fieldOption={{   o                    name: currentLanguage.get("common.entity.fieldOptions.fieldsManagement"), //"字段管理",   %                    icon: "&#xe671;",   c                    handleClick: () => history.push(`/project/${project.id}/settings/asset/fields`)                   }}   ?                fetchDatas={project.assetPageStore.fetchAssets}   R                handleFrequenceFetch={project.assetPageStore.handleFrequenceFetch}   ?                updateChild={project.assetPageStore.updateTask}   ?                updateData={project.assetPageStore.updateAsset}                   adaptKeys={{   &                    firstKey: "tasks",   %                    secondKey: "step"                   }}                   add={   E                    project.userOperations["entity_asset_create"] ? (   @                        project.assetPageStore.showAddAssetModal                       ) : null                   }   ,                adaptRowHeight={({ row }) =>                       row &&   %                    (row.thumbnail ||   0                        (row.custom_field || [])   >                            .filter(vv => vv.type === "Image")   4                            .find(val => val.value))                           ? 52                           : 20}                   search={true}   8                filters={project.assetPageStore.filters}   Q                elementId={`al-excel-assets-${project.id}-${project.type}-excel`}   '                scopeType="assetFields"   E                setEditFieldData={project.lineStore.setEditFieldData}               />   
        );       }   }5�_�                    q       ����                                                                                                                                                                                                                                                                                                                                                             \��     �   q   s   u    �   q   r   u    5�_�                     r       ����                                                                                                                                                                                                                                                                                                                                                             \��    �   q   s          +                    perpageKey={project.id}5��