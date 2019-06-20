Vim�UnDo� ֈ1`;��$�>�/U��U:z����˲�t�   a                                   \� 4    _�                             ����                                                                                                                                                                                                                                                                                                                                                             \� /     �               `   )import React, { Component } from "react";   .import { inject, observer } from "mobx-react";   Cimport AgileExcel from "../../../../common/agilePlugin/agileExcel";   Fimport { renderModuleTab } from "../../../pageUI/excelCellComponents";   Nimport { getColumns, getColumnOptions, multipleSelect } from "../../../index";       @inject("stores")   	@observer   7export default class ExcelFeedbacks extends Component {       render() {           const {                stores: { project },   1            episodeInfoStore: { feedbacksStore },               pathname,               parentComponent           } = this.props;               const {               fetchFeedbacks,   !            handleFrequenceFetch,               updateFeedback,   !            showAddFeedbackModal,               filters,               tableOperations           } = feedbacksStore;   @        const { currentLanguage } = this.props.stores.viewStore;           return (               <AgileExcel   6                ref={n => (parentComponent.excel = n)}   G                title={currentLanguage.get("feedback.name") // "反馈"                   }   /                multipleSelect={multipleSelect}   N                storageName={`al-excel-episode-feedbacks-excel-${project.id}`}   <                storageVersion={project.project_update_time}                   type={"pure"}                    module={"excel"}   $                fixedColumnCount={1}   #                renderModule={() =>   %                    renderModuleTab({   "                        modules: [                               {   .                                name: "excel",   7                                iconClass: "icon-lie1",   9                                url: `${pathname}/excel`,   4                                handleClick: () => {   F                                    feedbacksStore.setModule("excel");   !                                }                               }                           ],   (                        module: "excel",   O                        storageName: `al-module-detail-feedbacks-${project.id}`                       })}   %                columns={getColumns({                       project,   /                    scopeStore: feedbacksStore,   $                    module: "excel",   0                    scopeType: "feedbackFields",   &                    scope: "feedback",   0                    history: this.props.history,   2                    scopeStatus: "feedbackStatus",   *                    type_id: "feedback_id"                   })}   1                columnOptions={getColumnOptions({                       project,   /                    scopeStore: feedbacksStore,   $                    module: "excel",   0                    scopeType: "feedbackFields",   %                    scope: "feedback"                   })}   ,                operations={tableOperations}   +                fetchDatas={fetchFeedbacks}   ;                handleFrequenceFetch={handleFrequenceFetch}   +                updateData={updateFeedback}                   add={[   H                    ...(project.userOperations["entity_feedback_create"]   0                        ? [showAddFeedbackModal]                           : [])                   ]}   ,                adaptRowHeight={({ row }) =>                       row &&   %                    (row.thumbnail ||   0                        (row.custom_field || [])   >                            .filter(vv => vv.type === "Image")   4                            .find(val => val.value))                           ? 52                           : 20}                   search={true}   !                filters={filters}   ,                filterHeightDifference={450}   S                elementId={`al-excel-episode-feedbacks-excel--${project.id}-excel`}   *                scopeType="feedbackFields"   E                setEditFieldData={project.lineStore.setEditFieldData}               />   
        );       }   }5�_�                     \        ����                                                                                                                                                                                                                                                                                                                                                             \� 3    �   \   ^   `    �   \   ]   `    5��