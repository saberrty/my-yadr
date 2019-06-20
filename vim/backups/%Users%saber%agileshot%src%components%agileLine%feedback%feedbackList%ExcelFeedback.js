Vim�UnDo� �m�E.�M(��/��� '�­3k�   a                                  \���    _�                             ����                                                                                                                                                                                                                                                                                                                                                             \�Z     �               _   )import React, { Component } from "react";   .import { inject, observer } from "mobx-react";   .import { withRouter } from "react-router-dom";   @import AgileExcel from "../../../common/agilePlugin/agileExcel";   Cimport { renderModuleTab } from "../../pageUI/excelCellComponents";   Kimport { getColumns, getColumnOptions, multipleSelect } from "../../index";       @inject("stores")   @withRouter   	@observer   6export default class ExcelFeedback extends Component {       render() {   M        const { stores: { project }, parentComponent, history } = this.props;   F        const pathname = `/project/${project.id}/agileline/feedbacks`;   @        const { currentLanguage } = this.props.stores.viewStore;               return (               <AgileExcel   6                ref={n => (parentComponent.excel = n)}   D                title={currentLanguage.get("feedback.name") //反馈                   }   /                multipleSelect={multipleSelect}   !                headerHeight={37}   F                storageName={`al-excel-feedbacks-${project.id}-excel`}   ;                storageVersion={project.projectUpdate_time}                   type={"pure"}                    module={"excel"}   $                fixedColumnCount={1}   #                renderModule={() =>   %                    renderModuleTab({   "                        modules: [                               {   -                                name: "list",   :                                iconClass: "icon-fenlan1",   8                                url: `${pathname}/list`,   ^                                handleClick: () => project.feedbackPageStore.setModule("list")                               },                               {   .                                name: "excel",   7                                iconClass: "icon-lie1",   9                                url: `${pathname}/excel`,   _                                handleClick: () => project.feedbackPageStore.setModule("excel")                               }                           ],   (                        module: "excel",   M                        storageName: `al-module-list-feedbacks-${project.id}`                       })}   %                columns={getColumns({                       project,   $                    module: "excel",   0                    scopeType: "feedbackFields",   &                    scope: "feedback",                       history,   2                    scopeStatus: "feedbackStatus",   *                    type_id: "feedback_id"                   })}   1                columnOptions={getColumnOptions({                       project,   %                    scopeStore: null,   $                    module: "excel",   0                    scopeType: "feedbackFields",   %                    scope: "feedback"                   })}   F                operations={project.feedbackPageStore.tableOperations}                   fieldOption={{   o                    name: currentLanguage.get("common.entity.fieldOptions.fieldsManagement"), //"字段管理",   %                    icon: "&#xe671;",   &                    handleClick: () =>   W                        history.push(`/project/${project.id}/settings/feedback/fields`)                   }}   E                fetchDatas={project.feedbackPageStore.fetchFeedbacks}   U                handleFrequenceFetch={project.feedbackPageStore.handleFrequenceFetch}   E                updateData={project.feedbackPageStore.updateFeedback}                   add={   H                    project.userOperations["entity_feedback_create"] ? (   F                        project.feedbackPageStore.showAddFeedbackModal                       ) : null                   }   ,                adaptRowHeight={({ row }) =>                       row &&   %                    (row.thumbnail ||   0                        (row.custom_field || [])   >                            .filter(vv => vv.type === "Image")   4                            .find(val => val.value))                           ? 52                           : 20}                   search={true}   ;                filters={project.feedbackPageStore.filters}   D                elementId={`al-excel-feedbacks-${project.id}-excel`}   *                scopeType="feedbackFields"   E                setEditFieldData={project.lineStore.setEditFieldData}               />   
        );       }   }5�_�                    [        ����                                                                                                                                                                                                                                                                                                                                                  V        \�d    �   [   ]   _    �   [   \   _    5�_�                    O   ,    ����                                                                                                                                                                                                                                                                                                                                                             \��a     �   O   Q   a    �   N   Q   `      ,                adaptRowHeight={({ row }) =>5�_�                    R       ����                                                                                                                                                                                                                                                                                                                            R          X          v       \��i     �   Q   S   b                          row &&   %                    (row.thumbnail ||   0                        (row.custom_field || [])   >                            .filter(vv => vv.type === "Image")   4                            .find(val => val.value))                           ? 52                           : 20}5�_�                    P        ����                                                                                                                                                                                                                                                                                                                            R          R   /       v       \��i     �   O   W   \       �   P   Q   \    5�_�                    P        ����                                                                                                                                                                                                                                                                                                                            X          X   /       v       \��w     �   O   Q   b      row &&5�_�                    P       ����                                                                                                                                                                                                                                                                                                                            X          X   /       v       \��{     �   O   Q   b      return ()row &&5�_�      	              V       ����                                                                                                                                                                                                                                                                                                                            X          X   /       v       \��~     �   U   W   b                              : 20�   V   W   b    5�_�      
           	   O       ����                                                                                                                                                                                                                                                                                                                            X          X   /       v       \���     �   O   Q   c                        �   O   Q   b    5�_�   	              
   P   !    ����                                                                                                                                                                                                                                                                                                                            Y          Y   /       v       \���     �   O   Q   c      $                  console.info(rouw)5�_�   
                 P   #    ����                                                                                                                                                                                                                                                                                                                            Y          Y   /       v       \���    �   O   Q   c      #                  console.info(row)5�_�                    c        ����                                                                                                                                                                                                                                                                                                                            Y          Y   /       v       \���    �   a   c              }�   `   b          
        );�   _   a                      />�   ^   `          '                perpageKey={project.id}�   ]   _          E                setEditFieldData={project.lineStore.setEditFieldData}�   \   ^          *                scopeType="feedbackFields"�   [   ]          D                elementId={`al-excel-feedbacks-${project.id}-excel`}�   Z   \          ;                filters={project.feedbackPageStore.filters}�   Y   [                          search={true}�   X   Z                              }�   W   Y                          }�   V   X                                  : 20)�   U   W                                  ? 52�   T   V          4                            .find(val => val.value))�   S   U          >                            .filter(vv => vv.type === "Image")�   R   T          0                        (row.custom_field || [])�   Q   S          %                    (row.thumbnail ||�   P   R          return (row &&�   O   Q          $                  console.info(row);�   N   P          .                adaptRowHeight={({ row }) => {�   M   O                          }�   L   N                              ) : null�   K   M          F                        project.feedbackPageStore.showAddFeedbackModal�   J   L          H                    project.userOperations["entity_feedback_create"] ? (�   I   K                          add={�   H   J          E                updateData={project.feedbackPageStore.updateFeedback}�   G   I          U                handleFrequenceFetch={project.feedbackPageStore.handleFrequenceFetch}�   F   H          E                fetchDatas={project.feedbackPageStore.fetchFeedbacks}�   E   G                          }}�   D   F          W                        history.push(`/project/${project.id}/settings/feedback/fields`)�   C   E          &                    handleClick: () =>�   B   D          %                    icon: "&#xe671;",�   A   C          o                    name: currentLanguage.get("common.entity.fieldOptions.fieldsManagement"), //"字段管理",�   @   B                          fieldOption={{�   ?   A          F                operations={project.feedbackPageStore.tableOperations}�   >   @                          })}�   =   ?          %                    scope: "feedback"�   <   >          0                    scopeType: "feedbackFields",�   ;   =          $                    module: "excel",�   :   <          %                    scopeStore: null,�   9   ;                              project,�   8   :          1                columnOptions={getColumnOptions({�   7   9                          })}�   6   8          *                    type_id: "feedback_id"�   5   7          2                    scopeStatus: "feedbackStatus",�   4   6                              history,�   3   5          &                    scope: "feedback",�   2   4          0                    scopeType: "feedbackFields",�   1   3          $                    module: "excel",�   0   2                              project,�   /   1          %                columns={getColumns({�   .   0                              })}�   -   /          M                        storageName: `al-module-list-feedbacks-${project.id}`�   ,   .          (                        module: "excel",�   +   -                                  ],�   *   ,                                      }�   )   +          _                                handleClick: () => project.feedbackPageStore.setModule("excel")�   (   *          9                                url: `${pathname}/excel`,�   '   )          7                                iconClass: "icon-lie1",�   &   (          .                                name: "excel",�   %   '                                      {�   $   &                                      },�   #   %          ^                                handleClick: () => project.feedbackPageStore.setModule("list")�   "   $          8                                url: `${pathname}/list`,�   !   #          :                                iconClass: "icon-fenlan1",�       "          -                                name: "list",�      !                                      {�                 "                        modules: [�                %                    renderModuleTab({�                #                renderModule={() =>�                $                fixedColumnCount={1}�                                 module={"excel"}�                                type={"pure"}�                ;                storageVersion={project.projectUpdate_time}�                F                storageName={`al-excel-feedbacks-${project.id}-excel`}�                !                headerHeight={37}�                /                multipleSelect={multipleSelect}�                                }�                D                title={currentLanguage.get("feedback.name") //反馈�                6                ref={n => (parentComponent.excel = n)}�                            <AgileExcel�                        return (�                 �                @        const { currentLanguage } = this.props.stores.viewStore;�                F        const pathname = `/project/${project.id}/agileline/feedbacks`;�                M        const { stores: { project }, parentComponent, history } = this.props;�                    render() {�   
             6export default class ExcelFeedback extends Component {�   	             	@observer�      
          @withRouter�      	          @inject("stores")�                 �                Kimport { getColumns, getColumnOptions, multipleSelect } from "../../index";�                Cimport { renderModuleTab } from "../../pageUI/excelCellComponents";�                @import AgileExcel from "../../../common/agilePlugin/agileExcel";�                .import { withRouter } from "react-router-dom";�                .import { inject, observer } from "mobx-react";�                 )import React, { Component } from "react";�   b   c          }5�_�                     P       ����                                                                                                                                                                                                                                                                                                                            Y          Y   /       v       \���    �   O   P          &                    console.info(row);5��